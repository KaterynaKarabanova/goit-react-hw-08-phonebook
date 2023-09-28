import { Routes, Route } from 'react-router-dom';

import { Contacts } from '../pages/Contacts';
import { LogIn } from 'pages/LogIn';
import { Registration } from 'pages/Registration';
import { Home } from 'pages/Home';
import { Layout } from 'pages/Layout';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Registration />} />
          <Route path="*" element={<Home />} />
          <Route path="login" element={<LogIn />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </div>
  );
};
