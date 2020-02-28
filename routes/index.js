const express = require('express')
const route = express.Router()

const UserController = require('../controllers/UserController')
const AdminController = require('../controllers/AdminController')

const adminRoute = require('./adminRoute')
const userRoute = require('./userRoute')


route.get('/', (req, res)=>{
    res.render('home')
})



const checkLoginAdmin = (req, res, next)=>{
    if(!req.session.user){
        console.log(req.session.user)
        res.redirect('/admins/login')
    } else {
        next()
    }
}

const checkLoginUser = (req, res, next)=>{
    if(!req.session.user){
        console.log(req.session.user)
        res.redirect('/users/login')
    } else {
        next()
    }
}

route.get('/users/register', UserController.registerForm)
route.post('/users/register', UserController.register)

route.get('/users/login', UserController.loginPage)
route.post('/users/login', UserController.login)

route.get('/admins/login', AdminController.loginForm)
route.post('/admins/login', AdminController.login)

route.use('/user', checkLoginUser, userRoute)
route.use('/admin', checkLoginAdmin, adminRoute)

module.exports = route