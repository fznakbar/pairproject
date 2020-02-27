const express = require('express')
const route = express.Router()

const UserController = require('../controllers/UserController')
const AdminController = require('../controllers/AdminController')

route.get('/', (req, res)=>{
    res.render('home')
})

route.get('/user/register', UserController.registerForm)
route.post('/user/register', UserController.register)

route.get('/user/login', UserController.loginPage)
route.post('/user/login', UserController.login)

route.get('/user/:userId/form', UserController.form)
route.post('/user/:userId/form', UserController.addList)
route.get('/user/delete/:userId/:userDestinationId/', UserController.delete)

route.get('/admin/register', AdminController.registerForm)
route.post('/admin/register', AdminController.register)
route.get('/admin/login', AdminController.loginForm)
route.post('/admin/login', AdminController.login)

route.get('/admin/mainPage', AdminController.mainPage)
// route.post('/admin/form', AdminController.addList)
// route.get('/admin/delete/:userDestinationId/', AdminController.delete)

module.exports = route