import styled from 'styled-components';
export const StyledContactForm = styled.form`
  color: black;

  font-size: 40px;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  position: fixed;
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
`;
export const StyledContactInput = styled.input`
  width: 700px;
  height: 50px;
  border-radius: 30px;
  margin-top: 20px;
  padding-left: 20px;
  font-size: 40px;
  -webkit-text-fill-color: black;
`;
// export const StyledContactButton = styled.button`
//   background-color: darkred;
//   font-size: 50px;
//   color: aliceblue;
//   padding: 10px 50px;
//   width: fit-content;
//   border-radius: 20px;
// `;
