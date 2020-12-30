import 'dotenv/config'
import express from 'express'
const app = express()
const port = process.env.PORT || 5000
app.get('/', (_, res) => {
  console.log('GET / ')
  res.status(200).json({
    message: 'Hello Actions'
  })
})
app.listen(port, () => console.log(`Running on port ${port}`))
