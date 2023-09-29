import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { NavNav } from './NavBar.styled';
import styled from 'styled-components';
export const NavBar = () => {
  const isAuth = useSelector(state => state.auth.token);

  return (
    <NavNav>
      <StyledLink key={'/'} to={'/'}>
        Home
      </StyledLink>
      {isAuth && (
        <StyledLink key={'/contacts'} to={'/contacts'}>
          Contacts
        </StyledLink>
      )}
      {!isAuth && (
        <>
          <StyledLink key={'/register'} to={'/register'}>
            Registration
          </StyledLink>
          <StyledLink key={'/login'} to={'/login'}>
            LogIn
          </StyledLink>
        </>
      )}
    </NavNav>
  );
};
const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px;
  font-size: 30px;
  font-weight: 500;
  border-radius: 4px;
  text-decoration: none;
  color: black;

  &.active {
    background-color: #c2e9fb;
    color: #040a42;
  }
  &:hover:not(.active) {
    background-color: #78b9d7af;
  }
  @media (max-width: 768px) {
    font-size: 18px;
    gap: 5px;
  }
`;
