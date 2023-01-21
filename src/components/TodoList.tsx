import TodoItem from "./TodoItem";
import TodoListProps from "../interfaces/TodoListProps";


export default function TodoList(props: TodoListProps) {
    const { todos, setTodos, handleCompleteClick } = props;

    return (
        <div style={{ marginTop: 30 }}>
            {todos && todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    isCompleted={todo.completed}
                    todoName={todo.name}
                    todoId={todo.id}
                    handleCompleteClick={handleCompleteClick}
                    setTodos={setTodos}
                    todos={todos}
                />
            ))
            }
            <span style={{ color: 'white' }}>{todos.length} items left</span>
        </div>
    )
}