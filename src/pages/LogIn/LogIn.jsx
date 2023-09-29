import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginThunk } from 'redux/operations';
import Notiflix from 'notiflix';
import {
  StyledContactlabel,
  StyledContactInput,
} from '../../components/ContactsForm/ContactForm.styled';
import { RegBtn } from '../../components/UserMenu/UserMenu.styled';
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

    dispatch(loginThunk(userData))
      .unwrap()
      .then(res =>
        Notiflix.Notify.success('All is good, welcome, ' + res.user.name, {
          width: '70%',
          fontSize: '30px',
        })
      )
      .catch(() =>
        Notiflix.Notify.failure('Data is not valid', {
          width: '70%',
          fontSize: '30px',
        })
      );
    e.target.reset();
  };
  return (
    <div
      style={{
        height: 'calc(100vh - 228px)',
        paddingBottom: '80px',
      }}
    >
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
        <RegBtn type="submit">LogIn</RegBtn>
      </form>
    </div>
  );
};
