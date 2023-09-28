import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from './NavBar';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Layout = () => {
  return (
    <main>
      <NavBar />
      <UserMenu />
      <div>
        <Outlet />
      </div>
    </main>
  );
};
