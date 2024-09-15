import { useState } from 'react';
import { Text, Form } from 'components';

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <Form />
      <Text textAlign="center">There are no any todos ...</Text>
    </>
  );
};
