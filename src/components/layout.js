import React from 'react';

import MenuBar from './menu-bar';
import {Outlet} from 'react-router-dom';
import Footer from './footer';

export default function Layout() {
  return (
    <div>
      <MenuBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
