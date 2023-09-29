import styled from 'styled-components';
export const HomeText = styled.p`
  font-size: 25px;
  width: 400px;
  line-height: 1.7;
  font-weight: 500;
  margin-bottom: 80px;
  color: #330867;
  @media (max-width: 1200px) {
    font-size: 18px;
    margin-bottom: 40px;
    width: 290px;
  }
`;
export const HomeDiv = styled.div`
  height: calc(100vh - 160px);
  display: flex;
  gap: 400px;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    display: block;
    margin-top: 70px;
  }
`;
export const HomeImg = styled.img`
  width: 650px;
  height: 650px;
  box-shadow: 60px -16px white;
  border-radius: 50%;
  @media (max-width: 1200px) {
    display: none;
  }
`;
export const HomeTitle = styled.h1`
  font-size: 100px;
  background: -webkit-linear-gradient(#30cfd0 0%, #330867 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 1200px) {
    font-size: 40px;
  }
`;
export const ContactTitle = styled.h2`
  font-size: 100px;
  color: white;
  @media (max-width: 1200px) {
    font-size: 50px;
  }
`;
