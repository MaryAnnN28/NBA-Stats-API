import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import './Teams.css';

const Teams = () => {
  
  const [teams, setTeams] = useState([]);

  const fetchTeams = () => {
    const teamAPI = 'https://www.balldontlie.io/api/v1/teams'
    const getTeam = axios.get(teamAPI)
    axios.all([getTeam]).then(
      axios.spread((...allTeams) => {
        const team = allTeams[0].data.data
        
        setTeams(team)
      })
    )
  }

  useEffect(() => {
    fetchTeams()
  }, [])

  return (
    <div className="team-page">
      <div className="team-table">

        <Table size="sm" hover="true" textAlign="center">

          <thead>
            <tr>
              <th>TEAM</th>
              <th>DIV</th>
              <th>CONFERENCE</th>
            </tr>
          </thead>
          <tbody>
            {teams.map(team => 
            <tr key={team.id}>
                <td>{team.full_name}</td>
                <td>{team.division}</td>
                <td>{team.conference}</td> 
            </tr>
            )}
      
            
          </tbody>
        
        </Table>

      </div>
    </div>
  )
}

export default Teams; 