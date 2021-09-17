import React from 'react';
import { Link } from "react-router-dom"

function Navigation() {
  return (
    <nav>
      <ul className="flex row jus-center">
        <Link to="/">
          <li className="margin-1 padding-1">Главное меню</li>
        </Link>
        <Link to="/events">
          <li className="margin-1 padding-1">События</li>
        </Link>
        <Link to="/map">
          <li className="margin-1 padding-1">Карта</li>
        </Link>
        <Link to="/favorites">
          <li className="margin-1 padding-1">Избранное</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navigation;
