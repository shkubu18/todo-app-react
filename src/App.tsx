import { useState } from 'react';
import uuid from 'react-uuid';
import styled, { createGlobalStyle } from 'styled-components';
import Todos from './interfaces/Todos';
import AddTask from './components/AddTask';
import TodoList from './components/TodoList';


export default function App() {
  const [name, setName] = useState<string>('');
  const [todos, setTodos] = useState<Todos[]>([]);
  const [Completed, setCompleted] = useState<boolean>(false);


  const handleCompleteClick = (todoId: string) => {
    todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
        setCompleted(!Completed);
      }
    })
  }

  return (
    <Container>
      <GlobalStyles />
      <Title>Todo List</Title>
      <AddTask
        name={name}
        setTodos={setTodos}
        setName={setName}
        todos={todos}
        uuid={uuid}
      />
      <TodoList
        todos={todos}
        handleCompleteClick={handleCompleteClick}
        setTodos={setTodos}
      />
    </Container>
  )
}

const Title = styled.h1`
  margin: auto; 
  margin-bottom: 30px;
  letter-spacing: 3px;
  color: white;
  font-weight: 300;
`;

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Dosis', sans-serif;
    background: linear-gradient(45deg, #90d5fdb7, #9092fdb7, #18dcffb7);
  }
`;

const Container = styled.div`
  min-width: 450px;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(#6596f1b5, #02b5e25e);
  border-top: 8px ridge #6596f1b5;
  padding: 30px;
  border-radius: 10px;
  margin-block: 30px;
  @media (max-width: 510px) {
    min-width: 320px;
  }
  @media (max-width: 380px) {
    min-width: 260px;
  }
`;

