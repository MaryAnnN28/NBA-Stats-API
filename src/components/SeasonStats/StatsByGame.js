import React from "react";

import "./Tables.css";

const StatsByGame = ({ byGameStats, player }) => {
  const teamsByIds = {
    1: "ATL",
    2: "BOS",
    3: "BKN",
    4: "CHA",
    5: "CHI",
    6: "CLE",
    7: "DAL",
    8: "DEN",
    9: "DET",
    10: "GSW",
    11: "HOU",
    12: "IND",
    13: "LAC",
    14: "LAL",
    15: "MEM",
    16: "MIA",
    17: "MIL",
    18: "MIN",
    19: "NOP",
    20: "NYK",
    21: "OKC",
    22: "ORL",
    23: "PHI",
    24: "PHX",
    25: "POR",
    26: "SAC",
    27: "SAS",
    28: "TOR",
    29: "UTA",
    30: "WAS",
  };

  const stats = byGameStats.map((byGame) => {
    const date = new Date(byGame.game.date);
    const idPicker = (homeID, playerID, visitorID, teamsIDs) => {
      return playerID === homeID ? teamsIDs[visitorID] : teamsIDs[homeID];
    };

    return (
      <tr key={byGame.id}>
        <td className="center aligned">
          <span className="game-date">{date.toDateString().slice(3, 15)} </span>
        </td>
        <td className="center aligned">
          <span className="team-abbr" style={{ color: "#1217b0", fontWeight: 'bold' }}>{player.team.abbreviation} vs </span>
          <span className="team-abbr" style={{ color: "#1217b0", fontWeight: 'bold' }}>
            {idPicker(
              byGame.game.home_team_id,
              byGame.player.team_id,
              byGame.game.visitor_team_id,
              teamsByIds
            )}
          </span>
        </td>
        <td className="center aligned">{byGame.min}</td>
        <td className="center aligned">{byGame.fg_pct}</td>
        <td className="center aligned">{byGame.fga}</td>
        <td className="center aligned">{byGame.fgm}</td>
        <td className="center aligned">{byGame.fg3a}</td>
        <td className="center aligned">{byGame.fg3m}</td>
        <td className="center aligned">{byGame.fta}</td>
        <td className="center aligned">{byGame.ftm}</td>
        <td className="center aligned">{byGame.oreb}</td>
        <td className="center aligned">{byGame.dreb}</td>
        <td className="center aligned">{byGame.reb}</td>
        <td className="center aligned">{byGame.ast}</td>
        <td className="center aligned">{byGame.blk}</td>
        <td className="center aligned">{byGame.stl}</td>
        <td className="center aligned">{byGame.pf}</td>
        <td className="center aligned">{byGame.turnover}</td>
        <td className="center aligned" style={{ color: "#1217b0", fontWeight: 'bold'}}>
          {byGame.pts}
        </td>
      </tr>
    );
  });

  return (
    <table class="ui compact table">
      <thead>
        <tr>
          <th className="center aligned">DATE</th>
          <th className="center aligned">OPP</th>
          <th className="center aligned">MIN</th>
          <th className="center aligned">FG%</th>
          <th className="center aligned">FGA</th>
          <th className="center aligned">FGM</th>
          <th className="center aligned">3FGA</th>
          <th className="center aligned">3FGM</th>
          <th className="center aligned">FTA</th>
          <th className="center aligned">FTM</th>
          <th className="center aligned">OREB</th>
          <th className="center aligned">DREB</th>
          <th className="center aligned">REB</th>
          <th className="center aligned">AST</th>
          <th className="center aligned">BLK</th>
          <th className="center aligned">STL</th>
          <th className="center aligned">PF</th>
          <th className="center aligned">TO</th>
          <th className="center aligned">PTS</th>
        </tr>
      </thead>
      <tbody>{stats}</tbody>
    </table>
  );
};

export default StatsByGame;