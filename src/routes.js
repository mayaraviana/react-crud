import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './views/home';

function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default routes;
