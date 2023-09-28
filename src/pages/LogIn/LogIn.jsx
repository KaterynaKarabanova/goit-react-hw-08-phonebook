import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginThunk } from 'redux/operations';
import {
  StyledContactlabel,
  StyledContactInput,
} from '../../components/ContactsForm/ContactForm.styled';
import { UserMenuBtn } from '../../components/UserMenu/UserMenu.styled';
import { HomeTitle } from '../Home/Home.styled';
export const LogIn = () => {
  const navigate = useNavigate();
  const isAuth = useSelector(state => state.auth.token);
  const dispatch = useDispatch();
  useEffect(() => {
    isAuth && navigate('/contacts');
  }, [isAuth, navigate]);
  const handleSubmit = e => {
    e.preventDefault();
    const userData = {
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };
    console.log(userData);
    dispatch(loginThunk(userData));
    e.target.reset();
  };
  return (
    <div style={{ height: 'calc(100vh - 228px)' }}>
      <HomeTitle>LogIn</HomeTitle>
      <form onSubmit={e => handleSubmit(e)}>
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
        <UserMenuBtn
          style={{
            minWidth: '800px',
          }}
          type="submit"
        >
          LogIn
        </UserMenuBtn>
      </form>
    </div>
  );
};
