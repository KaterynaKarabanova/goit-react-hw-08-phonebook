import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from 'redux/authSlice';
import { getProfileThunk } from 'redux/operations';
import { delToken } from 'services/auth-servise';

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
    <div>
      {profile && <p>{profile.email}</p>}
      <button onClick={e => (token ? handleLogout(e) : handleLogin(e))}>
        {token ? 'Logout' : 'LogIn'}
      </button>
    </div>
  );
};
