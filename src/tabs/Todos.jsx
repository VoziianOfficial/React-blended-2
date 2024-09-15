import { useState } from 'react';
import { Text, Form, TodoList } from 'components';
import { nanoid } from 'nanoid';

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = text => {
    const todo = {
      id: nanoid(),
      text,
    };
    setTodos([...todos, todo]);
  };
  console.log(todos);
  return (
    <>
      <Form onSubmit={addTodo} />
      <TodoList array={todos} />
      <Text textAlign="center">There are no any todos ...</Text>
    </>
  );
};
