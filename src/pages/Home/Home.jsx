import {
  UserMenuBtn,
  UserMenuDiv,
} from '../../components/UserMenu/UserMenu.styled';
import { HomeText, HomeDiv, HomeImg, HomeTitle } from './Home.styled';
export const Home = () => {
  return (
    <HomeDiv>
      <div>
        <HomeTitle>
          Phone<span>BOOK</span>
        </HomeTitle>
        <HomeText>
          Welcome to the PhoneBook app! With this application, you can safely
          store your contacts. To start using the application, you need to
          register or log in if you already have an account
        </HomeText>
        <UserMenuDiv>
          <UserMenuBtn>Registration</UserMenuBtn>
          <UserMenuBtn>LogIn</UserMenuBtn>
        </UserMenuDiv>
      </div>
      <HomeImg
        src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-contact-us_516790-177.jpg?w=360"
        alt="tel"
      />
    </HomeDiv>
  );
};
