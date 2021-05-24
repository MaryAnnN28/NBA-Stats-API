import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap'
import './Players.css'

const Players = () => {

  // season_avg_url = "https://www.balldontlie.io/api/v1/season_averages?season=2020&player_ids[]=237"

  const [player, setPlayer] = useState([]);
  const [seasonAvg, setSeasonAvg] = useState([]);
  
  const fetchData = () => {
    const playerAPI = 'https://www.balldontlie.io/api/v1/players/417'
    const avgAPI = 'https://www.balldontlie.io/api/v1/season_averages?season=2020&player_ids[]=417'

    const getPlayer = axios.get(playerAPI)
    const getAvgs = axios.get(avgAPI)

    axios.all([getPlayer, getAvgs]).then(
      axios.spread((...allData) => {
        const allPlayerData = allData[0].data
        const allSeasonAvg = allData[1].data.data[0]
  
        setPlayer(allPlayerData)
        setSeasonAvg(allSeasonAvg)
      })
    )
  }

  useEffect(() => {
    fetchData()
  }, [])
  
  return ( 
    <div className="players-page">
      <h1>{player.first_name} {player.last_name}</h1>
      {/* <h3>{player.team.full_name}</h3> */}
      <p>
        
        <b>Position:</b> {player.position} <br />
        <b>Height:</b> {player.height_feet}'{player.height_inches}<br />
        <b>Weight:</b> {player.weight_pounds}<br />
      </p>
      <Table>
        <thead>
          <tr>
            <th>GP</th>
            <th>MIN</th>
            <th>PTS</th>
            <th>FGM</th>
            <th>FGA</th>
            <th>3PM</th>
            <th>3PA</th>
            <th>FTM</th>
            <th>FTA</th>
            <th>OREB</th>
            <th>DREB</th>
            <th>REB</th>
            <th>AST</th>
            <th>STL</th>
            <th>BLK</th>
            <th>TO</th>
            <th>PF</th>
            <th>FG%</th>
            <th>3%</th>
            <th>FT%</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{seasonAvg.games_played}</td>
            <td>{seasonAvg.min}</td>
            <td>{seasonAvg.pts}</td>
            <td>{seasonAvg.fgm}</td>
            <td>{seasonAvg.fga}</td>
            <td>{seasonAvg.fg3m}</td>
            <td>{seasonAvg.fg3a}</td>
            <td>{seasonAvg.ftm}</td>
            <td>{seasonAvg.fta}</td>
            <td>{seasonAvg.oreb}</td>
            <td>{seasonAvg.dreb}</td>
            <td>{seasonAvg.reb}</td>
            <td>{seasonAvg.ast}</td>
            <td>{seasonAvg.stl}</td>
            <td>{seasonAvg.blk}</td>
            <td>{seasonAvg.turnover}</td>
            <td>{seasonAvg.pf}</td>
            <td>{seasonAvg.fg_pct}</td>
            <td>{seasonAvg.fg3_pct}</td>
            <td>{seasonAvg.ft_pct}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Players