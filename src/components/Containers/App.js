import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Navbar from '../Layout/Navbar';
import Routes from '../Routes/Routes'; 
// import Footer from '../Layout/Footer';



const App = () => (
  <React.Fragment>
    <Navbar />
    <Routes />
    {/* <Footer /> */}

  </React.Fragment>
)


export default App;
