const express = require('express')
const route = express.Router()

const AdminController = require('../controllers/AdminController')

route.get('/:adminId/mainPage', AdminController.mainPage)
route.post('/:adminId/addDestination', AdminController.addDestination)

route.get('/delete/:adminId/:destinationId', AdminController.deleteDestination)

route.get('/edit/:adminId/:destinationId', AdminController.editDestinationForm)
route.post('/edit/:adminId/:destinationId', AdminController.editDestination)
route.get('/logout',AdminController.logout)

module.exports = route