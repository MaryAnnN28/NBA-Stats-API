import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Teams from './components/Teams/Teams';
import Players from './components/Players/Players';
import SearchBar from './components/Search/SearchBar';
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {


      
  render() {
    
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <SearchBar />
          <Switch>
            
            <Route exact path={"/teams"} render={routerProps => 
              <Teams {...routerProps} />}
            />

            <Route exact path={"/players"} render={routerProps => 
              <Players {...routerProps} />}
            />



          </Switch>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
