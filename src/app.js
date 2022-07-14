import express from 'express'
import { HOST, PORT } from './config.js'
import router from './router/router.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', router)

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}/api/`)
})
