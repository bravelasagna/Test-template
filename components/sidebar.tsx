import { StrictMode, useState } from 'react';
import React = require('react');
import { Link } from 'react-router-dom';

export default function SideBar() {
  let menuItems: SideBarMenuItem[] = [];
  menuItems.push({ to: '/homepage', caption: 'Homepage' });
  menuItems.push({ to: '/colleagues', caption: 'Colleagues' });

  return (
    <nav className="flex-column">
      {menuItems.map((menu) => (
        <Link to={menu.to} className="nav-link">
          <img className="menu-icon" src={menu.icon} />
          {menu.caption}
        </Link>
      ))}
    </nav>
  );

  interface SideBarMenuItem {
    to: string;
    caption: string;
    icon?: string;
  }
}
