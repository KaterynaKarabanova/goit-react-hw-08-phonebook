import { Routes, Route } from 'react-router-dom';
import { Contacts } from '../pages/Contacts/Contacts';
import { LogIn } from 'pages/LogIn/LogIn';
import { AppDiv, AppB } from './App.styled';
import { Registration } from 'pages/Registration/Registration';
import { Home } from 'pages/Home/Home';
import { Layout } from '../components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProfileThunk } from 'redux/operations';
import { setToken } from 'services/auth-servise';
export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(state => state.auth.isRefreshing);

  const isAuth = useSelector(state => state.auth.token);
  useEffect(() => {
    if (isAuth) {
      setToken(`Bearer ${isAuth}`);
      dispatch(getProfileThunk());
    }
  }, [dispatch, isAuth]);
  return isRefreshing ? (
    <AppDiv>
      <AppB>Refreshing user</AppB>
    </AppDiv>
  ) : (
    <AppDiv>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Registration />} />
          <Route path="*" element={<Home />} />
          <Route path="login" element={<LogIn />} />
          <Route path="contacts" element={isAuth ? <Contacts /> : <LogIn />} />
        </Route>
      </Routes>
    </AppDiv>
  );
};
