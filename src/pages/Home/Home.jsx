import {
  UserMenuBtn,
  UserMenuDiv,
} from '../../components/UserMenu/UserMenu.styled';
import { useNavigate } from 'react-router-dom';
import { HomeText, HomeDiv, HomeImg, HomeTitle } from './Home.styled';
import { useSelector } from 'react-redux';
export const Home = () => {
  const navigate = useNavigate();
  const isAuth = useSelector(state => state.auth.token);
  return (
    <HomeDiv>
      <div>
        <HomeTitle>
          Phone<span>BOOK</span>
        </HomeTitle>
        {isAuth ? (
          <HomeText>
            Welcome to the PhoneBook app! With this application, you can safely
            store your contacts. You are signed in, so you are now allowed to
            use contacts section
          </HomeText>
        ) : (
          <HomeText>
            Welcome to the PhoneBook app! With this application, you can safely
            store your contacts. To start using the application, you need to
            register or log in if you already have an account
          </HomeText>
        )}

        {!isAuth && (
          <UserMenuDiv>
            <UserMenuBtn onClick={() => navigate('/register')}>
              Registration
            </UserMenuBtn>
            <UserMenuBtn onClick={() => navigate('/login')}>LogIn</UserMenuBtn>
          </UserMenuDiv>
        )}
      </div>
      <HomeImg
        src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-contact-us_516790-177.jpg?w=360"
        alt="tel"
      />
    </HomeDiv>
  );
};
