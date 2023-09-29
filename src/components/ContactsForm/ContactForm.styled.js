import styled from 'styled-components';
export const StyledContactForm = styled.form`
  color: black;

  font-size: 40px;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  position: fixed;
  @media (max-width: 768px) {
    padding: 0;
    position: relative;
  }
`;
export const StyledContactlabel = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 50px;
  padding: 20px 20px;
  background: -webkit-linear-gradient(#30cfd0 0%, black 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 768px) {
    font-size: 20px;
    padding: 0;
  }
`;
export const StyledContactInput = styled.input`
  width: 700px;
  height: 50px;
  border-radius: 30px;
  margin-top: 20px;
  padding-left: 20px;
  font-size: 40px;
  -webkit-text-fill-color: black;
  @media (max-width: 768px) {
    width: 290px;
    font-size: 20px;
    padding-left: 10px;
  }
`;
