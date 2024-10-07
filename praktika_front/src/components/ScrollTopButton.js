import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Функция для прокрутки страницы вверх
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Функция для проверки позиции прокрутки
  const toggleVisibility = () => {
    if (window.scrollY > 300)
      setIsVisible(true);
    else 
      setIsVisible(false);

  };

  // Добавляем обработчик события прокрутки
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // Убираем обработчик события прокрутки при размонтировании компонента
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button onClick={scrollToTop} style={styles.button}>
          Наверх
        </button>
      )}
    </div>
  );
};

const styles = {
  button: {
    position: 'fixed',
    bottom: '3%',
    right: '2%',
    padding: '10px 15px',
    fontSize: '18px',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
};


export default ScrollToTopButton;
