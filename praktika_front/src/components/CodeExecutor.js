import React, { useState } from 'react';
import axios from 'axios';
import CodeEditor from './CodeEditor';
import '../styles/CodeEditor.css';


const CodeExecutor = ({codeExecutor}) => {
  const [code, setCode] = useState('');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [resultMessage, setResultMessage] = useState('');
  const [input_data, setInputData] = useState('');
  const [expectedOutput, setExpectedOutput] = useState('');

  const [isLoading, setIsLoading] = useState(false); 

  const TestData = codeExecutor.test

  const executeCode = async () => {
    setIsLoading(true); 
    try {
      const response = await axios.post('http://localhost:5000/execute', { code, input, TestData });
      setOutput(response.data.output);
      setError(response.data.error);
      setResultMessage(response.data.resultMessage);
      setInputData(response.data.inputData);
      setExpectedOutput(response.data.expectedOutput);
    } catch (err) {
      console.log(err)
      setError('Error executing code.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>

      <div className='code-executor'>
        <h2>Задание</h2>
        <p>{codeExecutor.taskDescription}</p>
        <p><strong>Входные данные:</strong> {codeExecutor.taskInputFormat}</p>
        <p><strong>Выходные данные:</strong> {codeExecutor.taskOutputFormat}</p>
        <div>
          <h3>Пример:</h3>
          <pre>Входные данные:{'\n'}{codeExecutor ? codeExecutor.taskExample.input : ''}</pre>
          <pre>Выходные данные:{'\n'}{codeExecutor ? codeExecutor.taskExample.output : ''}</pre>
        </div>
      </div>

      <div className="editor-container">
        <CodeEditor code={code} setCode={setCode} input={input} setInput={setInput} />
        
        <div className="editor-buttons">
          <button
            disabled={isLoading} 
            onClick={() => executeCode('')} 
            className={isLoading ? 'button-loading' : ''}>
          Запустить код</button>
          {TestData && (
            <button 
              style={{ marginLeft: '20px' }}
              disabled={isLoading} 
              onClick={() => executeCode('run')} 
              className={isLoading ? 'button-loading' : ''}>
              Отправить на проверку
            </button>
          )}
        </div>

        <div className="editor-result">
          {resultMessage &&
            <h2 style = {{borderBottom: "2px solid #282c34"}} >{resultMessage}</h2>
          }

          {error && (
            <div>
              <h3>Ошибка:</h3>
              <pre>{error}</pre>
            </div>
          )}

          <h3>Входные данные:</h3>
          <pre>{input_data}</pre>

          <h3>Ваш вывод:</h3>
          <pre>{output}</pre>

          {expectedOutput && 
            <div>
              <h3>Ожидаемый вывод:</h3>
              <pre>{expectedOutput}</pre>
            </div>
          }
        </div>
      </div>

    </div>
  )}

export default CodeExecutor;
