const Model = require('../models')
const Destination = Model.Destination
const User = Model.User
const UserDestination = Model.UserDestination

class UserController {

    static registerForm(req, res) {
        res.render('signup')
    }

    static register(req, res) {
        let obj = {
            first_name: req.body.firstname,
            last_name: req.body.lastname,
            email: req.body.email,
            role: 'user',
            username: req.body.username,
            password: req.body.password
        }
        User.create(obj)
            .then(result => {
                let data = 'Congratulation! you can login now!'
                res.redirect('/user/login')
            })
            .catch(err => {
                res.send(err)
            })

    }


    static loginPage(req, res) {
        res.send('halaman login')
    }

    static login(req, res) {

    }

    static form(req, res) {
        let listDestination = null
        Destination.findAll()
            .then(data => {
                listDestination = data
            })
            .catch(err => {
                res.send(err)
            })
        let id = req.params.userId
        User.findByPk(id, { include: { model: Destination }})
            .then(data => {
                // res.send(data)
                res.render('form', {list:listDestination, data:data, id:id})
            })
    }

    static addList(req, res){
        let id = req.params.userId
        let obj = {
            UserId : id,
            DestinationId : ,
        }
        UserDestination.create()
    }


}

module.exports = UserController