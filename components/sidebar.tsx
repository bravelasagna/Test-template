import { StrictMode, useState } from 'react';
import React = require('react');
import { NavLink, Link } from 'react-router-dom';

export default function SideBar() {
  let menuItems: SideBarMenuItem[] = [];
  menuItems.push({
    to: '/homepage',
    caption: 'Homepage',
    icon: 'home.png',
  });
  menuItems.push({
    to: '/calendar',
    caption: 'Calendario',
    icon: 'calendar.png',
  });
  menuItems.push({
    to: '/requests',
    caption: 'Richieste',
    icon: 'approved.png',
  });
  menuItems.push({
    to: '/colleagues',
    caption: 'Colleghi',
    icon: 'people.png',
  });
  menuItems.push({
    to: '/thanksmatters',
    caption: '#ThanksMatters',
    icon: 'heart.png',
  });
  menuItems.push({
    to: '/bookroom',
    caption: 'Prenota Sala',
    icon: 'meeting-room.png',
  });
  menuItems.push({
    to: '/travels',
    caption: 'Trasferte',
    icon: 'plane.png',
  });
  menuItems.push({
    to: '/documents',
    caption: 'Documenti',
    icon: 'file.png',
  });
  menuItems.push({
    to: '/admin',
    caption: 'Pannello Controllo',
    icon: 'file.png',
  });

  let tempPathAssets =
    'https://raw.githubusercontent.com/bravelasagna/Test-template/main/assets/';

  return (
    <nav className="flex-column">
      {menuItems.map((menu) => (
        <div className="nav-item px-3" key={menu.to}>
          <NavLink to={menu.to} className="nav-link">
            <img className="menu-icon" src={tempPathAssets + menu.icon} />
            {menu.caption}
          </NavLink>
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
