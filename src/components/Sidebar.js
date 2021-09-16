import React from 'react';

import Nav from './Nav';
import { TEXT_MEDIA } from '../utils/constants';

export default function Sidebar() {
  return (
    <div className="flex flex-col p-2 bg-gray-700 w-40 text-white">
      <h2 className="text-xl font-bold">{TEXT_MEDIA}</h2>
      <Nav />
    </div>
  );
}
