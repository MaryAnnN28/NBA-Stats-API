import React from "react";

import "./Tables.css";

const SeasonAvgTable = ({ player, seasonAvg }) => {
  const {
    games_played,
    min,
    pts,
    fga,
    fgm,
    fg_pct,
    fg3a,
    fg3m,
    fg3_pct,
    fta,
    ftm,
    ft_pct,
    oreb,
    dreb,
    reb,
    ast,
    blk,
    stl,
    pf,
    turnover,
  } = seasonAvg;

  return (
    <table class="ui compact table">
      <thead>
        <tr>
          <th className="center aligned">GP</th>
          <th className="center aligned">MIN</th>
          <th className="center aligned">PTS</th>
          <th className="center aligned">FGA</th>
          <th className="center aligned">FGM</th>
          <th className="center aligned">FG%</th>
          <th className="center aligned">3FGA</th>
          <th className="center aligned">3FGM</th>
          <th className="center aligned">3FG%</th>
          <th className="center aligned">FTA</th>
          <th className="center aligned">FTM</th>
          <th className="center aligned">FT%</th>
          <th className="center aligned">OREB</th>
          <th className="center aligned">DREB</th>
          <th className="center aligned">REB</th>
          <th className="center aligned">AST</th>
          <th className="center aligned">BLK</th>
          <th className="center aligned">STL</th>
          <th className="center aligned">PF</th>
          <th className="center aligned">TO</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{games_played}</td>
          <td>{min}</td>
          <td>{pts}</td>
          <td>{fga}</td>
          <td>{fgm}</td>
          <td>{String(Math.round(fg_pct * 100))}</td>
          <td>{fg3a}</td>
          <td>{fg3m}</td>
          <td>{String(Math.round(fg3_pct * 100))}</td>
          <td className="hide-stat">{fta}</td>
          <td className="hide-stat">{ftm}</td>
          <td className="hide-stat">{String(Math.round(ft_pct * 100))}</td>
          <td className="hide-stat">{oreb}</td>
          <td className="hide-stat">{dreb}</td>
          <td >{reb}</td>
          <td>{ast}</td>
          <td>{blk}</td>
          <td>{stl}</td>
          <td>{pf}</td>
          <td>{turnover}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default SeasonAvgTable;