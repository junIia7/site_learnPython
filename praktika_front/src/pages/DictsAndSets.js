import React from 'react';
import ScrollToTopButton from '../components/ScrollTopButton';

const DictsAndSets = () => {
  return (
    <div className="lesson-container">
      <header className="lesson-header">
        <h1>Словари и множества</h1>
      </header>
      
      <section className="lesson-section">
        <h2>Определение</h2>
        <p>
          Словари и множества - это две важные структуры данных в Python, которые используются для хранения и управления коллекциями данных. 
          Словари позволяют хранить данные в виде пар "ключ-значение", тогда как множества представляют собой коллекции уникальных элементов. 
          В этом уроке мы рассмотрим, как определить словари и множества, выполнять различные операции с ними, а также познакомимся с их методами.
        </p>
      </section>
      
      <section className="lesson-section">
        <h2>Словари</h2>
        <p>Словари (dictionaries) в Python - это изменяемые коллекции, которые хранят данные в виде пар "ключ-значение".</p>
        <pre>
          <code>
            {`# Пример определения словаря\n`}
            {`my_dict = {\n`}
            {`'name': 'Alice',\n`}
            {`'age': 25,\n`}
            {`'city': 'New York'\n`}
            {`}\n`}
            {`print(my_dict)  # Вывод: {'name': 'Alice', 'age': 25, 'city': 'New York'}\n`}
          </code>
        </pre>
      </section>
      
      <section className="lesson-section">
        <h2>Множества</h2>
        <p>Множества (sets) в Python - это неупорядоченные коллекции уникальных элементов.</p>
        <pre>
          <code>
            {`# Пример определения множества\n`}
            {`my_set = {1, 2, 3, 4, 5}\n`}
            {`print(my_set)  # Вывод: {1, 2, 3, 4, 5}\n`}
          </code>
        </pre>
      </section>
      
      <section className="lesson-section">
        <h2>Операции над словарями и множествами</h2>
        <h3>Словари</h3>
        <p>Словари позволяют выполнять различные операции, такие как добавление, удаление и получение значений по ключу.</p>
        <pre>
          <code>
            {`# Добавление и получение значений в словаре\n`}
            {`my_dict['email'] = 'alice@example.com'\n`}
            {`print(my_dict['name'])  # Вывод: Alice\n`}
            {`print(my_dict)  # Вывод: {'name': 'Alice', 'age': 25, 'city': 'New York', 'email': 'alice@example.com\n`}
          </code>
        </pre>
        <h3>Множества</h3>
        <p>Множества поддерживают операции объединения, пересечения и разности.</p>
        <pre>
          <code>
            {`# Объединение и пересечение множеств\n`}
            {`set1 = {1, 2, 3}\n`}
            {`set2 = {3, 4, 5}\n`}
            {`union_set = set1 | set2\n`}
            {`intersection_set = set1 & set2\n`}
            {`print(union_set)  # Вывод: {1, 2, 3, 4, 5}\n`}
            {`print(intersection_set)  # Вывод: {3}\n`}
          </code>
        </pre>
      </section>
      
      <section className="lesson-section">
        <h2>Методы словарей и множеств</h2>
        <h3>Методы словарей</h3>
        <ul>
          <li><code>my_dict.keys()</code> - возвращает все ключи словаря.</li>
          <li><code>my_dict.values()</code> - возвращает все значения словаря.</li>
          <li><code>my_dict.items()</code> - возвращает все пары (ключ, значение) словаря.</li>
          <li><code>my_dict.get(key)</code> - возвращает значение по ключу.</li>
          <li><code>my_dict.pop(key)</code> - удаляет элемент по ключу и возвращает его значение.</li>
        </ul>
        <pre>
          <code>
            {`# Примеры методов словарей\n`}
            {`print(my_dict.keys())  # Вывод: dict_keys(['name', 'age', 'city', 'email'])\n`}
            {`print(my_dict.values())  # Вывод: dict_values(['Alice', 25, 'New York', 'alice@example.com'])\n`}
            {`print(my_dict.items())  # Вывод: dict_items([('name', 'Alice'), ('age', 25), ('city', 'New York'), ('email', 'alice@example.com')])\n`}
            {`print(my_dict.get('age'))  # Вывод: 25\n`}
            {`print(my_dict.pop('city'))  # Вывод: 'New York'\n`}
            {`print(my_dict)  # Вывод: {'name': 'Alice', 'age': 25, 'email': 'alice@example.com\n`}
          </code>
        </pre>
        <h3>Методы множеств</h3>
        <ul>
          <li><code>my_set.add(element)</code> - добавляет элемент в множество.</li>
          <li><code>my_set.remove(element)</code> - удаляет элемент из множества.</li>
          <li><code>my_set.union(other_set)</code> - объединяет два множества.</li>
          <li><code>my_set.intersection(other_set)</code> - пересекает два множества.</li>
          <li><code>my_set.difference(other_set)</code> - находит разность двух множеств.</li>
        </ul>
        <pre>
          <code>
            {`# Примеры методов множеств\n`}
            {`my_set.add(6)\n`}
            {`print(my_set)  # Вывод: {1, 2, 3, 4, 5, 6}\n`}
            {`my_set.remove(3)\n`}
            {`print(my_set)  # Вывод: {1, 2, 4, 5, 6}\n`}
            {`print(my_set.union({7, 8}))  # Вывод: {1, 2, 4, 5, 6, 7, 8}\n`}
            {`print(my_set.intersection({1, 4, 9}))  # Вывод: {1, 4}\n`}
            {`print(my_set.difference({1, 2}))  # Вывод: {4, 5, 6}\n`}
          </code>
        </pre>
      </section>

      <ScrollToTopButton />
      
      <footer className="lesson-footer">
        <p>Конец урока по словарям и множествам в Python. Продолжайте практиковаться и изучать новые возможности языка!</p>
      </footer>
    </div>
  );
};

export default DictsAndSets;
