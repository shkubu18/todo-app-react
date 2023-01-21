import styled from "styled-components"
import { useState } from 'react';
import TodoItemProps from "../interfaces/TodoItemProps";
import { IoIosRadioButtonOff as EmptyCircle } from 'react-icons/io';
import { IoCheckmarkCircleOutline as CompletedCircle } from 'react-icons/io5';
import { FaTrash } from 'react-icons/fa';


export default function TodoItem(props: TodoItemProps) {
    const [currentTime, setCurrentTime] = useState(new Date);
    const { isCompleted, todoName, todoId, setTodos, handleCompleteClick, todos } = props;

    const time = currentTime.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
    });

    return (
        <TodoItemContainer>
            <TodoTask>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <span
                        style={{ display: 'flex', alignItems: 'center' }}
                        onClick={() => handleCompleteClick(todoId)}>
                        {!isCompleted
                            ? <EmptyCircle style={{ marginRight: 10, cursor: 'pointer' }} />
                            : <CompletedCircle style={{ marginRight: 10, cursor: 'pointer' }} />}
                    </span>
                    {!isCompleted
                        ? <UnCompletedTask>{todoName}</UnCompletedTask>
                        : <CompletedTask>{todoName}</CompletedTask>}
                </div>
                <span style={{ marginBlock: 5, fontSize: 13 }}>{time}</span>
            </TodoTask>
            <div>
                <span onClick={() => {
                    setTodos(
                        todos.filter(todo => todo.id !== todoId)
                    )
                }}>{<FaTrash style={{ cursor: 'pointer', marginLeft: 10 }} />}</span>
            </div>
        </TodoItemContainer>
    )
}

const UnCompletedTask = styled.span`
    @media (max-width: 510px) {
        overflow-x: scroll;
        max-width: 190px;
    }
`;

const CompletedTask = styled.span`
    text-decoration: line-through; 
    text-decoration-color: white; 
    color: #09fc3e;
`;

const TodoTask = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 300;
    font-size: 18px;
`;

const TodoItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    padding-inline: 10px;
    border-radius: 5px;
    margin-bottom: 20px;
    border-bottom: 3px solid white;
    border-left: 3px solid white;
    color: #ffffff;
    height: 30px;
    max-width:100%;
`;


