import React from 'react';
import { Link } from "react-router-dom"

function Navigation() {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Главное меню</li>
        </Link>
        <Link to="/cardList">
          <li>События</li>
        </Link>
        <Link to="/map">
          <li>Карта</li>
        </Link>
        <Link to="/favorites">
          <li>Избранное</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navigation;
