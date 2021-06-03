import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Games.css";
import Loader from "../Layout/Loader";

const Games = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // const today = new Date().toISOString().slice( 0, 10 );
    const today = new Date().toISOString().slice( 0, 10 );

    setLoading(true);
    axios.get(`https://www.balldontlie.io/api/v1/games?start_date=${today}&end_date=${today}`).then((game) => {
      setGames(game.data.data);
      setLoading(false);
    })
  }, []);

  const gamesList = games.map((game) => {


    return (
      
      <div key={game.id} className="ui card">
        <div className="date-and-time">
        <p className="team-vs-team-paragraph">
          <span className="home-team-abv">{game.home_team.abbreviation}</span>
          <span className="home-team-score">{game.home_team_score}</span>
          <span>  </span>
          <span className="visitor-team-abv">{game.visitor_team.abbreviation}</span>
          <span className="visitor-team-score">{game.home_team_score}</span>
        </p>
          <h3 className="time-heading">{game.status}</h3>
        </div>
      </div>
    );
  });

  return loading ? <Loader /> : (
    <div className="games-container">
      <h1
        style={{
          textAlign: "center",
          marginTop: "2rem",
          marginBottom: "1.5rem",
        }}
      >
        Tonight's games
      </h1>
      {gamesList}
    </div>
  );
};

export default Games;