import React from 'react';
import ScrollToTopButton from '../components/ScrollTopButton';

const Strings = () => {
  return (
    <div className="lesson-container">
      <header className="lesson-header">
        <h1>Строки</h1>
      </header>

      <section className="lesson-section">
        <h2>Определение</h2>
        <p>Строка в Python представляет собой последовательность символов, заключённых в кавычки. 
          Она может содержать буквы, цифры, символы и пробелы. Строки в Python имеют множество 
          операций и методов для работы с ними.</p>
      </section>

      <section className="lesson-section">
        <h2>Операции над строками</h2>
        <p>Строки в Python поддерживают различные операции, такие как конкатенация (слияние строк 
          с помощью оператора <code>+</code>), повторение (умножение строки на число), доступ к 
          отдельным символам по индексу. Например:</p>
        <pre>
          <code>
            {`str1 = "Hello"\n`}
            {`str2 = "World"\n`}
            {`concatenated = str1 + " " + str2\n`}
            {`print(concatenated)  # Вывод: Hello World\n\n`}

            {`repeated = str1 * 3\n`}
            {`print(repeated)  # Вывод: HelloHelloHello\n\n`}

            {`first_char = str1[0]\n`}
            {`print(first_char)  # Вывод: H\n`}
          </code>
        </pre>
        <p>Операции над строками позволяют объединять, изменять и извлекать информацию из текстовых 
          данных в Python. Кроме этих операций, строки в Python поддерживают срезы. Срезы позволяют получать 
          подстроку из строки по определённому диапазону индексов. Они используются для извлечения части 
          строки без изменения исходной строки. </p>
        <p>Синтаксис срезов имеет вид <code>string[start:stop:step]</code>, где:</p>
        <ul>
          <li><code>start</code> - начальный индекс включительно (по умолчанию 0).</li>
          <li><code>stop</code> - конечный индекс исключительно (по умолчанию до конца строки).</li>
          <li><code>step</code> - шаг среза (по умолчанию 1).</li>
        </ul>
        <p>Примеры использования срезов:</p>
        <pre>
          <code>
            {`str = "Hello, World!"\n\n`}

            {`# Извлечение части строки\n`}
            {`substring = str[7:12]\n`}
            {`print(substring)  # Вывод: World\n\n`}

            {`# Использование отрицательного шага для "переворота строки"\n`}
            {`# Отрицательные индексы ведут отчсет элементов с единицы, начиная с конца строки\n`}
            {`# Если шаг - отрицательный, по умолчанию start = конец строки, end = 0\n`}
            {`reversed_str = str[::-1] \n`}
            {`print(reversed_str)  # Вывод: !dlroW ,olleH\n`}
          </code>
        </pre>
      </section>

      <section className="lesson-section">
        <h2>Форматирование строк</h2>
        <p>Форматирование строк в Python может быть выполнено различными способами, включая 
          использование оператора <code>%</code>, метода <code>.format()</code> и f-строк 
          (форматированных строк). Эти методы позволяют встраивать значения переменных в строки и 
          контролировать их форматирование. Например:</p>
        <pre>
          <code>
            {`name = "Alice"\n`}
            {`age = 30\n`}
            {`formatted_str = "Name: %s, Age: %d" % (name, age)\n`}
            {`print(formatted_str)  # Вывод: Name: Alice, Age: 30\n\n`}

            {`formatted_str2 = "Name: {}, Age: {}".format(name, age)\n`}
            {`print(formatted_str2)  # Вывод: Name: Alice, Age: 30\n\n`}

            {`formatted_str3 = f"Name: {name}, Age: {age}"\n`}
            {`print(formatted_str3)  # Вывод: Name: Alice, Age: 30\n`}
          </code>
        </pre>
        <p>Форматирование строк в Python является мощным инструментом для создания читаемого и 
          удобного для использования вывода.</p>
      </section>

      <section className="lesson-section">
        <h2>Методы строк</h2>
        <p>Строки в Python имеют множество встроенных методов, которые облегчают их манипулирование. 
          Некоторые из часто используемых методов включают <code>upper()</code> для преобразования в 
          верхний регистр, <code>lower()</code> для преобразования в нижний регистр:</p>
        <pre>
          <code>
            {`sentence = "Hello, world!"\n`}
            {`print(sentence.upper())  # Вывод: HELLO, WORLD!\n`}
            {`print(sentence.lower())  # Вывод: hello, world!\n`}
          </code>
        </pre>
        <p>Кроме этих методов есть следующие популярные методы:</p>
        <ul>
          <li><code>strip()</code> - удаляет начальные и конечные пробельные символы строки.</li>
          <li><code>replace(old, new)</code> - заменяет все вхождения подстроки <code>old</code> на <code>new</code>.</li>
          <li><code>find(sub)</code> - находит первое вхождение подстроки <code>sub</code> в строке и возвращает его индекс.</li>
          <li><code>count(sub)</code> - возвращает количество вхождений подстроки <code>sub</code> в строке.</li>
          <li><code>startswith(prefix)</code> - проверяет, начинается ли строка с заданного префикса <code>prefix</code>.</li>
        </ul>
      </section>

      <section className="lesson-section">
        <h2>Заключение</h2>
        <p>Строки являются важной частью программирования на Python, используемой для работы с 
          текстовыми данными. В этом уроке мы рассмотрели операции над строками, форматирование 
          строк и основные методы работы со строками. Понимание этих концепций поможет вам 
          эффективно манипулировать и обрабатывать текстовые данные в ваших программах. 
          Практикуйтесь и экспериментируйте с различными методами, чтобы лучше усвоить материал!</p>
      </section>
      <ScrollToTopButton /> 
    </div>
  );
};

export default Strings;
