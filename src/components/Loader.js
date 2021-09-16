import React from 'react';

export default function Loader({ files, progress }) {
  return (
    <>
      {!!files.length && (
        <div className="absolute inset-0 bg-gray-50 z-20 w-full h-full">
          {files.map((file) => (
            <div
              key={file.lastModified}
              className="flex flex-row items-center "
            >
              <div className="w-16 h-16 bg-black flex flex-row items-center justify-start px-2"></div>
              <progress id="file" max="100" value={progress}></progress>
              <p>{file.name}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
