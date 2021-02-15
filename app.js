import serverless from 'serverless-http'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import info from './package.json'

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json({
  extended: true
}))
app.use(cors())

app.get('/info', (req, res) => {
  res.send({
    application: info.description,
    version: info.version,
  })
})

const slsHandler = serverless(app)

export const handler = async (event, context) => {
  return await slsHandler(event, context)
}
export const server = app
