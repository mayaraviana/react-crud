import React from 'react';
import Navbar from './components/navbar';

import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Navbar />
          <Routes />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
