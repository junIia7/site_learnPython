import React from 'react';
import '../styles/Lesson-style.css';
import Quiz from './Quiz';
import CodeExecutor from './CodeExecutor';
import '../styles/Quiz.css'
import '../styles/CodeEditor.css'

const Lesson = ({ lesson }) => {
  return (
    <div className='lesson-container'>
      <div className='lesson-header'>
        <h1>{lesson.title}</h1>
      </div>
      {lesson.content.map((section, index) => (
        <div className='lesson-section' key={index}>
          {renderSection(section)}
        </div>
      ))}
    </div>
  );
};

const renderSection = (section) => {
  switch (section.type) {
    case 'text':
      return <p style={{ overflowWrap: 'break-word' }}>{section.text}</p>
    case 'list':
      return (
        <ul>
          {section.list.items.map((item, index) => (
            <li style={{ overflowWrap: 'break-word' }} key={index}>{item}</li>
          ))}
        </ul>
      )
    case 'code':
      return (
        <pre>
          <code style={{ overflowWrap: 'break-word' }}>
            {section.code}
          </code>
        </pre>
      )
    case 'subtitle':
      return <h2 style={{ overflowWrap: 'break-word' }}>{section.subtitle}</h2>
    case 'quizzes':
      return (
        <div className='lesson-quizzes'>
          <h2>Тест</h2>
          <Quiz quiz={section.quizzes} />
        </div>
      )
    case 'codeExecutor':
      return (
        <CodeExecutor codeExecutor={section.codeExecutor} />
      )
    case 'image':
      return (
        <div className='lesson-image'>
          <img src={`http://localhost:4000/${section.image.path}`} alt={section.image.caption} />
          <p style={{ overflowWrap: 'break-word' }}>{section.image.caption}</p>
        </div>
      );
    default:
      return null;
  }
}

export default Lesson;
