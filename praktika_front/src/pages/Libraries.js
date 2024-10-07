import React from 'react';
import ScrollToTopButton from '../components/ScrollTopButton';

const Libraries = () => {
  return (
    <div className="lesson-container">
      <div className="lesson-header">
        <h1>Работа с библиотеками</h1>
      </div>

      <div className="lesson-section">
        <h2>Определение</h2>
        <p>
          В Python существует множество библиотек, которые расширяют функциональность языка, 
          предоставляя готовые инструменты для решения различных задач. В этом уроке рассмотрим 
          три ключевые библиотеки: "math", "datetime" и "random". Для подключения библиотеки нужно 
          написать ключевое слово "import" после чего написать название библиотеки.
        </p>
      </div>

      <div className="lesson-section">
        <h2>Библиотека math</h2>
        <p>
          Биотека "math" предоставляет функции для математических операций, таких как вычисление 
          тригонометрических функций, логарифмов, округление чисел и других математических вычислений.
        </p>
        <h3>Примеры использования:</h3>
        <strong>Вычисление квадратного корня:</strong>
        <pre>
          <code>
              {`import math\n\n`}

              {`number = 16\n`}
              {`square_root = math.sqrt(number)\n`}
              {`print(square_root)  # Вывод: 4.0\n`}
          </code>
        </pre>
        <strong>Округление числа вверх:</strong>
        <pre>
          <code>
              {`import math\n\n`}

              {`number = 4.3\n`}
              {`rounded_up = math.ceil(number)\n`}
              {`print(rounded_up)  # Вывод: 5\n`}
          </code>
        </pre>
      </div>

      <div className="lesson-section">
        <h2>Библиотека datetime</h2>
        <p>
          Библиотека "datetime" предоставляет классы и методы для работы с датами и временем, 
          включая создание, форматирование и арифметические операции с датами.
        </p>
        <h3>Примеры использования:</h3>
        <strong>Получение текущей даты и времени:</strong>
        <pre>
          <code>
            {`import datetime\n\n`}

            {`now = datetime.datetime.now()\n`}
            {`print(now)  # Вывод: текущая дата и время\n`}
          </code>
        </pre>
        <strong>Форматирование даты в строку:</strong>
        <pre>
          <code>
            {`import datetime\n\n`}

            {`now = datetime.datetime.now()\n`}
            {`formatted_date = now.strftime("%Y-%m-%d %H:%M:%S")\n`}
            {`print(formatted_date)  # Вывод: строка с текущей датой и временем. Например: 2024-06-30 14:30:45\n`}
          </code>
        </pre>
      </div>

      <div className="lesson-section">
        <h2>Библиотека random</h2>
        <p>
          Библиотека "random" предоставляет функции для работы со случайными числами, включая 
          генерацию случайных чисел, выбор случайных элементов из последовательностей и перетасовку 
          данных.
        </p>
        <h3>Примеры использования:</h3>
        <strong>Генерация случайного числа в диапазоне:</strong>
        <pre>
          <code>
            {`import random\n\n`}

            {`random_number = random.randint(1, 10)\n`}
            {`print(random_number)  # Вывод: случайное число от 1 до 10\n`}
          </code>
        </pre>
        <strong>Перетасовка элементов списка:</strong>
        <pre>
          <code>
            {`import random\n\n`}

            {`my_list = [1, 2, 3, 4, 5]\n`}
            {`random.shuffle(my_list)\n`}
            {`print(my_list)  # Вывод: список с элементами в случайном порядке. Например: [5, 2, 4, 1, 3]\n`}
          </code>
        </pre>
      </div>

      <div className="lesson-section">
        <h2>Заключение</h2>
        <p>Это завершает наш урок по работе с библиотеками "math", "datetime" и "random" в Python. 
          Эти библиотеки значительно упрощают выполнение различных задач, связанных с математикой, 
          датами, временем и случайными числами.</p>
      </div>
      <ScrollToTopButton /> 
    </div>
  );
};

export default Libraries;
