import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter } from 'react-router-dom'; 

import Navbar from '../Layout/Navbar';
import Routes from '../Routes/Routes'; 



const App = () => (
  <React.Fragment>
    <BrowserRouter>
      <Navbar />
      <Routes />
    </BrowserRouter>

  </React.Fragment>
)


export default App;
