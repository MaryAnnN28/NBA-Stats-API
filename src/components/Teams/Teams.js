import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Link } from "react-router-dom";
import * as NBAIcons from 'react-nba-logos'; 

import "../Teams/Teams.css";
import Spinner from "../Layout/Spinner";

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get("https://www.balldontlie.io/api/v1/teams").then((teams) => {
      setTeams(teams.data.data);
      setLoading(false);
    });
  }, []);

  const filterTeamsByDivision = (divisionName) => {
    return teams
      .filter((team) => {
        return team.division === divisionName;
      })
      .map((team) => (
        <h4 className="team-name-heading" key={team.id}>
          <Router>
            <Link
              to={`/teams/${team.id}`}
              className="team-link"
            >
              {team.full_name}
            </Link>
          </Router>
        </h4>
      ));
  };

  const atlanticDivisionTeams = filterTeamsByDivision("Atlantic");
  const pacificDivisionTeams = filterTeamsByDivision("Pacific");
  const centralDivisionTeams = filterTeamsByDivision("Central");
  const southeastDivisionTeams = filterTeamsByDivision("Southeast");
  const southwestDivisionTeams = filterTeamsByDivision("Southwest");
  const northwestDivisionTeams = filterTeamsByDivision("Northwest");

  return loading ? <Spinner /> : (
    <>
    <div className="teams-container">
      <h1 className="teams-heading">NBA Teams</h1>

        <div className="divisions-container ui container" styles={{ align: 'center' }}>
        <div className="ui cards">
            
          <div className="ui card">
            <div className="content">
              <div className="divisions-team-heading header">ATLANTIC</div>
            </div>
            <div className="content">
              <div className="description">
                <p>{atlanticDivisionTeams}
                  <NBAIcons.PHI size={50} />
                  <NBAIcons.NYK size={50} />
                  <NBAIcons.BOS size={50} />
                  <NBAIcons.BKN size={50} />
                  <NBAIcons.TOR size={50} />
                </p>
              </div>
            </div>
          </div>

          <div className="ui card">
            <div className="content">
              <div className="divisions-team-heading header">PACIFIC</div>
            </div>
            <div className="content">
              <div className="description">
                <p>{pacificDivisionTeams}</p>
                  <NBAIcons.GSW size={50} />
                  <NBAIcons.LAC size={50} />
                  <NBAIcons.LAL size={50} />
                  <NBAIcons.PHX size={50} />
                  <NBAIcons.SAC size={50} />
              </div>
            </div>
          </div>

          <div className="ui card">
            <div className="content">
              <div className="divisions-team-heading header">CENTRAL</div>
            </div>
            <div className="content">
              <div className="description">
                <p>{centralDivisionTeams}</p>
                 <NBAIcons.CHI size={50} />
                  <NBAIcons.CLE size={50} />
                  <NBAIcons.DET size={50} />
                  <NBAIcons.IND size={50} />
                  <NBAIcons.MIL size={50} />
              </div>
            </div>
          </div>
        
          <div className="ui card">
            <div className="content">
              <div className="divisions-team-heading header">SOUTHEAST</div>
            </div>
            <div className="content">
              <div className="description">
                <p>{southeastDivisionTeams}</p>
                  <NBAIcons.CHI size={50} />
                  <NBAIcons.CLE size={50} />
                  <NBAIcons.DET size={50} />
                  <NBAIcons.IND size={50} />
                  <NBAIcons.MIL size={50} />
              </div>
            </div>
          </div>
        
          <div className="ui card">
            <div className="content">
              <div className="divisions-team-heading header">SOUTHWEST</div>
            </div>
            <div className="content">
              <div className="description">
                  <p>{southwestDivisionTeams}</p>
                  <NBAIcons.DAL size={50} />
                  <NBAIcons.HOU size={50} />
                  <NBAIcons.MEM size={50} />
                  <NBAIcons.NOP size={50} />
                  <NBAIcons.SAS size={50} />
              </div>
            </div>
          </div>
        
          <div className="ui card">
            <div className="content">
              <div className="divisions-team-heading header">NORTHWEST</div>
            </div>
            <div className="content">
              <div className="description">
                  <p>{northwestDivisionTeams}</p>
                  <NBAIcons.DEN size={50} />
                  <NBAIcons.MIN size={50} />
                  <NBAIcons.OKC size={50} />
                  <NBAIcons.POR size={50} />
                  <NBAIcons.UTA size={50} />
              </div>
            </div>
          </div>
        
        </div>
      </div>
  </div>

      
    </>
  );
};

export default Teams;