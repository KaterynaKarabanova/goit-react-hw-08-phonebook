import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
export const NavBar = () => {
  const isAuth = useSelector(state => state.auth.token);

  return (
    <nav>
      <NavLink key={'/'} to={'/'}>
        Home
      </NavLink>
      {isAuth && (
        <NavLink key={'/contacts'} to={'/contacts'}>
          Contacts
        </NavLink>
      )}

      <NavLink key={'/register'} to={'/register'}>
        Registration
      </NavLink>
      <NavLink key={'/login'} to={'/login'}>
        LogIn
      </NavLink>
    </nav>
  );
};
