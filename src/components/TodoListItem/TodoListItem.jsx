import { RiDeleteBinLine } from 'react-icons/ri';
import style from './TodoListItem.module.css';
import { Text } from 'components';
export const TodoListItem = ({ value, count }) => {
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO #{count}
      </Text>
      <Text>{value}</Text>
      <button className={style.deleteButton} type="button">
        <RiDeleteBinLine size={24} />
      </button>
    </div>
  );
};
