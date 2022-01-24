import React from 'react';

import MenuBar from './menu-bar';
import {Outlet} from 'react-router-dom';
import {SectionFooter} from './sections';

export default function Layout() {
  return (
    <div>
      <MenuBar/>
      <Outlet/>
      <SectionFooter/>
    </div>
  )
}
