import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  const navArr = [
    {
      src: '/',
      title: 'Home',
    },
    {
      src: '/contacts',
      title: 'Contacts',
    },
    {
      src: '/register',
      title: 'Registration',
    },
    {
      src: '/login',
      title: 'LogIn ',
    },
  ];
  return (
    <nav>
      {navArr.map(({ src, title }) => (
        <NavLink key={src} to={src}>
          {title}
        </NavLink>
      ))}
    </nav>
  );
};
