import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import { connectDatabase } from './config/database.js'
import { activitiesRouter } from './routes/activities.js'
import { leaderboardRouter } from './routes/leaderboard.js'
import { teamsRouter } from './routes/teams.js'
import { usersRouter } from './routes/users.js'
import { workoutsRouter } from './routes/workouts.js'

dotenv.config()

const app = express()
const port = Number(process.env.PORT ?? 8000)
const codespaceName = process.env.CODESPACE_NAME
const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000'
const mongoUri = process.env.MONGODB_URI ?? 'mongodb://127.0.0.1:27017/octofit_db'

app.use(cors())
app.use(express.json())

app.use('/api/activities', activitiesRouter)
app.use('/api/leaderboard', leaderboardRouter)
app.use('/api/teams', teamsRouter)
app.use('/api/users', usersRouter)
app.use('/api/workouts', workoutsRouter)

app.get('/api', (_request, response) => {
  response.json({
    service: 'octofit-tracker-backend',
    baseUrl,
    status: 'running',
  })
})

app.get('/api/health', (_request, response) => {
  response.json({
    mongoReady: mongoose.connection.readyState === 1,
    service: 'octofit-tracker-backend',
    status: 'ok',
  })
})

app.get('/', (_request, response) => {
  response.redirect('/api')
})

app.get('/health', (_request, response) => {
  response.redirect('/api/health')
})

async function start() {
  await connectDatabase()

  app.listen(port, () => {
    console.log(`OctoFit Tracker backend listening on ${baseUrl}`)
  })
}

start().catch((error: unknown) => {
  console.error('Failed to start OctoFit Tracker backend:', error)
  process.exit(1)
})