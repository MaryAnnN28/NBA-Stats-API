import React, { useState, useEffect } from "react";
import axios from "axios";

import Loader from "../Layout/Loader";
import Alert from "../Layout/Alert";
import "../Players/Player.css";
import SeasonAvgTable from "../SeasonStats/SeasonAvg";
import StatsByGameTable from "../SeasonStats/StatsByGame";

const Player = (props) => {
  const [player, setPlayer] = useState({});
  const [playerTeam, setPlayerTeam] = useState({});
  const [seasonAvg, setSeasonAvg] = useState({});
  const [statsByGame, setStatsByGame] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [activePlayer, setActivePlayer] = useState(false);

  const id = props.location.pathname.substring(9);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://www.balldontlie.io/api/v1${props.location.pathname}`)
      .then((player) => {
        setPlayer(player.data);
        setPlayerTeam(player.data.team);
        setLoading(false);
      });
  }, [props.location.pathname]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${id}`
      )
      .then((res) => {
        if (res.data.data.length === 0) {
          setAlert("This is not an active NBA player, so there are no stats");
        } else {
          setSeasonAvg(res.data.data[0]);
          setActivePlayer(true);
          setLoading(false);
        }
      });
  }, [id]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://www.balldontlie.io/api/v1/stats?seasons[]=2020&player_ids[]=${id}`
      )
      .then((res) => {
        setStatsByGame(res.data.data);
        setLoading(false);
      });
  }, [id]);

  return loading ? (
    <Loader />
  ) : (
    <div className="player-container">
      {alert !== null && <Alert alert={alert} />}
      <div className="player-header">
        <h1 className="player-heading">
          {player.first_name} {player.last_name}
        </h1>
          <p className="player-info">
            <span className="player-info--key">
              Team: 
            </span>
            <span className="player-info--value">
              {playerTeam.full_name}
            </span>
          </p>
        {player.position && (
            <p className="player-info">
              <span className="player-info--key">
                Position:
              </span>
              <span className="player-info--value">
                {player.position}
              </span>
          </p>
        )}
        {player.height_feet && (
            <p className="player-info">
              <span className="player-info--key">
                Height:{" "}
              </span>
              <span className="player-info--value">
                {player.height_feet}'{player.height_inches}
              </span>
            
          </p>
        )}
        {player.weight_pounds && (
          <p className="player-info">
            <span className="player-info--key">
              Weight: 
            </span>
            <span className="player-info--value">
              {player.weight_pounds}
            </span>
            </p>
            
        )}
      </div>
      {activePlayer && (
        <>
          <div className="table-container" id="season-table-container">
            { loading ? <Loader /> : <SeasonAvgTable seasonAvg={seasonAvg} player={player} /> }
          </div>
          <div className="table-container" id="game-table-container">
            { loading ? <Loader /> : <StatsByGameTable byGameStats={statsByGame} player={player} /> }
          </div>
        </>
      )}
    </div>
  );
};

export default Player;