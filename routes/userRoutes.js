const express= require('express')
const route = express.Router()
const controller = require('../controller/userController.js')

// route.get('/',controller.view)
route.get('/register',controller.addForm)
//route.post('/register',controller.register)
//route.get('/login',controller.loginForm)
// route.post('/login',controller.login)
//route.get('/mainpage',controller.mainPage)
// route.get('/add',controller.addForm)
// route.post('/add',controller.add)
// route.get('/edit/:id',controller.editForm)
// route.post('/edit/:id',controller.edit)
// route.get('/delete/:id',controller.delete)

module.exports = route