import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './views/home';
import Productregistration from './views/products/productregistration';
import ConsultaProdutos from './views/products/consulta';

function routes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route
        exact
        path="/product-registration"
        element={<Productregistration />}
      ></Route>
      <Route
        exact
        path="/consulta-produtos"
        element={<ConsultaProdutos />}
      ></Route>
    </Routes>
  );
}

export default routes;
