import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ToastContainer } from 'react-toastify';

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import '../src/styles/global.scss';

ReactDOM.render(
  <Fragment>
    <ToastContainer />
    <App />
  </Fragment>,
  document.getElementById('root')
);
