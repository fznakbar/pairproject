const express = require('express')
const app = express()
const port = 3000
const session = require('express-session')
const route = require('./routes')
const userRoute = require('./routes/userRoutes.js')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))

app.use('/', route)
app.use('/user',userRoute)

app.listen(port, ()=>{
    console.log(`Running On Port ${port}`)
})