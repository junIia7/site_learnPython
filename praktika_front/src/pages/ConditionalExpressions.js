import React from 'react';
import ScrollToTopButton from '../components/ScrollTopButton';
import CodeExecutor from '../components/CodeExecutor';

const ConditionalExpressions = () => {

  const content = {
    test: [
      {
        input: "abcdefg",
        expectedOutput: "abcdefg\nabcdefg"
      }
    ],
    taskDescription: 'Напишите программу, которая будет принимать число и определять возраст человека по следующим правилам:\
 Если число меньше или равно 0, а также если число больше или равно 100 - вывести "Некорректные данные."\
 Если число от 1 до 12 - вывести "Это детский возраст."\
 Если число от 13 до 18 лет - вывести "Это подростковый возраст."\
 Если число от 19 до 59 - вывести "Это возраст взрослого."\
 Если число больше или равно 60 - вывести "Это пожилой возраст."',
    taskInputFormat: "Программа принимает целое число.",
    taskOutputFormat: "Программа выводит результаты в соотвествии с правилами",
    taskExample: {
      input: "6",
      output: "Это детский возраст."
    }
  }

  return (
    <div className="lesson-container">
      <div className="lesson-header">
        <h1>Условные выражения</h1>
      </div>

      <div className="lesson-section">
        <h2>Условный оператор if, elif, else</h2>
        <p>
          Условные операторы в Python используются для выполнения различных блоков кода в зависимости от 
          выполнения определенного условия. Основные условные операторы включают <code>if</code>, { }
          <code>elif</code> и <code>else</code>.
        </p>
        <p>
          Оператор <code>if</code> проверяет условие, и если оно истинно, выполняется блок кода 
          внутри <code>if</code>. Если условие ложно, можно использовать оператор <code>elif</code> { }
          (сокращение от "else if") для проверки другого условия. Если и это условие ложно, оператор { }
          <code>else</code> позволяет выполнить код, если ни одно из предыдущих условий не выполнено.
        </p>
        <pre>
          <code>
            {`# Пример использования условного оператора if, elif, else\n`}
            {`x = 10\n`}
            {`if x > 0:\n`}
            {`    print("x положительное число")\n`}
            {`elif x == 0:\n`}
            {`    print("x равно нулю")\n`}
            {`else:\n`}
            {`    print("x отрицательное число")\n`}
          </code>
        </pre>
        <p>
          В этом примере, если <code>x</code> больше нуля, будет выведено "x положительное число". 
          Если <code>x</code> равно нулю, будет выведено "x равно нулю". Если ни одно из условий не 
          выполнено, будет выведено "x отрицательное число".
        </p>
      </div>

      <div className="lesson-section">
        <h2>Вложенные условные операторы</h2>
        <p>
          Вложенные условные операторы позволяют проверять условия внутри других условных операторов. 
          Это полезно, когда нужно проверить несколько условий последовательно.
        </p>
        <pre>
          <code>
            {`# Пример использования вложенных условных операторов\n`}
            {`x = 15\n`}
            {`if x > 0:\n`}
            {`    print("x положительное число")\n`}
            {`    if x % 2 == 0:\n`}
            {`        print("x четное число")\n`}
            {`    else:\n`}
            {`        print("x нечетное число")\n`}
            {`else:\n`}
            {`    print("x отрицательное число")\n`}
          </code>
        </pre>
        <p>
          В этом примере, если <code>x</code> больше нуля, сначала будет выведено "x положительное число". 
          Затем вложенный условный оператор проверит, является ли <code>x</code> четным числом. 
          Если <code>x</code> четное, будет выведено "x четное число". Если <code>x</code> нечетное, 
          будет выведено "x нечетное число". Если <code>x</code> меньше или равно нулю, будет выведено 
          "x отрицательное число".
        </p>
      </div>

      <div className="lesson-section">
        <h2>Заключение</h2>
        <p>
          Условные выражения в Python позволяют контролировать поток выполнения программы в зависимости от 
          выполнения определенных условий. Понимание и правильное использование условных операторов { }
            <code>if</code>, <code>elif</code>, <code>else</code>, а также вложенных условных операторов, 
            позволит создавать более гибкие и адаптивные программы.
        </p>
      </div>
      <ScrollToTopButton /> 
      <div className="lesson-section">
        <CodeExecutor codeExecutor={content}/>
      </div>
    </div>
  );
};

export default ConditionalExpressions;
