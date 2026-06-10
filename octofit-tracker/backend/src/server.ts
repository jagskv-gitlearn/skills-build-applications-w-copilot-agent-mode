import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'

dotenv.config()

const app = express()
const port = Number(process.env.PORT ?? 8000)
const mongoUri = process.env.MONGODB_URI ?? 'mongodb://127.0.0.1:27017/octofit_tracker'

app.use(cors())
app.use(express.json())

app.get('/', (_request, response) => {
  response.json({
    service: 'octofit-tracker-backend',
    status: 'running',
  })
})

app.get('/health', (_request, response) => {
  response.json({
    mongoReady: mongoose.connection.readyState === 1,
    service: 'octofit-tracker-backend',
    status: 'ok',
  })
})

async function start() {
  await mongoose.connect(mongoUri)

  app.listen(port, () => {
    console.log(`OctoFit Tracker backend listening on http://localhost:${port}`)
  })
}

start().catch((error: unknown) => {
  console.error('Failed to start OctoFit Tracker backend:', error)
  process.exit(1)
})