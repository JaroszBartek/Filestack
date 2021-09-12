import React, { useContext } from 'react';
import AppContext from '../store/app-context';

export default function FilesList() {
  const appCtx = useContext(AppContext);

  return (
    <div>
      {appCtx.filesList.map((file) => (
        <div key={file}>
          <img src={file} alt={file} />
        </div>
      ))}
    </div>
  );
}
