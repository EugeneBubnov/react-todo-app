import { Todo } from './Todo';
import styles from './TodoList.module.css';
export function TodoList({ todos, deleteTodo, toggleTodo }) {
  return (
    <div className={styles.todoList}>
      {!todos.length && (
        <div
          style={{
            color: 'whitesmoke',
            fontSize: '2rem',
            fontFamily: 'inherit',
            fontWeight: 'bold',
          }}
        >
          Todo list is empty...
        </div>
      )}
      {todos.map((todo) => {
        return (
          <Todo
            todo={todo}
            key={todo.id}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        );
      })}
    </div>
  );
}
