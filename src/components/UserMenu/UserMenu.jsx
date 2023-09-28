import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from 'redux/authSlice';
import { getProfileThunk } from 'redux/operations';
import { delToken } from 'services/auth-servise';
import { UserMenuDiv, UserMenuName, UserMenuBtn } from './UserMenu.styled';
export const UserMenu = () => {
  const { profile, token } = useSelector(state => state.auth);
  console.log(token);
  console.log(profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = e => {
    e.preventDefault();
    navigate('/login');
  };
  const handleLogout = e => {
    e.preventDefault();
    console.log('logout');
    dispatch(logout());
    delToken();
    navigate('/');
  };
  useEffect(() => {
    token && dispatch(getProfileThunk());
  }, [dispatch, token]);
  return (
    <UserMenuDiv>
      {profile && <UserMenuName>Welcome, {profile.email}</UserMenuName>}
      <UserMenuBtn onClick={e => (token ? handleLogout(e) : handleLogin(e))}>
        {token ? 'Logout' : 'LogIn'}
      </UserMenuBtn>
    </UserMenuDiv>
  );
};
