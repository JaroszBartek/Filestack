import React from 'react';
import { Route, Switch } from 'react-router';

import FilesList from './FilesList';
import FilesPicker from './FilesPicker';
import Settings from './Settings';

export default function MainContent() {
  return (
    <div className="w-full bg-gray-50 p-4">
      <Switch>
        <Route exact path="/">
          <FilesPicker />
          <FilesList />
        </Route>
        <Route path="/">
          <Settings />
        </Route>
      </Switch>
    </div>
  );
}
