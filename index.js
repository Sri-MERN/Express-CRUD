const express = require('express')
const app = express()
const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const dashboardRouter = require('./routes/dashboard')
const port = 8000

app.use(express.json())
app.use('/',indexRouter)
app.use('/users',usersRouter)
app.use('/dashboard',dashboardRouter)

app.listen(port,()=>console.log(`app running in port ${port}`))