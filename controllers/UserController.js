const Model = require('../models')
const Destination = Model.Destination
const User = Model.User
const UserDestination = Model.UserDestination
const numberToRp = require('../helpers/numberToRp')

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
            password: req.body.password,
            is_logIn: false
        }
        User.create(obj)
            .then(result => {
                let data = 'Congratulation! you can login now!'
                res.redirect('/users/login')
            })
            .catch(err => {
                res.send(err)
            })

    }


    static loginPage(req, res) {
        res.render('login')
    }

    static login(req, res) {
        let obj = {
            username : req.body.username,
            password : req.body.password
        }
        User.findOne({where : {username:obj.username , password:obj.password}})
        .then(data=>{
            User.update({is_logIn : true}, {where : {username:obj.username , password:obj.password}})
            .then(()=>{
                
                req.session.user = {id : data.id,
                    role : data.role,
                    name : data.name}
                    console.log(req.session.user)
                res.redirect(`/user/${data.id}/form`)
            })
            .catch(err=>{
                res.redirect('/users/login')
            })
        })
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
        User.findByPk(id, { include: { model: Destination }, order: [
                    [Destination, { model: UserDestination }, 'date', 'ASC']
                ] })
            .then(data => {
                let totalHarga = 0
                for (let i = 0; i < data.Destinations.length; i++) {
                    totalHarga += data.Destinations[i].price
                }
                    // res.send(data)
                res.render('form', { list: listDestination, data: data, id: id, harga: totalHarga, numberToRp })
            })
    }

    static addList(req, res) {
        let id = req.params.userId
        let obj = {
            UserId: id,
            DestinationId: req.body.destinationId,
            date: req.body.date,
            confirmed: false,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        UserDestination.create(obj)
            .then(() => {
                res.redirect(`/user/${id}/form`)
            })
    }

    static delete(req, res) {
        let params = req.params.userDestinationId
        let params2 = req.params.userId
        UserDestination.destroy({ where: { UserId: params2, DestinationId: params } })
            .then(() => {
                res.redirect(`/user/${params2}/form`)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static confirm(req,res){
        let listDestination = null
        Destination.findAll()
            .then(data => {
                listDestination = data
            })
            .catch(err => {
                res.send(err)
            })
        let id = req.params.userId
        UserDestination.update({ confirmed:true }, {where : {UserId:id}})
        .then(data=>{
            
        })
        User.findByPk(id, { include: { model: Destination }, order: [
                    [Destination, { model: UserDestination }, 'date', 'ASC']
                ] })
            .then(data => {
                let totalHarga = 0
                for (let i = 0; i < data.Destinations.length; i++) {
                    totalHarga += data.Destinations[i].price
                }
                    // res.send(data)
                res.render('printreview', { list: listDestination, data: data, id: id, harga: totalHarga, numberToRp })
            })
    }

    static logout(req,res){
        req.session.destroy(function(err) {
            // cannot access session here
            res.redirect('/')
          })
    }
}

module.exports = UserController