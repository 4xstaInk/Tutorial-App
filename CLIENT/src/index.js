import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import Routes from '../src/routes.js';
import Footer from '../src/components/footer.js';
//import * as serviceWorker from 'serviceWorker';
import './index.css';


ReactDOM.render(
  <BrowserRouter>
  <Routes />
  <Footer/>
  </BrowserRouter>,
  document.getElementById('root')
);
