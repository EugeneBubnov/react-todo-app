import { useState } from 'react';
import styles from './TodoForm.module.css';

export function TodoForm({ addTodo }) {
  const [text, setText] = useState('');
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (text === null || text === '') {
      addTodo('Empty todo, why? :)');
      setText('');
    } else {
      addTodo(text);
      setText('');
    }
  };
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <label>
          <div className={styles.header}>Todo App</div>
          <input
            className={styles.searchField}
            placeholder="Enter new todo"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></input>
          <button className={styles.button} type="submit">
            Submit
          </button>
        </label>
      </form>
    </>
  );
}
