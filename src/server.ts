import express from 'express'
import env from 'dotenv'
import router from './routes/index'
import http from "http"

env.config()

const server = express()

server.use(express.json())

server.use('/api/v1/', router)

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
}); 

export default server