import React from 'react';
import '../styles/Books.css';
import ScrollToTopButton from '../components/ScrollTopButton';

const Books = () => {
  const books = [
    {
      title: "Изучаем Python, программирование игр, создание ИИ и робототехника",
      author: "Эрик Мэтиз",
      link: "https://www.ozon.ru/product/izuchaem-python-programmirovanie-igr-vizualizatsiya-dannyh-veb-prilozheniya-3-e-izd-metiz-erik-211432437/",
      description: "Книга предназначена как для начинающих, так и для более опытных разработчиков, желающих изучить программирование на Python с нуля."
    },
    {
      title: "Python. К вершинам мастерства",
      author: "Лучано Рамальо",
      link: "https://www.litres.ru/book/luchano-ramalo/python-k-vershinam-masterstva-22805846/",
      description: "Книга охватывает глубокие аспекты языка Python, включая функциональное программирование, декораторы, асинхронное программирование и другие темы."
    },
    {
      title: "Python для сложных задач: наука о данных и машинное обучение",
      author: "Джейк Вандер Плас",
      link: "https://www.piter.com/collection/bestsellery-oreilly/product/python-dlya-slozhnyh-zadach-nauka-o-dannyh-2-e-mezhd-izd",
      description: "Книга ориентирована на программистов, которые хотят изучить Python для решения сложных задач в области науки о данных и машинного обучения."
    },
    {
      title: "Автоматизация рутинных задач с помощью Python",
      author: "Эл Свейгарт",
      link: "https://www.ozon.ru/product/avtomatizatsiya-rutinnyh-zadach-s-pomoshchyu-python-prakticheskoe-rukovodstvo-dlya-nachinayushchih-465298549/",
      description: "Книга охватывает различные аспекты автоматизации с использованием Python, включая работу с файлами, электронной почтой, веб-страницами и другими ресурсами."
    }
];

return (
    <div className="books-container">
      <h1>Список литературы по изучению Python</h1>
      <ul className="books-list">
        {books.map((book, index) => (
          <li key={index} className="book-item">
            <h2><a href={book.link} target="_blank" rel="noopener noreferrer">{book.title}</a></h2>
            <p><strong>Автор:</strong> {book.author}</p>
            <p>{book.description}</p>
          </li>
        ))}
      </ul>
      <ScrollToTopButton /> 
    </div>
  );
}

export default Books;