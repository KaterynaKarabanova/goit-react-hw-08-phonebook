import styled from 'styled-components';
export const ContactsDiv = styled.div`
  display: flex;
  gap: 20px;
  color: black;
  height: calc(100vh - 160px);
  @media (max-width: 768px) {
    display: block;
    margin-top: 60px;
    height: 100%;
  }
`;

export const ContactListDiv = styled.div`
  margin-left: 300px;
  padding-top: 60px;
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;
