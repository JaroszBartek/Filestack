import React from 'react';

import { LOGO } from '../utils/constants';

export default function Logo() {
  return (
    <div className="text-white uppercase text-xl tracking-tighter font-extrabold font-mono italic">
      <p>{LOGO}</p>
    </div>
  );
}
