import React from 'react';
import { NavLink } from 'react-router-dom';

import { TEXT_LIBRARY, TEXT_SETTINGS } from '../utils/constants';

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            className="w-full inline-block px-2 py-1 hover:text-red-400 rounded-sm"
            activeClassName="selected"
            exact
            to="/"
          >
            {TEXT_LIBRARY}
          </NavLink>
        </li>
        <li>
          <NavLink
            className="w-full inline-block px-2 py-1 hover:text-red-400 rounded-sm"
            activeClassName="selected"
            to="/settings"
          >
            {TEXT_SETTINGS}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
