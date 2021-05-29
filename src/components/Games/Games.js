import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Games.css";
import Loader from "../Layout/Loader";

const Games = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // const today = new Date().toISOString().slice( 0, 10 );
    const today = new Date().toDateString();
    const tomorrow = new Date(today).toDateString() + 1; 
    setLoading(true);
    axios.get(`https://www.balldontlie.io/api/v1/games?start_date=${today}&end_date=${tomorrow}`).then((game) => {
      setGames(game.data.data);
      setLoading(false);
    })
  }, []);

  const gamesList = games.map((game) => {
    // const date = new Date(game.date);

    return (
      <div key={game.id} className="game-container">
        <div className="date-and-time">
        <p className="team-vs-team-paragraph">
          <span>{game.home_team.full_name}</span>
          <span>{game.home_team_score}</span>
          <span> VS </span>
          <span>{game.visitor_team.full_name}</span>
          <span>{game.home_team_score}</span>
        </p>
          <h2 className="time-heading">{game.status}</h2>
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