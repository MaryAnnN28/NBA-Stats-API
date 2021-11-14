import React from 'react'
import Games from '../Games/Games'
import { Grid, Container, Box, Typography, makeStyles } from '@material-ui/core'

import './LandingPage.css'

const LandingPage = () => (
	<div className="landing-page-container">
		<div className="about">
			<h1 className="about-heading">Welcome to NBA Stats</h1>
			<p className="about-paragraph">
				<h3>Tonight's Games</h3>
				<Games />
			</p>
		</div>
	</div>
)

export default LandingPage
