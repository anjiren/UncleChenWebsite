import React from 'react';
import { Link } from 'react-router-dom';
import { MainNav } from './MainNav';

export const Layout = props => (
  <div className="uc-chrome">
    <MainNav />
    <div className="uc-workspace">
      {props.children}
    </div>
  </div>
);

export default Layout;
