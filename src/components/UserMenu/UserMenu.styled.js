import styled from 'styled-components';
export const UserMenuDiv = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
`;

export const UserMenuName = styled.p`
  font-size: 35px;

  background: linear-gradient(to right, #30cfd0 0%, #330867 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1;
  padding: 5px 10px;
  font-weight: 500;
`;

export const UserMenuBtn = styled.button`
  align-items: center;
  appearance: none;
  background-image: radial-gradient(
    100% 100% at 100% 0,
    #5adaff 0,
    #5468ff 100%
  );

  border: 0;
  border-radius: 6px;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, rgba(58, 65, 111, 0.5) 0 -3px 0 inset;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-family: 'JetBrains Mono', monospace;

  height: 70px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  min-width: 200px;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
  font-size: 22px;
  font-weight: 500;
`;
