import React, { useContext } from 'react';

import AppContext from '../store/app-context';
import Image from './Image';

export default function FilesList() {
  const appCtx = useContext(AppContext);

  return (
    <div className="overflow-y-auto h-3/5 grid md:grid-cols-4 grid-cols-2 lg:grid-cols-8 gap-6 auto-rows-min">
      {appCtx.filesList.map((file) => (
        <div key={file.url} className="h-44 overflow-hidden">
          <Image src={file.url} alt={file.name} thumbnail={true} />
        </div>
      ))}
    </div>
  );
}
