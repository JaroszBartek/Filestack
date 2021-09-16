import React from 'react';

import { TEXT_WELCOME } from '../utils/constants';

export default function Avatar() {
  return (
    <div className="flex flex-row items-center">
      <p className="text-white">{TEXT_WELCOME}</p>
      <div className="bg-gray-400 ml-4">
        <svg
          className="h-8 w-8 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </div>
    </div>
  );
}
