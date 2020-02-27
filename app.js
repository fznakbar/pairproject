const express = require('express')
const app = express()
const port = 3001
const session = require('express-session')
const route = require('./routes')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}))

app.use('/', route)

app.listen(port, ()=>{
    console.log(`Running On Port ${port}`)
})