import { useState } from 'react';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.css';
import { TodoForm } from './components/Todos/TodoForm';
import { TodoList } from './components/Todos/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    };
    //adding new object into array of objects
    setTodos([...todos, newTodo]);
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo };
      })
    );
  };

  // Загрузка данных из Local Storage при загрузке страницы
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(savedTodos); // Устанавливаем сохранённые задачи
  }, []);

  // Сохранение данных в Local Storage при изменении списка
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <TodoForm addTodo={addTodoHandler} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
    </div>
  );
}

export default App;
