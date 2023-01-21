import Todos from "../interfaces/Todos";

export default interface TodoItemProps {
    isCompleted: boolean;
    todoName: string;
    todoId: string;
    handleCompleteClick: (todoId: string) => void;
    setTodos: (value: React.SetStateAction<Todos[]>) => void;
    todos: Todos[];
}