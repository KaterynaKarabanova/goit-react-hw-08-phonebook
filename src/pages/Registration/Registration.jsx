import { useNavigate } from 'react-router-dom';
import { registrateUser } from 'services/auth-servise';
import { HomeTitle } from '../Home/Home.styled';
import {
  StyledContactlabel,
  StyledContactInput,
} from '../../components/ContactsForm/ContactForm.styled';

import { RegBtn } from '../../components/UserMenu/UserMenu.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registrateUserThunk } from 'redux/operations';
export const Registration = () => {
  const navigate = useNavigate();
  const isAuth = useSelector(state => state.auth.token);
  useEffect(() => {
    isAuth && navigate('/contacts');
  }, [isAuth, navigate]);
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const userData = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };
    dispatch(registrateUserThunk(userData));
    // .then(data => {
    //   // if (data.token) {
    //   //   navigate('/contacts');
    //   // }
    // })
    // .catch(e => console.log(e));

    e.target.reset();
  };

  return (
    <div>
      <HomeTitle>Registration</HomeTitle>
      <form onSubmit={e => handleSubmit(e)}>
        <StyledContactlabel>
          Name
          <StyledContactInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </StyledContactlabel>
        <StyledContactlabel>
          Email
          <StyledContactInput
            type="email"
            name="email"
            title="Need to add email using this format 'email@email.com'"
            required
          />
        </StyledContactlabel>
        <StyledContactlabel style={{ marginBottom: '65px' }}>
          Password
          <StyledContactInput
            type="password"
            name="password"
            title="add you password"
            required
          />
        </StyledContactlabel>
        <RegBtn type="submit">Registrate</RegBtn>
      </form>
    </div>
  );
};