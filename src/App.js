import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import AppProvider from './store/AppProvider';

export default function App() {
  return (
    <div className="app">
      <Header />
      <AppProvider>
        <Sidebar />
        <MainContent />
      </AppProvider>
    </div>
  );
}
