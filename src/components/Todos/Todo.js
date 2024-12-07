import { FaCheck } from 'react-icons/fa';
import styles from './Todo.module.css';
import { RiDeleteBin2Line, RiTodoFill } from 'react-icons/ri';
export function Todo({ todo, deleteTodo, toggleTodo }) {
  return (
    <div
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ''
      }`}
    >
      <div>
        <RiTodoFill className={styles.todoIcon} />
      </div>
      <div>{todo.text}</div>
      <div>
        <RiDeleteBin2Line
          className={styles.deleteIcon}
          onClick={() => {
            deleteTodo(todo.id);
          }}
        />
        <FaCheck
          className={styles.checkIcon}
          onClick={() => {
            toggleTodo(todo.id);
          }}
        />
      </div>
    </div>
  );
}
