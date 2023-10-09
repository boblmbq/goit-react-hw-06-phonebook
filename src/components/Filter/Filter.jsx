import { useDispatch, useSelector } from 'react-redux';
import { filter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilter);

  return (
    <input
      value={filterValue}
      onChange={e => dispatch(filter(e.currentTarget.value))}
      type="text"
    />
  );
};
