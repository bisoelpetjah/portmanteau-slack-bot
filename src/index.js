import express from 'express'

import rtm from 'src/rtm'

const app = express()

app.get('/', (req, res) => res.sendStatus(200))

rtm.start()

export default app
