import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { UserMenuDiv, UserMenuName, UserMenuBtn } from './UserMenu.styled';
import { logoutThunk } from 'redux/operations';
import { delToken } from 'services/auth-servise';
export const UserMenu = () => {
  const { token, profile } = useSelector(state => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = e => {
    e.preventDefault();
    navigate('/login');
  };
  const handleLogout = e => {
    e.preventDefault();
    dispatch(logoutThunk());
    delToken();
    navigate('/');
  };
  return (
    <UserMenuDiv>
      {profile && <UserMenuName>Welcome, {profile.email}</UserMenuName>}
      {token && (
        <UserMenuBtn onClick={e => (token ? handleLogout(e) : handleLogin(e))}>
          Logout
        </UserMenuBtn>
      )}
    </UserMenuDiv>
  );
};
