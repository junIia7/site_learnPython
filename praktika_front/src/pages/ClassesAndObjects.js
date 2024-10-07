import React from 'react';
import ScrollToTopButton from '../components/ScrollTopButton';

const ClassesAndObjects = () => {
  return (
    <div className="lesson-container">
      <div className="lesson-header">
        <h1>Классы и объекты</h1>
      </div>

      <div className="lesson-section">
        <h2>Определение классов</h2>
        <p>
          Классы представляют собой шаблоны или чертежи для создания объектов. Они определяют состояние
           (атрибуты) и поведение (методы) объектов, которые будут созданы на основе этих классов.
        </p>
        <p>
          В Python классы создаются с использованием ключевого слова "class", за которым следует имя 
          класса и двоеточие. Атрибуты класса определяются в методе "__init__", который является 
          конструктором класса.
        </p>
        <p>Пример определения класса:</p>
        <pre>
          <code>
            {`class Person:\n`}
            {`    def __init__(self, name, age):\n`}
            {`        self.name = name\n`}
            {`        self.age = age\n`}
          </code>
        </pre>
        <p>В этом примере класс "Person" имеет атрибуты "name" и "age", которые инициализируются 
          при создании объекта этого класса.</p>
      </div>

      <div className="lesson-section">
        <h2>Создание объектов</h2>
        <p>Объекты представляют собой экземпляры классов. Создание объекта происходит путем вызова 
          конструктора класса с использованием оператора "new". В Python создание объекта автоматически 
          вызывает метод "__init__", который инициализирует атрибуты объекта.</p>
        <p>Пример создания объекта класса "Person":</p>
        <pre>
          <code>
            {`# Создание объекта\n`}
            {`person1 = Person("Alice", 30)\n`}
          </code>
        </pre>
        <p>В этом примере создается объект "person1" типа "Person" с атрибутами "name = 'Alice'" и 
        "age = 30".</p>
      </div>

      <div className="lesson-section">
        <h2>Методы классов</h2>
        <p>Методы классов - это функции, определенные внутри класса, которые выполняют операции с 
          атрибутами объектов класса. Они предоставляют способ для объектов взаимодействовать с 
          внутренним состоянием класса и другими объектами.</p>
        <p>В Python первый параметр метода обычно называется "self" и ссылается на экземпляр объекта, 
          к которому метод применяется. Это позволяет методам доступать к атрибутам и другим методам 
          того же объекта.</p>
        <p>Пример метода класса "Person", который выводит информацию о человеке:</p>
        <pre>
          <code>
            {`class Person:\n`}
            {`    def __init__(self, name, age):\n`}
            {`        self.name = name\n`}
            {`        self.age = age\n\n`}

            {`    def info(self):\n`}
            {`        print(f"Name: {self.name}, Age: {self.age}")\n\n`}

            {`# Создание объекта\n`}
            {`person1 = Person("Alice", 30)\n`}
            {`person1.info()  # Вывод: Name: Alice, Age: 30\n`}
          </code>
        </pre>
      </div>

      <div className="lesson-section">
        <h2>Пример более сложного класса</h2>
        <p>
            Давайте рассмотрим более сложный пример класса "Car", который демонстрирует использование атрибутов, методов и специальных методов.
        </p>
        <pre>
          <code>
            {`class Car:\n`}
            {`    def __init__(self, make, model, year):\n`}
            {`        self.make = make\n`}
            {`        self.model = model\n`}
            {`        self.year = year\n`}
            {`        self.odometer_reading = 0\n\n`}
                
            {`    def get_descriptive_name(self):\n`}
            {`        long_name = f"{self.year} {self.make} {self.model}"\n`}
            {`        return long_name.title()\n\n`}
                
            {`    def read_odometer(self):\n`}
            {`        print(f"This car has {self.odometer_reading} miles on it.")\n\n`}
                
            {`    def update_odometer(self, mileage):\n`}
            {`        if mileage >= self.odometer_reading:\n`}
            {`            self.odometer_reading = mileageumber\n`}
            {`        else:\n`}
            {`            print("You can't roll back an odometer!")\n\n`}
                
            {`    def increment_odometer(self, miles):\n`}
            {`        self.odometer_reading += miles\n\n`}

            {`# Создание объекта\n`}
            {`my_car = Car('audi', 'a4', 2023)\n`}
            {`print(my_car.get_descriptive_name())  # Вывод: 2023 Audi A4\n`}
            {`my_car.update_odometer(1500)\n`}
            {`my_car.read_odometer()  # Вывод: This car has 1500 miles on it.\n`}
            {`my_car.increment_odometer(100)\n`}
            {`my_car.read_odometer()  # Вывод: This car has 1600 miles on it.\n`}
          </code>
        </pre>
        <p>В этом примере класс "Car" имеет атрибуты "make", "model", "year" и "odometer_reading". 
          Он также содержит методы для получения описательного имени автомобиля, чтения и обновления 
          показаний одометра, а также увеличения показаний одометра.</p>
      </div>

      <div className="lesson-section">
        <h2>Заключение</h2>
        <p>Это завершает наш урок по классам и объектам в Python. Использование классов позволяет 
          создавать структурированный и эффективный код, используя принципы ООП для управления 
          состоянием и поведением объектов.</p>
      </div>
      <ScrollToTopButton /> 
    </div>
  );
};

export default ClassesAndObjects;
