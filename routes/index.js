const express = require('express')
const route = express.Router()

const UserController = require('../controllers/UserController')

route.get('/', (req, res)=>{
    res.send('home')
})

route.get('/user/register', UserController.registerForm)
route.post('/user/register', UserController.register)
route.get('/user/login', UserController.loginPage)
route.get('/user/:userId/form', UserController.form)
route.post('/user/:userId/form', UserController.addList)

module.exports = route