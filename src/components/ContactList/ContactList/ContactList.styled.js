import styled from 'styled-components';

export const StyledContactList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 400px 400px 400px;
  gap: 15px;
  padding: 30px 20px;
  @media (max-width: 1200px) {
    display: block;
    padding: 15px 10px;
  }
`;
