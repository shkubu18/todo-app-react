import Todos from "./Todos";

export default interface AddTaskProps {
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
    todos: Todos[];
    uuid(): string;
}