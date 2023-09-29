import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from './NavBar';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { LayoutMain } from './Layout.styled';
export const Layout = () => {
  return (
    <main>
      <LayoutMain>
        <NavBar />
        <UserMenu />
      </LayoutMain>
      <div>
        <Outlet />
      </div>
    </main>
  );
};
