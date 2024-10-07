import React, { useState } from 'react';
import '../styles/AddLesson.css';

const AddLesson = () => {
  const [lesson, setLesson] = useState({
    title: '',
    content: []
  });

  const [selectedFile, setSelectedFile] = useState(null);

  const handleTitleChange = (e) => {
    setLesson({ ...lesson, title: e.target.value });
  };

  const handleContentChange = (index, type, value) => {
    const newContent = [...lesson.content];
    newContent[index][type] = value;
    setLesson({ ...lesson, content: newContent });
  };

  const addContentItem = (type) => {
    let newContentItem;
    switch (type) {
      case 'text':
        newContentItem = { type, text: '' };
        break;
      case 'list':
        newContentItem = { type, list: { items: [''] } };
        break;
      case 'code':
        newContentItem = { type, code: '' };
        break;
      case 'subtitle':
        newContentItem = { type, subtitle: '' };
        break;
      case 'quizzes':
        newContentItem = { type, quizzes: [{ question: '', options: [''], answer: '' }] };
        break;
      case 'codeExecutor':
        newContentItem = { 
          type, 
          codeExecutor: { 
            test: [{ input: '', expectedOutput: '' }], 
            taskDescription: '', 
            taskInputFormat: '', 
            taskOutputFormat: '', 
            taskExample: { input: '', output: '' } 
          } 
        };
        break;
      case 'image':
        newContentItem = { type, image: { path: '', caption: '' } };
        break;
      default:
        return;
    }
    setLesson({ ...lesson, content: [...lesson.content, newContentItem] });
  };

  const removeContentItem = (index) => {
    const newContent = [...lesson.content];
    newContent.splice(index, 1);
    setLesson({ ...lesson, content: newContent });
  };

  const handleListItemChange = (sectionIndex, itemIndex, value) => {
    const newContent = [...lesson.content];
    newContent[sectionIndex].list.items[itemIndex] = value;
    setLesson({ ...lesson, content: newContent });
  };

  const addListItem = (sectionIndex) => {
    const newContent = [...lesson.content];
    newContent[sectionIndex].list.items.push('');
    setLesson({ ...lesson, content: newContent });
  };

  const removeListItem = (sectionIndex, itemIndex) => {
    const newContent = [...lesson.content];
    newContent[sectionIndex].list.items.splice(itemIndex, 1);
    setLesson({ ...lesson, content: newContent });
  };

  const handleQuizChange = (sectionIndex, quizIndex, event) => {
    const { name, value, dataset } = event.target;
    const newContent = [...lesson.content];
    if (name === 'options') {
      const optionIndex = dataset.index;
      newContent[sectionIndex].quizzes[quizIndex].options[optionIndex] = value;
    } else {
      newContent[sectionIndex].quizzes[quizIndex][name] = value;
    }
    setLesson({ ...lesson, content: newContent });
  };

  const addOption = (sectionIndex, quizIndex) => {
    const newContent = [...lesson.content];
    newContent[sectionIndex].quizzes[quizIndex].options.push('');
    setLesson({ ...lesson, content: newContent });
  };

  const removeOption = (sectionIndex, quizIndex, optionIndex) => {
    const newContent = [...lesson.content];
    newContent[sectionIndex].quizzes[quizIndex].options.splice(optionIndex, 1);
    setLesson({ ...lesson, content: newContent });
  };

  const addQuiz = (sectionIndex) => {
    const newContent = [...lesson.content];
    newContent[sectionIndex].quizzes.push({ question: '', options: [''], answer: '' });
    setLesson({ ...lesson, content: newContent });
  };

  const removeQuiz = (sectionIndex, quizIndex) => {
    const newContent = [...lesson.content];
    newContent[sectionIndex].quizzes.splice(quizIndex, 1);
    setLesson({ ...lesson, content: newContent });
  };

  const handleCodeExecutorChange = (sectionIndex, field, value, testIndex) => {
    const newContent = [...lesson.content];
    if(field === 'taskExample.input')
      newContent[sectionIndex].codeExecutor.taskExample.input = value
    else if (field === 'taskExample.output')
      newContent[sectionIndex].codeExecutor.taskExample.output = value
    else if (field === 'test.input')
      newContent[sectionIndex].codeExecutor.test[testIndex].input = value
    else if (field === 'test.expectedOutput') 
      newContent[sectionIndex].codeExecutor.test[testIndex].expectedOutput = value
    else
      newContent[sectionIndex].codeExecutor[field] = value;
    setLesson({ ...lesson, content: newContent });
  };

  const addCodeExecutorTest = (sectionIndex) => {
    const newContent = [...lesson.content];
    newContent[sectionIndex].codeExecutor.test.push({ input: '', expectedOutput: '' });
    setLesson({ ...lesson, content: newContent });
  };

  const removeCodeExecutorTest = (sectionIndex, testIndex) => {
    const newContent = [...lesson.content];
    newContent[sectionIndex].codeExecutor.test.splice(testIndex, 1);
    setLesson({ ...lesson, content: newContent });
  };

  const handleImageUpload = async (index) => {
    if (!selectedFile) {
      alert('Please select a file first!');
      return;
    }
  
    const formData = new FormData();
    formData.append('image', selectedFile);
  
    try {
      const response = await fetch('http://localhost:4000/upload', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        throw new Error('Failed to upload image');
      }
      const data = await response.json();
      const newContent = [...lesson.content];
      newContent[index] = {
        type: 'image',
        image: {
          path: data.filePath,
          caption: '', 
        },
      };
      setLesson({ ...lesson, content: newContent });
    } catch (error) {
      console.error('Error uploading the file:', error);
    }
  };
  
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleCaptionChange = (index, captionValue) => {
    const newContent = [...lesson.content];
    newContent[index].image.caption = captionValue;
    setLesson({ ...lesson, content: newContent });
  };
  
  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/lessons', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(lesson),
      });
      if (response.ok) {
        alert('Lesson successfully submitted!');
        window.location.reload(); 
      } else {
        throw new Error('Failed to submit lesson');
      }
    } catch (error) {
      console.error('Error submitting lesson:', error);
      alert('Error submitting lesson. Please try again later.');
    }
  };

  const renderSection = (section, index) => {
    switch (section.type) {
      case 'text':
        return (
          <div key={index}>
            <label>Текст:</label>
            <textarea
              style={{ maxHeight:'45%', maxWidth:'95%', minWidth:'95%'}}
              value={section.text}
              onChange={(e) => handleContentChange(index, 'text', e.target.value)}
            />
            <button type="button" onClick={() => removeContentItem(index)}>Удалить</button>
          </div>
        );
      case 'list':
        return (
          <div key={index}>
            <label>Список:</label>
            <ul>
              {section.list.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => handleListItemChange(index, itemIndex, e.target.value)}
                  />
                  <button type="button" onClick={() => removeListItem(index, itemIndex)}>Удалить элемент</button>
                </li>
              ))}
            </ul>
            <button type="button" onClick={() => addListItem(index)}>Добавить элемент</button>
            <button type="button" onClick={() => removeContentItem(index)}>Удалить</button>
          </div>
        );
      case 'code':
        return (
          <div key={index}>
            <label>Код:</label>
            <textarea
              style={{ maxHeight:'45%', maxWidth:'95%', minWidth:'95%' }}
              value={section.code}
              onChange={(e) => handleContentChange(index, 'code', e.target.value)}
            />
            <button type="button" onClick={() => removeContentItem(index)}>Удалить</button>
          </div>
        );
      case 'subtitle':
        return (
          <div key={index}>
            <label>Подзаголовок:</label>
            <input
              type="text"
              value={section.subtitle}
              onChange={(e) => handleContentChange(index, 'subtitle', e.target.value)}
            />
            <button type="button" onClick={() => removeContentItem(index)}>Удалить</button>
          </div>
        );
      case 'quizzes':
        return (
          <div key={index}>
            <label>Тест:</label>
            <>
              {section.quizzes.map((quiz, quizIndex) => (
                <div key={quizIndex} className="form-group">
                  <label htmlFor={`question-${quizIndex}`}>Вопрос {quizIndex + 1}:</label>
                  <input
                    type="text"
                    id={`question-${quizIndex}`}
                    name="question"
                    value={quiz.question}
                    onChange={(e) => handleQuizChange(index, quizIndex, e)}
                    required
                  />
                  {quiz.options.map((option, optionIndex) => (
                    <div key={optionIndex} className="option-group">
                      <label htmlFor={`option-${quizIndex}-${optionIndex}`}>Вариант {optionIndex + 1}:</label>
                      <input
                        type="text"
                        id={`option-${quizIndex}-${optionIndex}`}
                        name="options"
                        data-index={optionIndex}
                        value={option}
                        onChange={(e) => handleQuizChange(index, quizIndex, e)}
                        required
                      />
                      <button type="button" onClick={() => removeOption(index, quizIndex, optionIndex)}>
                        Удалить вариант
                      </button>
                    </div>
                  ))}
                  <button type="button" onClick={() => addOption(index, quizIndex)}>
                    Добавить вариант
                  </button>
                  <label htmlFor={`answer-${quizIndex}`}>Ответ:</label>
                  <input
                    type="text"
                    id={`answer-${quizIndex}`}
                    name="answer"
                    value={quiz.answer}
                    onChange={(e) => handleQuizChange(index, quizIndex, e)}
                    required
                  />
                  <button type="button" onClick={() => removeQuiz(index, quizIndex)}>
                    Удалить вопрос
                  </button>
                </div>
              ))}
              <button type="button" onClick={() => addQuiz(index)}>
                Добавить вопрос
              </button>
            </>
            <button type="button" onClick={() => removeContentItem(index)}>Удалить</button>
          </div>
        );
      case 'codeExecutor':
        return (  
          <div key={index}>
            <label>Выполнение кода:</label>
            <div className="form-group">
              <label>Описание задачи:</label>
              <textarea
                style={{ maxHeight:'45%', maxWidth:'95%', minWidth:'95%'}}
                value={section.codeExecutor.taskDescription}
                onChange={(e) => handleCodeExecutorChange(index, 'taskDescription', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Формат ввода:</label>
              <input
                style={{ maxHeight:'45%', maxWidth:'95%', minWidth:'95%'}}
                type="text"
                value={section.codeExecutor.taskInputFormat}
                onChange={(e) => handleCodeExecutorChange(index, 'taskInputFormat', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Формат вывода:</label>
              <input
                style={{ maxHeight:'45%', maxWidth:'95%', minWidth:'95%'}}
                type="text"
                value={section.codeExecutor.taskOutputFormat}
                onChange={(e) => handleCodeExecutorChange(index, 'taskOutputFormat', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Пример:</label>
              <div>
                <label>Ввод:</label>
                <textarea
                  style={{ maxHeight:'45%', maxWidth:'95%', minWidth:'95%'}}
                  value={section.codeExecutor.taskExample.input}
                  onChange={(e) => handleCodeExecutorChange(index, 'taskExample.input', e.target.value)}
                />
              </div>
              <div>
                <label>Вывод:</label>
                <textarea
                  style={{ maxHeight:'45%', maxWidth:'95%', minWidth:'95%'}}
                  value={section.codeExecutor.taskExample.output}
                  onChange={(e) => handleCodeExecutorChange(index, 'taskExample.output', e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <label>Тесты:</label>
              {section.codeExecutor.test.map((test, testIndex) => (
                <div key={testIndex} className="test-group">
                  <div>
                    <label>Ввод:</label>
                    <input
                      style={{ maxHeight:'45%', maxWidth:'95%', minWidth:'95%'}}
                      type="text"
                      value={test.input}
                      onChange={(e) => handleCodeExecutorChange(index, `test.input`, e.target.value, testIndex)}
                    />
                  </div>
                  <div>
                    <label>Ожидаемый вывод:</label>
                    <input
                      style={{ maxHeight:'45%', maxWidth:'95%', minWidth:'95%'}}
                      type="text"
                      value={test.expectedOutput}
                      onChange={(e) => handleCodeExecutorChange(index, `test.expectedOutput`, e.target.value, testIndex)}
                    />
                  </div>
                  <button type="button" onClick={() => removeCodeExecutorTest(index, testIndex)}>
                    Удалить тест
                  </button>
                </div>
              ))}
              <button type="button" onClick={() => addCodeExecutorTest(index)}>
                Добавить тест
              </button>
            </div>
            <button type="button" onClick={() => removeContentItem(index)}>Удалить</button>
          </div>
        );
      case 'image':
        return (
          <div key={index}>
            <label>Изображение:</label>
            <input type="file"  onChange={(e) => handleFileChange(e)} />
            <button type="button" onClick={() => handleImageUpload(index)}>Загрузить изображение</button>
            {section.image.path && (
              <div>
                <img src={`http://localhost:4000/${section.image.path}`} alt="uploaded" style={{ maxWidth: '100%' }} />
                <input
                  type="text"
                  placeholder="Подпись к изображению"
                  value={section.image.caption}
                  onChange={(e) => handleCaptionChange(index, e.target.value)}
                />
              </div>
            )}
            <button type="button" onClick={() => removeContentItem(index)}>Удалить</button>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className='add-lesson-container'>
      <div className='add-lesson-header'>
        <h1>Добавление урока</h1>
        <label>Заголовок урока:</label>
        <input
          type='text'
          value={lesson.title}
          onChange={handleTitleChange}
        />
      </div>
      <div className='add-lesson-content'>
        {lesson.content.map((section, index) => (
          <div className='add-lesson-section' key={index}>
            {renderSection(section, index)}
          </div>
        ))}
      </div>
      <div className='add-buttons'>
        <button type='button' onClick={() => addContentItem('subtitle')}>Добавить подзаголовок</button>
        <button type='button' onClick={() => addContentItem('text')}>Добавить текст</button>
        <button type='button' onClick={() => addContentItem('list')}>Добавить список</button>
        <button type='button' onClick={() => addContentItem('code')}>Добавить код</button>
        <button type='button' onClick={() => addContentItem('quizzes')}>Добавить тест</button>
        <button type='button' onClick={() => addContentItem('codeExecutor')}>Добавить выполнение кода</button>
        <button type='button' onClick={() => addContentItem('image')}>Добавить изображение</button>
      </div>
      <button className="submit-button" onClick={handleSubmit}>Подтвердить</button>
    </div>
  );
};

export default AddLesson;
