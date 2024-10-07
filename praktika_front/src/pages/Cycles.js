import React from 'react';
import ScrollToTopButton from '../components/ScrollTopButton';
import CodeExecutor from '../components/CodeExecutor';

const Cycles = () => {
  const content = 
  {
    test: [
      {
          "input": "10",
          "expectedOutput": "33"
      },
      {
          "input": "15",
          "expectedOutput": "60"
      },
      {
          "input": "1",
          "expectedOutput": "0"
      },
      {
          "input": "3",
          "expectedOutput": "3"
      },
      {
          "input": "5",
          "expectedOutput": "8"
      },
      {
          "input": "0",
          "expectedOutput": "0"
      },
      {
          "input": "30",
          "expectedOutput": "225"
      },
      {
          "input": "50",
          "expectedOutput": "593"
      },
      {
          "input": "100",
          "expectedOutput": "2418"
      },
      {
          "input": "200",
          "expectedOutput":"9368"
      }
  ],
    taskDescription: "Напишите программу для вычисления суммы всех чисел от 1 до N (включительно), которые делятся на 3 или 5.",
    taskInputFormat: "Целое число N, где N >= 1",
    taskOutputFormat: 'Программа считает сумму - k и выводит сообщение "Сумма: k"',
    taskExample: {
      input: "10",
      output: "Сумма: 33"
    }
  }

  return (
    <div className="lesson-container">
      <header className="lesson-header">
        <h1>Циклы</h1>
      </header>

      <section className="lesson-section">
        <h2>Цикл while</h2>
        <p>Цикл <code>while</code> выполняет блок кода до тех пор, пока условие истинно. Это полезно для 
        ситуаций, когда количество итераций заранее неизвестно. Например:</p>
        <pre>
          <code>
            {`count = 0\n`}
            {`while count < 5:\n`}
            {`    print(count)\n`}
            {`    count += 1\n`}
            {`# Вывод:\n`}
            {`# 0\n`}
            {`# 1\n`}
            {`# 2\n`}
            {`# 3\n`}
            {`# 4\n`}
          </code>
          </pre>
          <p>Важно следить за тем, чтобы условие в <code>while</code> в конечном итоге стало ложным, 
          иначе цикл станет бесконечным.</p>
        </section>

        <section className="lesson-section">
          <h2>Цикл for</h2>
          <p>Цикл <code>for</code> используется для повторения блока кода определённое количество раз. В Python это часто делается 
          с помощью функции <code>range</code>, которая генерирует последовательность чисел. Например:</p>
          <pre>
            <code>
              {`for i in range(5):\n`}
              {`    print(i)\n`}
              {`# Вывод:\n`}
              {`# 0\n`}
              {`# 1\n`}
              {`# 2\n`}
              {`# 3\n`}
              {`# 4\n`}
            </code>
          </pre>
          <p>Функция <code>range</code> принимает один аргумент (конечное значение, не включающееся в последовательность), два 
          аргумента (начальное и конечное значения) или три аргумента (начальное значение, конечное значение и шаг). Например:</p>
          <pre>
            <code>
              {`for i in range(1, 10, 2):\n`}
              {`    print(i)\n`}
              {`# Вывод:\n`}
              {`# 1\n`}
              {`# 3\n`}
              {`# 5\n`}
              {`# 7\n`}
              {`# 9\n`}
            </code>
          </pre>
        </section>

        <section className="lesson-section">
          <h2>Вложенные циклы</h2>
          <p>Вложенные циклы — это циклы внутри других циклов. Они полезны для работы с многомерными 
            структурами данных, такими как двумерные списки, которые будут рассмотрены позже. Например:</p>
          <pre>
            <code>
              {`for i in range(3):\n`}
              {`    for j in range(2):\n`}
              {`        print("i =", i, "j =", j)\n`}
              {`# Вывод:\n`}
              {`# i = 0 j = 0\n`}
              {`# i = 0 j = 1\n`}
              {`# i = 1 j = 0\n`}
              {`# i = 1 j = 1\n`}
              {`# i = 2 j = 0\n`}
              {`# i = 2 j = 1\n`}
            </code>
          </pre>
          <p>Вложенные циклы могут быть использованы для обработки матриц и других сложных структур данных.</p>
        </section>

        <section className="lesson-section">
          <h2>Операторы break, continue, pass</h2>
          <p>Оператор <code>break</code> завершает цикл досрочно, когда встречается внутри тела цикла. 
          Это полезно для выхода из цикла при определённых условиях. Например:</p>
          <pre>
            <code>
              {`for i in range(5):\n`}
              {`if i == 3:\n`}
              {`    break\n`}
              {`print(i)\n`}
              {`# Вывод:\n`}
              {`# 0\n`}
              {`# 1\n`}
              {`# 2\n`}
            </code>
          </pre>
          <p>Оператор <code>continue</code> пропускает оставшуюся часть текущей итерации и переходит к 
          следующей итерации цикла. Это полезно для пропуска определённых условий в цикле. Например:</p>
          <pre>
            <code>
              {`for i in range(5):\n`}
              {`if i == 3:\n`}
              {`    continue\n`}
              {`print(i)\n`}
              {`# Вывод:\n`}
              {`# 0\n`}
              {`# 1\n`}
              {`# 2\n`}
              {`# 4\n`}
            </code>
          </pre>
          <p>Оператор <code>pass</code> ничего не делает и используется как заглушка. Это полезно, когда 
          синтаксически нужен блок кода, но логически он не требуется. Например:</p>
          <pre>
            <code>
              {`for i in range(5):\n`}
              {`if i == 3:\n`}
              {`    pass\n`}
              {`print(i)\n`}
              {`# Вывод:\n`}
              {`# 0\n`}
              {`# 1\n`}
              {`# 2\n`}
              {`# 3\n`}
              {`# 4\n`}
            </code>
          </pre>
        </section>

        <section className="lesson-section">
          <h2>Заключение</h2>
          <p>Циклы являются основным инструментом в программировании на Python, позволяя автоматизировать 
            повторяющиеся задачи. В этом уроке мы рассмотрели цикл <code>while</code>, цикл <code>for</code>,
             вложенные циклы, а также операторы <code>break</code>, <code>continue</code> и <code>pass</code>. 
             Понимание этих концепций позволит вам создавать более сложные и эффективные программы. 
             Экспериментируйте с циклами, чтобы лучше понять их поведение и использование в различных ситуациях!</p>
        </section>
        <ScrollToTopButton /> 
        <div className="lesson-section">
          <CodeExecutor codeExecutor={content}/>
        </div>
    </div>
  );
};

export default Cycles;
