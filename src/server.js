const express = require('express')
const cors = require('cors')
require('dotenv').config();
const emailRoutes = require('./routes/email.routes')


const app = express()
const port = process.env.PORT || 3333

app.use(cors())
app.use(express.json())
app.use('/api', emailRoutes)

app.listen(port, () => {
    console.log(`Server running! na porta ${port}`)
})