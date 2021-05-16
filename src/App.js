import React, { useEffect, useState } from 'react';
import './App.css';
import Teams from './Teams';
import Players from './Players';
import axios from 'axios'

function App () {
  
  const [teams, setTeams] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch('https://www.balldontlie.io/api/v1/teams')
      .then(response => {
        if (response.ok) {
        return response.ok;
        }
        throw response; 
      })
      .then(teams => {
        setTeams(teams);
      })
      .catch(error => {
        console.error("error fetching data", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
    })
  }, [])


  if (loading) return "Loading..."; //
  if (error) return "Error!";
  

  // async componentDidMount() {
  //   const url = "https://www.balldontlie.io/api/v1/teams"
  //   let result = null;
  //   try {
  //     result = await axios(url, {
  //       headers: {
  //         Accept: 'application/json'
  //       }
  //     })
  //   } catch (err) {
  //     console.log(err)
  //   }
  //   this.setState({teams: result.data.data})
  // }


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

export default App;
