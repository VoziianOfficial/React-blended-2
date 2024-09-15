import { TodoListItem, Grid, GridItem } from 'components';
export const TodoList = ({ array }) => {
  return (
    <Grid>
      {array.map((todo, index) => (
        <GridItem key={todo.id}>
          <TodoListItem count={index + 1} value={todo.text} />
        </GridItem>
      ))}
    </Grid>
  );
};
