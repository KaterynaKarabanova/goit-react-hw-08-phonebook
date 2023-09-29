import styled from 'styled-components';
export const StyledContactItem = styled.li`
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  font-size: 30px;
  outline: thick double #32a1ce;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  max-width: 700px;
`;

export const StyledContactText = styled.p`
  font-family: 'JetBrains Mono', monospace;
  font-size: 30px;
  line-height: 1;
  margin: 10px;
  color: black;
  font-weight: 600;
  @media (max-width: 1200px) {
    font-size: 20px;
  }
`;
