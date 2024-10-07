import React from 'react';
import '../styles/Books.css';
import ScrollToTopButton from '../components/ScrollTopButton';

const PythonLinks = () => {
  const resources = [
    {
      title: "Официальная документация Python",
      link: "https://docs.python.org/3/",
      description: "Официальная документация Python содержит все необходимые сведения о языке, стандартной библиотеке, инструментах разработки и многом другом."
    },
    {
      title: "Курс 'Программирование на Python' на Coursera",
      link: "https://www.coursera.org/specializations/python",
      description: "Специализация на Coursera предоставляет глубокое погружение в Python, включая основы программирования, структуры данных, алгоритмы и многие другие темы."
    },
    {
      title: "Канал 'Python для начинающих' на YouTube",
      link: "https://www.youtube.com/watch?v=IU4-19ofajg&list=PLQAt0m1f9OHvv2wxPGSCWjgy1qER_FvB6&ab_channel=egoroff_channel",
      description: "Плейлист на YouTube предоставляет бесплатные уроки по основам Python, включая переменные, условия, циклы, функции и многое другое."
    },
    {
      title: "Курс 'Практикум по программированию на Python' на Stepik",
      link: "https://stepik.org/course/67",
      description: "Курс на Stepik предлагает практическое обучение программированию на Python с задачами разного уровня сложности."
    }
  ];

  return (
    <div className="books-container ">
      <h1>Список ресурсов для изучения Python</h1>
      <ul className="books-list">
        {resources.map((resource, index) => (
          <li key={index} className="book-item">
            <h2><a href={resource.link} target="_blank" rel="noopener noreferrer">{resource.title}</a></h2>
            <p>{resource.description}</p>
          </li>
        ))}
      </ul>
      <ScrollToTopButton /> 
    </div>
  );
}

export default PythonLinks;