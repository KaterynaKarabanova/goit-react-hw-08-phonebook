import { Routes, Route } from 'react-router-dom';
import { Contacts } from '../pages/Contacts';
import { LogIn } from 'pages/LogIn';
import { AppDiv } from './App.styled';
import { Registration } from 'pages/Registration/Registration';
import { Home } from 'pages/Home/Home';
import { Layout } from 'pages/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/operations';
import { setToken } from 'services/auth-servise';
export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(state => state.auth.isRefreshing);
  console.log(isRefreshing);
  const isAuth = useSelector(state => state.auth.token);
  useEffect(() => {
    dispatch(refreshUser());
    setToken(`Bearer ${isAuth}`);
  }, [dispatch, isAuth]);
  return isRefreshing ? (
    <b>Refreshing user</b>
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
