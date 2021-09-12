import React, { useEffect, useState, useContext } from 'react';
import * as filestack from 'filestack-js';

import AppContext from '../store/app-context';

export default function FilesPicker() {
  const appCtx = useContext(AppContext);
  const [uploader, setUploader] = useState(false);
  const client = filestack.init(`${process.env.REACT_APP_API_KEY}`);

  const storeNewFileURLInContext = (filesURL) => {
    appCtx.addNewfileToList(filesURL.map((file) => file.url));
  };

  const options = {
    displayMode: 'dropPane',
    maxFiles: 20,
    dropPane: {
      showProgress: true,
      showIcon: true,
      overlay: false,
      customText: 'Drop files here to add or click',
      onProgress: (ev) => {
        console.log('uploadConfig', ev);
      },
      onSuccess: storeNewFileURLInContext,
    },
    container: '#filestackpicker',
    fromSources: ['local_file_system', 'url'],
    onFileUploadProgress: (file, event) => {
      console.log('popoapsdosd', event);
    },
  };

  useEffect(() => {
    if (uploader) client.picker(options).open();
  }, [uploader]);

  const toggleUploader = () => {
    setUploader(!uploader);
  };

  return (
    <div>
      <p>Media library</p>
      <button onClick={toggleUploader}>Add New</button>
      {uploader && (
        <div
          id="filestackpicker"
          style={{ height: '300px', background: 'yellow' }}
        ></div>
      )}
    </div>
  );
}
