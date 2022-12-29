import { StrictMode, useState } from 'react';
import React = require('react');
import { Link } from 'react-router-dom';

export default function SideBar() {
  let menuItems: SideBarMenuItem[] = [];
  menuItems.push({
    to: '/homepage',
    caption: 'Homepage',
    icon: 'calendar.png',
  });
  menuItems.push({
    to: '/colleagues',
    caption: 'Colleagues',
    icon: 'people.png',
  });

  let tempPathAssets =
    'https://raw.githubusercontent.com/bravelasagna/Test-template/main/assets/';

  return (
    <nav className="flex-column">
      {menuItems.map((menu) => (
        <div className="nav-item px-3">
          <Link to={menu.to} className="nav-link">
            <img className="menu-icon" src={tempPathAssets + menu.icon} />
            {menu.caption}
          </Link>
        </div>
      ))}
    </nav>
  );

  interface SideBarMenuItem {
    to: string;
    caption: string;
    icon?: string;
  }
}
