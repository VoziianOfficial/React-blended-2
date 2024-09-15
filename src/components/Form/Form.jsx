import { FiSearch } from 'react-icons/fi';
import { toast } from 'react-toastify';
import style from './Form.module.css';

export const Form = ({ onSubmit }) => {
  const handelSubmit = e => {
    e.preventDefault();
    const { value } = e.target.elements.search;
    if (!value) {
      toast.error('🦄 Enter some text');
      return;
    }
    onSubmit(value);
    e.target.reset();
  };
  return (
    <form onSubmit={handelSubmit} className={style.form}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        autoFocus
      />
    </form>
  );
};
