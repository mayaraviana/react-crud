import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './views/home';
import Productregistration from './views/products/productregistration';

function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route
          exact
          path="/product-registration"
          element={<Productregistration />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default routes;
