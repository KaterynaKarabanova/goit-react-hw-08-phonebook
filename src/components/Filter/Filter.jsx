import { setStatusFilter } from 'redux/filterSlice';
import { StyledFilterInput } from './Filter.styled';
import { StyledContactlabel } from '../ContactsForm/ContactForm.styled';
import { useDispatch } from 'react-redux';
export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <StyledContactlabel>
      Find Contact by name
      <StyledFilterInput
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={e => {
          const value = e.target.value;
          dispatch(setStatusFilter({ value }));
        }}
      />
    </StyledContactlabel>
  );
};
