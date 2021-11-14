import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Games.css'

import { Box, Grid, Card, Container, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
	gameContainer: {
		paddingTop: 10,
		paddingBottom: 10,
	},
	gameCard: {
		padding: 30,
	},
	score: {
		fontSize: '24pt',
		marginTop: '1rem',
	},
}))

const Games = () => {
	const classes = useStyles()
	const [games, setGames] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const today = new Date().toISOString().slice(0, 10)

		setLoading(true)
		axios.get(`https://www.balldontlie.io/api/v1/games?start_date=${today}&end_date=${today}`).then((game) => {
			setGames(game.data.data)
			setLoading(false)
		})
	}, [])

	return (
		<>
			<Container>
				<Grid container spacing={4} sx={{ mt: 10 }}>
					{games.map((game) => (
						<Grid item md={4} lg={4} xs={8} className={classes.gameContainer}>
							<Card className={classes.gameCard}>
								<Grid container spacing={4} sx={{ marginTop: 5, marginBottom: 5 }}>
									<Grid item md={6} lg={6} sx={{ mt: 10 }}>
										{game.home_team.abbreviation}
										<div className={classes.score}>{game.home_team_score}</div>
									</Grid>
									<Grid item md={6} lg={6}>
										{game.visitor_team.abbreviation}
										<div className={classes.score}>{game.visitor_team_score}</div>
									</Grid>
								</Grid>
								<Grid container spacing={4} sx={{ marginTop: 5, marginBottom: 5 }}>
									<Grid item md={12} lg={12} sx={{ mt: 10 }}>
										{game.status}
									</Grid>
								</Grid>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
		</>
	)
}

export default Games
