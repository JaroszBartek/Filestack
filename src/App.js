import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import AppProvider from './store/AppProvider';

export default function App() {
  return (
    <Router>
      <div className="h-screen">
        <Header />
        <main className="main-layout">
          <AppProvider>
            <Sidebar />
            <MainContent />
          </AppProvider>
        </main>
      </div>
    </Router>
  );
}
