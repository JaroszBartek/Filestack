import { useReducer, useEffect } from 'react';

import { ADD_NEW_FILES_TO_LIST, APP_SESSION_STORAGE } from '../utils/constants';
import AppContext from './app-context';

const localState = JSON.parse(sessionStorage.getItem(APP_SESSION_STORAGE));

const defaultState = {
  filesList: [],
  settings: [],
};

const appReducer = (state, action) => {
  const updatedList = state.filesList.concat(action.data);
  switch (action.type) {
    case ADD_NEW_FILES_TO_LIST:
      return {
        filesList: updatedList,
      };
    default:
      return defaultState;
  }
};

export default function AppProvider(props) {
  const [appState, dispatchAction] = useReducer(
    appReducer,
    localState || defaultState
  );

  useEffect(() => {
    sessionStorage.setItem(APP_SESSION_STORAGE, JSON.stringify(appState));
  }, [appState]);

  const addNewFilesHandler = (data) => {
    dispatchAction({ type: ADD_NEW_FILES_TO_LIST, data });
  };

  const appContext = {
    filesList: appState.filesList,
    addNewfileToList: addNewFilesHandler,
  };

  return (
    <AppContext.Provider value={appContext}>
      {props.children}
    </AppContext.Provider>
  );
}
