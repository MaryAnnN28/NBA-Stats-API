import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from '../Layout/Navbar';
import Routes from '../Routes/Routes';
import Footer from '../Layout/Footer';

const playerAPI = 'https://www.balldontlie.io/api/v1/players'
const avgAPI = 'https://www.balldontlie.io/api/v1/season_averages?season=2020&player_ids[]=417'


const App = () => (
  <React.Fragment>
    <Navbar />
    <Routes />
    <Footer />

  </React.Fragment>
)


export default App;
