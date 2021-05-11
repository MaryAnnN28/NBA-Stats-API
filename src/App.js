import React, { Component } from 'react';
import './App.css';
import Teams from './Teams';
import Players from './Players';
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      teams:[]
    }
  }
  

  async componentDidMount() {
    const url = "https://www.balldontlie.io/api/v1/teams"
    let result = null;
    try {
      result = await axios(url, {
        headers: {
          Accept: 'application/json'
        }
      })
    } catch (err) {
      console.log(err)
    }
    this.setState({teams: result.data.data})
  }




  render() {
    const { teams } = this.state;
    console.log({teams})
    return (
      <div className="App">
        <Teams
          teams={teams}
          sort={this.state.sort}
        />
        
        <Players />
      </div>
    );
  }
}

export default App;
