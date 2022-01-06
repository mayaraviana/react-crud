import React, { useState } from 'react';
import Navbar from './components/navbar';
import Home from './views/home';

function App(props) {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
