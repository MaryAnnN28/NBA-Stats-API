import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Link } from "react-router-dom";
import * as NBAIcons from 'react-nba-logos'; 

import "../Teams/Teams.css";


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


  const teamByName = (fullName) => {
    return teams
      .filter((team) => {
        return team.full_name === fullName;
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

  const PHI = teamByName( 'Philadelphia 76ers' );
  const NYK = teamByName( 'New York Knicks' ); 
  const BOS = teamByName( 'Boston Celtics' );
  const BKN = teamByName( 'Brooklyn Nets' );
  const TOR = teamByName( 'Toronto Raptors' );
  
  const CHI = teamByName( 'Chicago Bulls' );
  const CLE = teamByName( 'Cleveland Cavaliers' );
  const DET = teamByName( 'Detroit Pistons' );
  const IND = teamByName( 'Indiana Pacers' );
  const MIL = teamByName( 'Milwaukee Bucks' );
  
  const ATL = teamByName( 'Atlanta Hawks' );
  const CHA = teamByName( 'Charlotte Hornets' );
  const MIA = teamByName( 'Miami Heat' );
  const ORL = teamByName( 'Orlando Magic' );
  const WAS = teamByName( 'Washington Wizards' );
  
  const DEN = teamByName( 'Denver Nuggets' );
  const MIN = teamByName( 'Minnesota Timberwolves' );
  const OKC = teamByName( 'Oklahoma City Thunder' );
  const POR = teamByName( 'Portland Trail Blazers' );
  const UTA = teamByName( 'Utah Jazz' );
  
  const GSW = teamByName( 'Golden State Warriors' );
  const LAC = teamByName( 'LA Clippers' );
  const LAL = teamByName( 'Los Angeles Lakers' );
  const PHX = teamByName( 'Phoenix Suns' );
  const SAC = teamByName( 'Sacramento Kings' );
  
  const DAL = teamByName( 'Dallas Mavericks' );
  const HOU = teamByName( 'Houston Rockets' );
  const MEM = teamByName( 'Memphis Grizzlies' );
  const NOP = teamByName( 'New Orleans Pelicans' );
  const SAS = teamByName( 'San Antonio Spurs' );
  



  return (
    <>
    <div className="teams-container">
        <h2 className="teams-heading">All Teams</h2>
        
        <hr className="hr-teams" align="center"/>

        <div className="divisions-container ui container">
          
        <div className="divisions-container ui three stackable cards">
          <div className="divisions-container-cards column">
            
            <div className="ui fluid card">
              <div className="content">
                <div className="divisions-team-heading header">ATLANTIC</div>
              </div>
              <div className="content">
                  <div className="description">
                    <ul className="division-info">
                      <li>
                        <div className="team-logo"><NBAIcons.PHI size={40} /></div>
                        <div className="team-name">{PHI}</div>
                      </li>
                    </ul>
                    <ul className="division-info">
                      <li>
                        <div className="team-logo"><NBAIcons.BOS size={40} /></div>
                        <div className="team-name">{BOS}</div>
                      </li>
                    </ul>
                    <ul className="division-info">
                      <li>
                        <div className="team-logo"><NBAIcons.BKN size={40} /></div>
                        <div className="team-name">{BKN}</div>
                      </li>
                    </ul>
                    <ul className="division-info">
                      <li>
                        <div className="team-logo"><NBAIcons.NYK size={40} /></div>
                        <div className="team-name">{NYK}</div>
                      </li>
                    </ul>
                    <ul className="division-info">
                      <li>
                        <div className="team-logo"><NBAIcons.TOR size={40} /></div>
                        <div className="team-name">{TOR}</div>
                      </li>
                    </ul>              
                </div>
              </div>
            </div>
          </div>

          <div className="divisions-container-cards column">
          <div className="ui fluid card">
            <div className="content">
              <div className="divisions-team-heading header">CENTRAL</div>
            </div>
            <div className="content">
              <div className="description">
              <ul className="division-info">
                    <li>
                      <div className="team-logo"><NBAIcons.CHI size={40} /></div>
                      <div className="team-name">{CHI}</div>
                    </li>
                  </ul>
                  <ul className="division-info">
                    <li>
                      <div className="team-logo"><NBAIcons.CLE size={40} /></div>
                      <div className="team-name">{CLE}</div>
                    </li>
                  </ul>
                  <ul className="division-info">
                    <li>
                      <div className="team-logo"><NBAIcons.DET size={40} /></div>
                      <div className="team-name">{DET}</div>
                    </li>
                  </ul>
                  <ul className="division-info">
                    <li>
                      <div className="team-logo"><NBAIcons.IND size={40} /></div>
                      <div className="team-name">{IND}</div>
                    </li>
                  </ul>
                  <ul className="division-info">
                    <li>
                      <div className="team-logo"><NBAIcons.MIL size={40} /></div>
                      <div className="team-name">{MIL}</div>
                    </li>
                  </ul>            
              </div>
            </div>
            </div>
          </div>

          
          <div className="divisions-container-cards column">
          <div className="ui fluid card">
            <div className="content">
              <div className="divisions-team-heading header">SOUTHEAST</div>
            </div>
            <div className="content">
              <div className="description">
              <ul className="division-info">
                    <li>
                      <div className="team-logo"><NBAIcons.ATL size={40} /></div>
                      <div className="team-name">{ATL}</div>
                    </li>
                  </ul>
                  <ul className="division-info">
                    <li>
                      <div className="team-logo"><NBAIcons.CHA size={40} /></div>
                      <div className="team-name">{CHA}</div>
                    </li>
                  </ul>
                  <ul className="division-info">
                    <li>
                      <div className="team-logo"><NBAIcons.MIA size={40} /></div>
                      <div className="team-name">{MIA}</div>
                    </li>
                  </ul>
                  <ul className="division-info">
                    <li>
                      <div className="team-logo"><NBAIcons.ORL size={40} /></div>
                      <div className="team-name">{ORL}</div>
                    </li>
                  </ul>
                  <ul className="division-info">
                    <li>
                      <div className="team-logo"><NBAIcons.WAS size={40} /></div>
                      <div className="team-name">{WAS}</div>
                    </li>
                  </ul>            
              </div>
            </div>
            </div>
          </div>
        
          
          <div className="divisions-container-cards column">
          <div className="ui fluid card">
            <div className="content">
              <div className="divisions-team-heading header">NORTHWEST</div>
            </div>
            <div className="content">
              <div className="description">
              <ul className="division-info">
                    <li>
                      <div className="team-logo"><NBAIcons.DEN size={40} /></div>
                      <div className="team-name">{DEN}</div>
                    </li>
                  </ul>
                  <ul className="division-info">
                    <li>
                      <div className="team-logo"><NBAIcons.MIN size={40} /></div>
                      <div className="team-name">{MIN}</div>
                    </li>
                  </ul>
                  <ul className="division-info">
                    <li>
                      <div className="team-logo"><NBAIcons.OKC size={40} /></div>
                      <div className="team-name">{OKC}</div>
                    </li>
                  </ul>
                  <ul className="division-info">
                    <li>
                      <div className="team-logo"><NBAIcons.POR size={40} /></div>
                      <div className="team-name">{POR}</div>
                    </li>
                  </ul>
                  <ul className="division-info">
                    <li>
                      <div className="team-logo"><NBAIcons.UTA size={40} /></div>
                      <div className="team-name">{UTA}</div>
                    </li>
                  </ul>            
              </div>
            </div>
            </div>
          </div>

          <div className="divisions-container-cards column">
            <div className="ui fluid card">
              <div className="content">
                <div className="divisions-team-heading header">PACIFIC</div>
              </div>
              <div className="content">
                <div className="description">
                  <ul className="division-info">
                      <li>
                        <div className="team-logo"><NBAIcons.GSW size={40} /></div>
                        <div className="team-name">{GSW}</div>
                      </li>
                    </ul>
                    <ul className="division-info">
                      <li>
                        <div className="team-logo"><NBAIcons.LAC size={40} /></div>
                        <div className="team-name">{LAC}</div>
                      </li>
                    </ul>
                    <ul className="division-info">
                      <li>
                        <div className="team-logo"><NBAIcons.LAL size={40} /></div>
                        <div className="team-name">{LAL}</div>
                      </li>
                    </ul>
                    <ul className="division-info">
                      <li>
                        <div className="team-logo"><NBAIcons.PHX size={40} /></div>
                        <div className="team-name">{PHX}</div>
                      </li>
                    </ul>
                    <ul className="division-info">
                      <li>
                        <div className="team-logo"><NBAIcons.SAC size={40} /></div>
                        <div className="team-name">{SAC}</div>
                      </li>
                    </ul>         
                </div>
              </div>
            </div>
          </div>

          <div className="divisions-container-cards column">
            <div className="ui fluid card">
              <div className="content">
                <div className="divisions-team-heading header">SOUTHWEST</div>
              </div>
              <div className="content">
                <div className="description">
                <ul className="division-info">
                    <li>
                      <div className="team-logo"><NBAIcons.DAL size={40} /></div>
                      <div className="team-name">{DAL}</div>
                    </li>
                  </ul>
                  <ul className="division-info">
                    <li>
                      <div className="team-logo"><NBAIcons.HOU size={40} /></div>
                      <div className="team-name">{HOU}</div>
                    </li>
                  </ul>
                  <ul className="division-info">
                    <li>
                      <div className="team-logo"><NBAIcons.MEM size={40} /></div>
                      <div className="team-name">{MEM}</div>
                    </li>
                  </ul>
                  <ul className="division-info">
                    <li>
                      <div className="team-logo"><NBAIcons.NOP size={40} /></div>
                      <div className="team-name">{NOP}</div>
                    </li>
                  </ul>
                  <ul className="division-info">
                    <li>
                      <div className="team-logo"><NBAIcons.SAS size={40} /></div>
                      <div className="team-name">{SAS}</div>
                    </li>
                  </ul>         
                </div>
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