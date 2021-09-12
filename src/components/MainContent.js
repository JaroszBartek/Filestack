import React from 'react';
import FilesList from './FilesList';
import FilesPicker from './FilesPicker';

export default function MainContent() {
  return (
    <div className="content">
      <FilesPicker />
      <hr />
      <FilesList />
    </div>
  );
}
