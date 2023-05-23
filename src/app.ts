import express from 'express'
import env from 'dotenv'
import router from './routes/index'
import http from "http"

env.config()

const app = express()

app.use(express.json())

app.use('/api/v1/', router)

export default app