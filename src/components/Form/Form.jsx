import { FiSearch } from 'react-icons/fi';
import { toast } from 'react-toastify';
import style from './Form.module.css';

export const Form = () => {
  const handelSubmit = e => {
    e.preventDefault();
    const { value } = e.target.elements.search;
    if (!value) {
      toast.error('🦄 Enter some text');
      return;
    }
    console.log(value);
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
