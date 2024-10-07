import React from 'react';
import ScrollToTopButton from '../components/ScrollTopButton';

const AdvancedOOP = () => {
  return (
    <div className="lesson-container">
      <div className="lesson-header">
        <h1>Продвинутое ООП</h1>
      </div>

      <div className="lesson-section">
        <h2>Введение в Продвинутое ООП</h2>
        <p>Продвинутое объектно-ориентированное программирование (ООП) в Python включает в себя 
          наследование, инкапсуляцию и полиморфизм. Эти концепции позволяют создавать гибкие и 
          эффективные программные решения, улучшая структуру кода и его повторное использование.</p>
      </div>

      <div className="lesson-section">
        <h2>Наследование</h2>
        <p>Наследование в Python позволяет создавать новые классы на основе уже существующих. 
          Родительский класс передает свои атрибуты и методы дочернему классу, что способствует 
          повторному использованию кода и структуре программы.</p>
        <p>Пример наследования в Python:</p>
        <pre>
          <code>
            {`class Animal:\n`}
            {`    def speak(self):\n`}
            {`        raise NotImplementedError("Subclass must implement abstract method")\n\n`}

            {`class Dog(Animal):\n`}
            {`    def speak(self):\n`}
            {`        return "Woof!"\n\n`}

            {`class Cat(Animal):\n`}
            {`    def speak(self):\n`}
            {`        return "Meow!"\n\n`}

            {`dog = Dog()\n`}
            {`print(dog.speak())  # Вывод: Woof!\n`}

            {`cat = Cat()\n`}
            {`print(cat.speak())  # Вывод: Meow!\n`}
          </code>
        </pre>
      </div>

      <div className="lesson-section">
        <h2>Инкапсуляция</h2>
        <p>Инкапсуляция в Python позволяет скрывать детали реализации и защищать данные от прямого доступа извне класса. 
          Это достигается путем объединения данных и методов, работающих с этими данными, внутри класса и использования 
          спецификаторов доступа.</p>
        <p>Пример инкапсуляции в Python:</p>
        <pre>
          <code>
            {`class Account:\n`}
            {`    def __init__(self, owner, balance=0):\n`}
            {`        self.owner = owner\n`}
            {`        self.__balance = balance\n\n`}

            {`    def deposit(self, amount):\n`}
            {`        if amount > 0:\n`}
            {`            self.__balance += amount\n\n`}

            {`    def withdraw(self, amount):\n`}
            {`        if 0 < amount <= self.__balance:\n`}
            {`            self.__balance -= amount\n\n`}

            {`    def get_balance(self):\n`}
            {`        return self.__balance\n\n`}

            {`acc = Account("John")\n`}
            {`acc.deposit(1000)\n`}
            {`acc.withdraw(500)\n`}
            {`print("Balance: $" + str(acc.get_balance()))  # Вывод: Balance: $500\n`}
          </code>
        </pre>
      </div>

      <div className="lesson-section">
        <h2>Полиморфизм</h2>
        <p>Полиморфизм в Python позволяет использовать общий интерфейс для различных типов объектов. 
          Это достигается благодаря динамической типизации и возможности объектов различных классов 
          отвечать на вызовы одинаковых методов по-разному.</p>
        <p>Пример полиморфизма в Python:</p>
        <pre>
          <code>
            {`class Shape:\n`}
            {`    def area(self):\n`}
            {`        raise NotImplementedError("Subclass must implement abstract method")\n\n`}

            {`class Rectangle(Shape):\n`}
            {`    def __init__(self, width, height):\n`}
            {`        self.width = width\n`}
            {`        self.height = height\n\n`}

            {`    def area(self):\n`}
            {`        return self.width * self.height\n\n`}

            {`class Circle(Shape):\n`}
            {`    def __init__(self, radius):\n`}
            {`        self.radius = radius\n\n`}

            {`    def area(self):\n`}
            {`        return 3.14 * self.radius * self.radius\n\n`}

            {`def print_area(shape):\n`}
            {`    print(f"Area: {shape.area()}")\n\n`}

            {`rectangle = Rectangle(5, 10)\n`}
            {`circle = Circle(7)\n\n`}

            {`print_area(rectangle)  # Вывод: Area: 50\n`}
            {`print_area(circle)     # Вывод: Area: 153.86\n`}
          </code>
        </pre>
        <p>В этом примере используется абстрактный класс Shape, который определяет метод area, который должен быть реализован в подклассах. 
          Это позволяет создавать общий интерфейс для различных типов геометрических фигур, таких как прямоугольники и круги, при 
          этом каждая фигура имеет свою собственную реализацию метода area.</p>
      </div>

      <div className="lesson-section">
        <h2>Заключение</h2>
        <p>Это завершает урок по продвинутому объектно-ориентированному программированию в Python. 
          Использование наследования, инкапсуляции и полиморфизма позволяет разрабатывать мощные и 
          гибкие программные решения, улучшая их структуру и обеспечивая повышенную повторяемость и 
          поддерживаемость кода.</p>
      </div>
      <ScrollToTopButton /> 
    </div>
  );
};

export default AdvancedOOP;
