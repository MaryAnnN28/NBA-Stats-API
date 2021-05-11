import axios from 'axios';
import React, { useState, useEffect } from 'react'

const Players = () => {
  const [playerName, setPlayerName] = useState([]);
  const [playerPic, setPlayerPic] = useState([]);
  

  const fetchData = () => {
    const playerAPI = 'https://www.balldontlie.io/api/v1/players/300'
  
    const getNBAPlayer = axios.get(playerAPI)
    axios.all([getNBAPlayer]).then(
      axios.spread((...allData) => {
        const allDataPlayer = allData[0]

        console.log(allDataPlayer)
      })
    )
  }

  useEffect(() => {
    fetchData()
  }, [])
    
  return (
    <div>
      Player is: {playerName}
    </div>

  )
}
  
  
  
  


export default Players
