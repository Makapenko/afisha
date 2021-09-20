import React from 'react';
import { Link } from "react-router-dom"

function Favorites(props) {
  return (
    <div>
       <Link to="/addEventAndPlace">
          <li className="margin-1 padding-1">Добавить Событие</li>
        </Link>
    </div>
  );
}

export default Favorites;
