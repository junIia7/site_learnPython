import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import '../styles/Navigation.css';

const Navigation = ({ loggedInUsername, handleOut }) => {
  const [isOpenSidebar, setisOpenSidebar] = useState(false);
  const [isOpen, setIsOpen] = useState(
    new Array(8).fill(false) // создаём массив из `false`
  );

  const [userLessons, setUserLessons] = useState([]);
  const [error, setError] = useState(null);

  const toggleSidebar = () => {
    setisOpenSidebar(!isOpenSidebar);
  };

  const toggleDropdown = (index) => {
    setIsOpen(prevState => {
      const newState = prevState.map((item, idx) => idx === index ? !item : false); // инвертируем значение только для указанного индекса, все остальные ставим false
      return newState;
    });
  };
  
  useEffect(() => {
    const fetchUserLessons = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/lessons');
        setUserLessons(response.data);
      } catch (error) {
        setError('Error loading lessons');
      }
    };

    fetchUserLessons();
  }, []);

  const handleDelete = async (lessonId) => {
    if (window.confirm('Вы уверены, что хотите удалить этот урок?')) {
      try {
        await axios.delete(`http://localhost:4000/api/lessons/${lessonId}`);
        setUserLessons(userLessons.filter((lesson) => lesson._id !== lessonId));
      } catch (error) {
        setError('Ошибка при удалении урока');
        console.log(error)
      }
    }
  };

  return (
    <div>
      <div className="header">
        <button className="toggle-button" onClick={toggleSidebar}>
          ☰
        </button>
      </div>

      <div className="user-info">
        {loggedInUsername ? (
          <div>
            <p>Вход выполнен: {loggedInUsername}</p>
            <button className="logout-button" onClick={handleOut}>Выйти</button>
          </div>
        ) : <p>Вход не выполнен</p>}
      </div>

      <nav className={`main-nav ${isOpenSidebar ? 'open' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/register" className="nav-link" style={{marginLeft:'50px'}}>Регистрация</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/" className="nav-link">Введение</NavLink>
          </li>

          <li className="nav-item dropdown">
            <span className="nav-link dropdown-toggle" onClick={() => toggleDropdown(0)}>Основы языка Python</span>
            <ul className={`dropdown-menu ${isOpen[0] ? 'show' : ''}`}>
              <li className="dropdown-item">
                <NavLink to="/python-basics/variables-and-data-types" className="nav-link">Переменные и типы данных</NavLink>
              </li>
              <li className="dropdown-item">
                <NavLink to="/python-basics/input-output" className="nav-link">Ввод и вывод данных</NavLink>
              </li>
              <li className="dropdown-item">
                <NavLink to="/python-basics/operators-and-expressions" className="nav-link">Операторы и выражения</NavLink>
              </li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <span className="nav-link dropdown-toggle" onClick={() => toggleDropdown(1)}>Условные конструкции и циклы</span>
            <ul className={`dropdown-menu ${isOpen[1] ? 'show' : ''}`}>
              <li className="dropdown-item">
                <NavLink to="/conditional-and-cycles/conditional-expressions" className="nav-link">Условные выражения</NavLink>
              </li>
              <li className="dropdown-item">
                <NavLink to="/conditional-and-cycles/cycles" className="nav-link">Циклы</NavLink>
              </li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <span className="nav-link dropdown-toggle" onClick={() => toggleDropdown(2)}>Функции</span>
            <ul className={`dropdown-menu ${isOpen[2] ? 'show' : ''}`}>
              <li className="dropdown-item">
                <NavLink to="/functions" className="nav-link">Функции</NavLink>
              </li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <span className="nav-link dropdown-toggle" onClick={() => toggleDropdown(3)}>Основные типы данных</span>
            <ul className={`dropdown-menu ${isOpen[3] ? 'show' : ''}`}>
              <li className="dropdown-item">
                <NavLink to="/dataTypes/strings" className="nav-link">Строки</NavLink>
              </li>
              <li className="dropdown-item">
                <NavLink to="/dataTypes/lists-and-tuples" className="nav-link">Списки и кортежи</NavLink>
              </li>
              <li className="dropdown-item">
                <NavLink to="/dataTypes/dicts-and-sets" className="nav-link">Словари и множества</NavLink>
              </li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <span className="nav-link dropdown-toggle" onClick={() => toggleDropdown(4)}>Библиотеки</span>
            <ul className={`dropdown-menu ${isOpen[4] ? 'show' : ''}`}>
              <li className="dropdown-item">
                <NavLink to="/libraries" className="nav-link">Работа с библиотеками</NavLink>
              </li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <span className="nav-link dropdown-toggle" onClick={() => toggleDropdown(5)}>ООП</span>
            <ul className={`dropdown-menu ${isOpen[5] ? 'show' : ''}`}>
              <li className="dropdown-item">
                <NavLink to="/oop/classes-and-objects" className="nav-link">Классы и объекты</NavLink>
              </li>
              <li className="dropdown-item">
                <NavLink to="/oop/advanced-OOP" className="nav-link">Продвинутое ООП</NavLink>
              </li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <span className="nav-link dropdown-toggle" onClick={() => toggleDropdown(6)}>&#8226;&#8226;&#8226;</span>
            <ul className={`dropdown-menu ${isOpen[6] ? 'show' : ''}`}>
              <li className="dropdown-item">
                <NavLink to="/extra/literature" className="nav-link">Литература</NavLink>
              </li>
              <li className="dropdown-item">
                <NavLink to="/extra/links" className="nav-link">Полезные ссылки</NavLink>
              </li>
            </ul>
          </li>

            <li style={{padding:'0'}} className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" onClick={() => toggleDropdown(7)}>Пользовательские статьи</span>
              <ul className={`dropdown-menu ${isOpen[7] ? 'show' : ''}`}>
                {error ? (
                  <li className="nav-item">
                    <span className="nav-link">{error}</span>
                  </li>
                ) : (
                  userLessons.map((lesson) => (
                    <li key={lesson._id} className="nav-item user-lesson">
                      {loggedInUsername === 'root' && <button
                        className="delete-button"
                        onClick={() => handleDelete(lesson._id)}
                      >
                        &#x2716;
                      </button>
                      }
                      <NavLink to={`/lessons/${lesson._id}`} className="nav-link">
                        {lesson.title}
                      </NavLink>
                    </li>
                  ))
                )}
              </ul>
            </li>
          {loggedInUsername === 'root' &&  
            <li className="nav-item">
              <NavLink to="/add-lesson" className="nav-link">Добавить урок</NavLink>
            </li>
          }
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
