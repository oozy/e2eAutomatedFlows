import express from 'express'
import { runTest } from './testRuner'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.end('Hello World!')
})

app.post('/task', async (req, res) => {
  req.setTimeout(500000)
  global.testResult = { score: 100, errors: [] }
  const { taskId, pageUrl } = req.body
  await runTest(taskId, pageUrl)
  res.json(testResult)
})

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}/`)
})
