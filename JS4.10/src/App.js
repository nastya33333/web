import "./styles.css";
import React, { useState } from 'react';

export default function App() {
  // Объявляем новую переменную состояния "count"
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('банан');
  const [todos, setTodos] = useState([{ text: 'Изучить хуки' }]);

  return (
    <div>
      <p>Вы нажали {count} раз</p>
      <button onClick={() => setCount(count + 1)}>
        Нажми на меня
      </button>
      <p>Ваш возраст: {age} </p>
      <button onClick={() => setAge(age + 1)}>
        Нажми если больше
      </button>
      <p>Ваш любимый фрукт: {fruit}</p>
      <button onClick={() => setFruit('яблоко')}>
        Нажми если Яблоко
      </button>
      <p>{JSON.stringify(todos)}</p>
      <button onClick={() => setTodos([{ text: 'Я уже изучил хуки' }])}>
        Нажми если изучил
      </button>
    </div>
  )
}

