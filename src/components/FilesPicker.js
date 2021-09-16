import React, { useState, useRef, useContext } from 'react';

import Loader from './Loader';
import * as filestack from 'filestack-js';
import AppContext from '../store/app-context';
import {
  TEXT_DRAG_AND_DROP,
  TEXT_CLICK,
  TEXT_SUCCESS,
  TEXT_CANCEL,
} from '../utils/constants';

export default function FilesPicker() {
  const appCtx = useContext(AppContext);
  const fileInputField = useRef(null);
  const [files, setFiles] = useState([]);
  const [success, setSuccess] = useState(null);
  const [progress, setProgress] = useState(null);
  const client = filestack.init(`${process.env.REACT_APP_API_KEY}`);
  const token = {};
  const progressInterval = 200;

  const storeNewFileURLInContext = (uploadedFiles) => {
    appCtx.addNewfileToList(uploadedFiles.map((file) => file));
  };

  const onProgress = (ev) => {
    setProgress(ev.totalPercent);
  };

  const handleAddNewFile = (e) => {
    let { files: newFiles } = e.target;
    if (newFiles.length) {
      const filesArray = storeFilesInArray(newFiles);
      setFiles(filesArray);
      client
        .multiupload(filesArray, { onProgress, progressInterval }, {}, token)
        .then((res) => {
          setFiles([]);
          setSuccess(true);
          storeNewFileURLInContext(res);
          e.target.value = null;
        })
        .catch((e) => {
          console.error(e.message);
        });
    }
  };

  const storeFilesInArray = (files) => {
    return Object.values(files);
  };

  const handleBtnClick = () => {
    fileInputField.current.click();
  };

  const handleCancel = () => {
    token.cancel && token.cancel();
  };

  const closeSuccess = () => {
    setSuccess(false);
  };

  return (
    <>
      <div className="relative h-1/3 border-4 border-dashed border-red-400 hover:border-red-700 hover:bg-white focus:bg-white focus:border-red-700 flex flex-col items-center justify-center transition-all">
        <form>
          <p>{TEXT_DRAG_AND_DROP}</p>
          <button
            onClick={handleBtnClick}
            className="border border-solid border-red-400 bg-transparent font-bold py-2 px-4 rounded relative text-red-400 hover:text-red-600 z-10 m-auto block"
          >
            {TEXT_CLICK}
          </button>
          <input
            multiple
            type="file"
            id="picker"
            ref={fileInputField}
            onChange={handleAddNewFile}
            className="absolute inset-0 block w-full border-none opacity-0"
          />
        </form>
        <Loader files={files} progress={progress} />
        {success && (
          <div className="h-40 w-80 bg-red-400 absolute z-20 flex flex-col justify-start items-end p-4">
            <button onClick={closeSuccess}>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="text-black self-center flex-auto text-xl font-bold mt-7">
              {TEXT_SUCCESS}
            </div>
          </div>
        )}
      </div>
      <button
        onClick={handleCancel}
        className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
      >
        {TEXT_CANCEL}
      </button>
    </>
  );
}
