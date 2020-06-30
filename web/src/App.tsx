import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes/index';

import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
