import styled from 'styled-components';
import AddTaskProps from '../interfaces/AddTaskProps';


export default function AddTask(props: AddTaskProps) {
    const { name, setName, setTodos, todos, uuid } = props;

    const handleClick = () => {
        setName('');
        if (name.length > 0) {
            setTodos([...todos, { id: uuid(), name: name, completed: false }]);
        }
    }

    return (
        <AddTaskContainer>
            <Input
                type="text"
                placeholder='Add Todo...'
                maxLength={53}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <Button onClick={handleClick}>Add Todo</Button>
        </AddTaskContainer>
    )
}

const AddTaskContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const Input = styled.input`
    height: 22px;
    width: 70%;
    color: black;
    padding: 7px;
    font-size: 15px;
    font-family: 'Dosis', sans-serif;
    border: none;
    border-left: 6px ridge #0086d3;
    box-shadow: 1px 1px 10px lightgray;
    border-radius: 5px;
    &:focus {
        outline: none;
    }
`;

const Button = styled.button`
    background: linear-gradient(#0086d3, #00a2ff);
    color: white;
    border-radius: 5px;
    font-weight: 500;
    border: none;
    font-family: 'Dosis', sans-serif;
    cursor: pointer;
`;
