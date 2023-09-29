import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { UserMenuDiv, UserMenuName, UserMenuBtn } from './UserMenu.styled';
import { logoutThunk } from 'redux/operations';
export const UserMenu = () => {
  const { profile, isLoggedIn } = useSelector(state => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutThunk());
    navigate('/');
  };
  return (
    <UserMenuDiv>
      {profile && <UserMenuName>Welcome, {profile.email}</UserMenuName>}
      {isLoggedIn && (
        <UserMenuBtn onClick={e => handleLogout(e)}>Logout</UserMenuBtn>
      )}
    </UserMenuDiv>
  );
};
