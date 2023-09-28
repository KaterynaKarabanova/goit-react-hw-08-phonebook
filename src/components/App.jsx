import { Routes, Route } from 'react-router-dom';
import { setToken } from '../services/auth-servise';
import { Contacts } from '../pages/Contacts';
import { LogIn } from 'pages/LogIn';
import { Registration } from 'pages/Registration';
import { Home } from 'pages/Home';
import { Layout } from 'pages/Layout';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
export const App = () => {
  const isAuth = useSelector(state => state.auth.token);
  useEffect(() => {
    setToken(`Bearer ${isAuth}`);
  }, [isAuth]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Registration />} />
          <Route path="*" element={<Home />} />
          <Route path="login" element={<LogIn />} />
          <Route path="contacts" element={isAuth ? <Contacts /> : <LogIn />} />
        </Route>
      </Routes>
    </div>
  );
};
