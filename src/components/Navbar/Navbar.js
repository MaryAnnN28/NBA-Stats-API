import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <div className="navbar-container">
        <div className="nav-header">
          <Link to="/">
            <h2 className="logo">
              NBA STATS
            </h2>
          </Link>
        </div>

        <div className="nav-links">
          <ul>
            <li><Link to="/teams">Teams</Link></li>
            <li><Link to="/players">Players</Link></li>
            <li><Link to="/seasonleaders">Season Leaders</Link></li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Navbar