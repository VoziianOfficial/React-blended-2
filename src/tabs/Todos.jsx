import { useEffect, useState } from 'react';
import { Text, Form, TodoList, FilterTodos } from 'components';
import { nanoid } from 'nanoid';

export const Todos = () => {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) || [],
  );
  const [filter, setFilter] = useState('');
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = text => {
    const todo = {
      id: nanoid(),
      text,
    };
    setTodos([...todos, todo]);
  };
  const onChange = event => {
    setFilter(event.target.value);
  };
  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(filter.toLocaleLowerCase()),
  );
  return (
    <>
      <Form onSubmit={addTodo} />
      <FilterTodos onChange={onChange} />
      {filteredTodos.length > 0 ? (
        <TodoList array={filteredTodos} />
      ) : (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};
