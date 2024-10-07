import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/theme-github';

const CodeEditor = ({ code, setCode, input, setInput }) => {
  return (
    <div>
      <AceEditor
        mode="python"
        theme="github"
        name="codeEditor"
        onChange={setCode}
        value={code}
        style={{ width:"95%", height:"300px", border: '1px solid #ccc', borderRadius: '5px',}}
        setOptions={{fontSize: '16px',}}
      />
      <textarea
        placeholder="Введите входные данные"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ 
          width: '80%', 
          height: '100px', 
          marginTop: '10px', 
          resize: 'none', 
          borderRadius: '5px', 
          fontSize: '16px', }}
      />
    </div>
  );
}

export default CodeEditor;
