import React from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Teams from './components/Teams/Teams';
import TeamList from './components/Teams/TeamList';
import PlayerPage from './components/Players/PlayerPage';
import SeasonLeaders from './components/SeasonLeaders/SeasonLeaders';
import SearchBar from './components/Search/SearchBar';
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const playerAPI = 'https://www.balldontlie.io/api/v1/players'
const avgAPI = 'https://www.balldontlie.io/api/v1/season_averages?season=2020&player_ids[]=417'


class App extends React.Component {

  state = {
    teams: [],
    team: {},
    players: [],
    player: {}
  };


  onSearchSubmit = async (term) => {
    const response = await axios.get(playerAPI, {
      params: { query: term },
    });
    console.log({ player: response.data.data.first_name });
  }
      
  render() {
    
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <SearchBar onSubmit={this.onSearchSubmit} />
          <Switch> 
            <Route exact path={"/"} render={routerProps => 
              <Home {...routerProps} />}
            />
            <Route exact path={"/teams"} render={routerProps => 
              <Teams {...routerProps} />}
            />
            <Route exact path={"/allteams"} render={routerProps => 
              <TeamList {...routerProps} />}
            />
            <Route exact path={"/players"} render={routerProps => 
              <PlayerPage {...routerProps} />}
            />
            <Route exact path={"/seasonleaders"} render={routerProps =>
              <SeasonLeaders {...routerProps} />}
            />
          </Switch>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
