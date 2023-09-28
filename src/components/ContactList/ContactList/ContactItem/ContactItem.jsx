import PropTypes from 'prop-types';
import { StyledContactItem, StyledContactText } from './ContactItem.styled';
import { useDispatch } from 'react-redux';

import { deleteContacts } from '../../../../redux/operations';
import { UserMenuBtn } from '../../../UserMenu/UserMenu.styled';
export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <StyledContactItem>
      <StyledContactText> {name}:</StyledContactText>
      <StyledContactText>{` ` + number}</StyledContactText>

      <UserMenuBtn type="button" onClick={() => dispatch(deleteContacts(id))}>
        Delete
      </UserMenuBtn>
    </StyledContactItem>
  );
};
ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
