import React from 'react'

const Teams = ({ teams }) => {


  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>TEAM</th>
            <th>DIV</th>
            <th>CONFERENCE</th>
          </tr>
        </thead>
        <tbody>
          {/* {
            teams.filter(team => team.conference === "East")
              .sort((a, b) => a.name > b.name ? 1 : -1)
            .map(team =>  */}
          {
            teams.filter(team => team.conference === "East")
              .sort((a, b) => a.name > b.name ? 1 : -1)
            .map(team => 
            <tr key={team.id}>
              <td>{team.full_name}</td>
              <td>{team.division}</td>
              <td>{team.conference}</td>
            </tr>
            )}
        </tbody>
      </table>


   
    </div>
  )
}

export default Teams; 