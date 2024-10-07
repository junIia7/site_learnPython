import React from 'react';
import ScrollToTopButton from '../components/ScrollTopButton';

const Functions = () => {
  return (
    <div className="lesson-container">
      <header className="lesson-header">
        <h1>Функции</h1>
      </header>

      <section className="lesson-section">
        <h2>Определение и вызов функций</h2>
        <p>Функции в Python позволяют группировать код в блоки, которые можно многократно использовать. Функция определяется с 
          помощью ключевого слова <code>def</code>, после которого следует имя функции и круглые скобки. Например:</p>
        <pre>
          <code>
            {`def greet():\n`}
            {`    print("Hello, world!")\n`}
          </code>
        </pre>
        <p>Чтобы вызвать функцию, используйте её имя, следуя за которым круглые скобки:</p>
        <pre>
          <code>
            {`greet()\n`}
            {`# Вывод: Hello, world!`}
          </code>
        </pre>
      </section>

      <section className="lesson-section">
        <h2>Аргументы и параметры</h2>
        <p>Функции могут принимать аргументы, которые передаются при вызове функции. Эти аргументы помогают функции работать 
          с различными данными. Например:</p>
        <pre>
          <code>
            {`def greet(name):\n`}
            {`    print(f"Hello, {name}!")\n\n`}

            {`greet("Alice")\n`}
            {`# Вывод: Hello, Alice!\n`}
          </code>
        </pre>
        <p>Также можно задавать значения по умолчанию для параметров. Если аргумент не передан, используется значение по 
          умолчанию:</p>
        <pre>
          <code>
            {`def greet(name="World"):\n`}
            {`    print(f"Hello, {name}!")\n\n`}

            {`greet()\n`}
            {`# Вывод: Hello, World!\n`}
            {`greet("Bob")\n`}
            {`# Вывод: Hello, Bob!\n`}
          </code>
        </pre>
      </section>

      <section className="lesson-section">
        <h2>Возврат значений</h2>
        <p>Функции могут возвращать значения с помощью оператора <code>return</code>. Это позволяет функции передавать результат 
        своей работы обратно вызывающему коду. Например:</p>
        <pre>
          <code>
            {`def add(a, b):\n`}
            {`    return a + b\n\n`}

            {`result = add(3, 5)\n`}
            {`print(result)\n`}
            {`# Вывод: 8\n`}
          </code>
        </pre>
        <p>После выполнения <code>return</code> функция прекращает свою работу, и любое последующее за ним выражение не 
        выполняется:</p>
        <pre>
          <code>
            {`def early_return():\n`}
            {`    return "Done"\n`}
            {`    print("This will not be printed")\n\n`}

            {`print(early_return())\n`}
            {`# Вывод: Done\n`}
          </code>
        </pre>
      </section>

      <section className="lesson-section">
        <h2>Область видимости переменных</h2>
        <p>Переменные, определённые внутри функции, имеют локальную область видимости. Они не доступны за пределами этой функции. 
          Например:</p>
        <pre>
          <code>
            {`def my_function():\n`}
            {`    local_var = "I'm local"\n`}
            {`    print(local_var)\n\n`}
                        
            {`global_var = "I'm global"\n`}
            {`my_function()\n`}
            {`print(global_var)\n\n`}
                        
            {`# Попытка доступа к локальной переменной вне функции вызовет ошибку\n`}
            {`# print(local_var)  # Ошибка!\n`}
          </code>
        </pre>
        <p>Переменные, определённые вне функций, имеют глобальную область видимости и доступны внутри функций. Однако, для 
          изменения глобальной переменной внутри функции нужно использовать ключевое слово <code>global</code>:</p>
        <pre>
          <code>
            {`global_var = "I'm global"\n`}

            {`def change_global():\n`}
            {`    global global_var\n`}
            {`    global_var = "I have been changed"\n\n`}

            {`change_global()\n`}
            {`print(global_var)\n`}
            {`# Вывод: I have been changed\n`}
          </code>
        </pre>
      </section>

      <section className="lesson-section">
        <h2>Заключение</h2>
        <p>Функции являются важной частью программирования на Python, предоставляя удобный способ организации и многократного 
          использования кода. В этом уроке мы рассмотрели основные аспекты работы с функциями: их определение и вызов, 
          использование аргументов и параметров, возврат значений и область видимости переменных. Понимание этих концепций 
          позволяет создавать более структурированные и эффективные программы. Не бойтесь экспериментировать с функциями и 
          использовать их для решения различных задач!</p>
      </section>
      <ScrollToTopButton /> 
    </div>
  );
};

export default Functions;
