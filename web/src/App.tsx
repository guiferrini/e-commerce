import React from 'react';
import './App.css';

import Routes from './routes/index';

import AuthContext from './context/AuthContext';

function App() {
  return (
    <>
      <AuthContext.Provider value={{ name: 'gui' }}>
        <Routes />
      </AuthContext.Provider>
    </>
  );
}

export default App;
