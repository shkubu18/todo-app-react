import Todos from '../interfaces/Todos';

export default interface TodoListProps {
    todos: Todos[];
    handleCompleteClick: (todoId: string) => void;
    setTodos: (value: React.SetStateAction<Todos[]>) => void;
}