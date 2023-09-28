import { useNavigate } from 'react-router-dom';
import { registrateUser } from 'services/auth-servise';
import { HomeTitle } from '../Home/Home.styled';
import {
  StyledContactlabel,
  StyledContactInput,
} from '../../components/ContactsForm/ContactForm.styled';

import { UserMenuBtn } from '../../components/UserMenu/UserMenu.styled';
export const Registration = () => {
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    const userData = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };
    console.log(userData);
    registrateUser(userData).then(
      data => console.log(data),
      navigate('/login')
    );
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
        <UserMenuBtn type="submit">Registrate</UserMenuBtn>
      </form>
    </div>
  );
};
