import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import 'bootswatch/dist/cerulean/bootstrap.min.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App nome="mayara viana" />
  </React.StrictMode>,
  document.getElementById('root')
);
