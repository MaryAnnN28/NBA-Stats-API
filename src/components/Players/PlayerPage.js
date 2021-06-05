import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import axios from "axios";

import "./Players.css";
import Loader from "../Layout/Loader";
import Alert from "../Layout/Alert";

const Players = () => {
  const [players, setPlayers] = useState([]);
  const [term, setTerm] = useState("");
  const [alert, setAlert] = useState(null);
  const [loading, setLoading] = useState(false);

  const onChangeHandler = (e) => setTerm(e.target.value);

  const setAlertMsg = (msg) => {
    setAlert(msg);
    setTimeout(() => setAlert(null), 5000);
  };

  const searchPlayers = async (term) => {
    setLoading(true);

    const response = await axios.get(
      `https://www.balldontlie.io/api/v1/players?search=${term}`
    );

    if (response.data.data.length === 0) {
      setAlertMsg("There is no NBA player with that name");
      setLoading(false);
    } else {
      setPlayers(response.data.data);
      setLoading(false);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (term === "") {
      setAlertMsg("Please enter the player's name", "danger");
    } else {
      searchPlayers(term);
      setTerm("");
    }
  };

  const clearPlayersResults = () => {
    setPlayers([]);
    setLoading(false);
  };

  const showClearBtn = players.length > 0 ? true : false;

  const playersList = players.map((player) => {
    return (
      
      <div key={player.id} className="ui card">
      <Router>
        <Link
          to={`/players/${player.id}`}
          id={player.id}
        >
          <center><h3>{player.first_name} {player.last_name}</h3></center>
        </Link>
      </Router>
        <p>
          <br />
          <b>Position:</b> {player.position}
          <br />
          <b>Team:</b> {player.team.full_name}
        </p>
      </div>
    );
  });


  return loading ? <Loader /> : (
    <div className="players-container">
      { alert !== null && <Alert alert={alert} /> }
      <div className="form-container">
        <h1 className="players-heading">Browse NBA Players</h1>
        <form onSubmit={onSubmitHandler} className="ui form">
          <div className="ui action input">

          <input
            type="text"
            value={term}
            name="text"
            className="search-input"
            placeholder="Search for a player..."
            onChange={onChangeHandler}
          />
          </div>
          <button type="submit" className="ui icon button">
            <i class="search icon"></i>
          </button>
        </form>
        {showClearBtn && (
          <button onClick={clearPlayersResults} className="btn clear-btn">
            Clear search results
          </button>
        )}
      </div>
      <div className="player-results-container">
        {playersList}
      </div>
    </div>
  );
};

export default Players;
