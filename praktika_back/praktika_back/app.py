from flask import Flask, request, jsonify
import subprocess
import tempfile
import os
import re
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/')
def index():
    return 'Flask Server is running!'

@app.route('/execute', methods=['POST'])
@cross_origin()
def execute_code():
    data = request.get_json()
    code = data.get('code')
    action = data.get('action')
    test_data = data.get('TestData', [])
    flag = True

    if action and test_data:
        for test in test_data:
            flag = True
            expected_output = test['expectedOutput']
            input_data = test['input']

            with tempfile.NamedTemporaryFile(suffix=".py", delete=False) as temp_code_file:
                temp_code_file.write(code.encode('utf-8'))
                temp_code_file_name = temp_code_file.name

            try:
                result = subprocess.run(
                    ['python', temp_code_file_name], 
                    input=input_data, 
                    capture_output=True, 
                    text=True, 
                    timeout=5
                )
                actual_output = result.stdout.strip()
                error_output = re.sub(r'File ".*?"', 'File "user code"', result.stderr)
                if actual_output != expected_output:
                    flag = False
                    break
            except subprocess.TimeoutExpired:
                return jsonify({
                    'output': "",
                    'error': "Превышено время исполнения!",
                    'resultMessage': "Неправильно",
                    'expectedOutput': expected_output,
                    'inputData': input_data
                })
                break
            finally:
                os.remove(temp_code_file_name)

        result = "Неправильно"
        inputt = input_data
        if flag:
            result = "Правильно"
            inputt = "Все тесты пройдены!"
            expected_output = ''
            actual_output = ''

        return jsonify({
            'output': actual_output,
            'error': error_output,
            'resultMessage': result,
            'expectedOutput': expected_output,
            'inputData': inputt
        })
    else:
        input_data = data.get('input', '')

        with tempfile.NamedTemporaryFile(suffix=".py", delete=False) as temp_code_file:
            temp_code_file.write(code.encode('utf-8'))
            temp_code_file_name = temp_code_file.name

        try:
            result = subprocess.run(
                ['python', temp_code_file_name], 
                input=input_data, 
                capture_output=True, 
                text=True, 
                timeout=5
            )

            if result.stderr:
                error_output = re.sub(r'File ".*?"', 'File "user code"', result.stderr)
            else:
                error_output = ''
        except subprocess.TimeoutExpired:
            return jsonify({
                'output': "",
                'error': "Превышено время исполнения!",
                'resultMessage': '',
                'expectedOutput': '',
                'inputData': input_data
            })
        finally:
            os.remove(temp_code_file_name)
        
        return jsonify({
            'output': result.stdout,
            'error': error_output,
            'resultMessage': '',
            'expectedOutput': '',
            'inputData': input_data
        })

if __name__ == '__main__':
    app.run(debug=True)
