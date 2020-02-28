const express = require('express')
const route = express.Router()

const UserController = require('../controllers/UserController')

route.get('/:userId/form', UserController.form)
route.post('/:userId/form', UserController.addList)
route.get('/delete/:userId/:userDestinationId/', UserController.delete)

route.get('/:userId/confirmreview', UserController.confirm)
route.get('/logout',UserController.logout)

module.exports = route