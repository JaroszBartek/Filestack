import React from 'react';
import Avatar from './Avatar';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="bg-gray-700 h-9 flex flex-row items-center justify-between px-4 shadow-lg">
      <Logo />
      <Avatar />
    </header>
  );
}
