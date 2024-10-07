import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Registration.css';

const Registration = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check for logged in user in local storage on component mount
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      localStorage.setItem('loggedInUser', username); // Save logged in user
      onLogin(loggedInUser);
    }
  }, [onLogin, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      const user = JSON.parse(localStorage.getItem(`user_${username}`));
      if (user) {
        if (user.password === password) {
          localStorage.setItem('loggedInUser', username); // Save logged in user
          onLogin(username); 
          navigate('/');
        } else {
          setError('Неверный пароль');
        }
      } else {
        const newUser = {
          username: username,
          password: password,
          completedLessons: []  // Initialize with an empty array
        };
        localStorage.setItem(`user_${username}`, JSON.stringify(newUser));
        localStorage.setItem('loggedInUser', username); // Save logged in user
        onLogin(username); 
        navigate('/');
      }
    } else {
      setError('Необходимо заполнить все поля');
    }
  };

  return (
    <div className="registration-container">
      <h2>Регистрация</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        
        <div className="form-group">
          <label htmlFor="username">Имя пользователя:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="submit-button" type="submit">Войти/Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default Registration;
