import React from 'react';

const AppContext = React.createContext({
  filesList: [],
  settings: [],
  addNewfileToList: (file) => file,
  changeSettings: (settings) => settings,
});

export default AppContext;
