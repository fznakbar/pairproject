const { User, Destination, UserDestination } = require('../models/index.js')
const numberToRp = require('../helpers/numberToRp')


class UserController {

    static editDestinationForm(req, res) {
        let params = req.params.adminId
        let params2 = req.params.destinationId
        Destination.findOne({ where: { id: params2 } })
            .then(result => {
                res.render('editDestination', { result: result })
            })
            .catch(err => {
                res.render(err)
            })
    }

    static editDestination(req, res) {
        let params = req.params.adminId
        let params2 = req.params.destinationId
        let obj = {
            name: req.body.name,
            price: Number(req.body.price)
        }
        console.log(obj)
        Destination.update(obj, { where: { id: params2 } })
            .then(result => {
                res.redirect(`/admin/${params}/mainPage`)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static delete(req, res) {
        let params = req.params.id
        User.destroy({ where: { id: params } })
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static loginForm(req, res) {
        res.render('loginAdmin')
    }

    static login(req, res) {
        User.findOne({
                where: {
                    username: req.body.username,
                    password: req.body.password,
                    role: 'admin'
                }
            })
            .then(data => {
                //   res.send(data)
                req.session.user = {id : data.id,
                                    role : data.role,
                                    name : data.name}
                
                res.redirect(`/admin/${data.id}/mainPage`)
            })
            .catch(err => {
                res.redirect('/admins/login')
            })

    }

    static mainPage(req, res) {
        let id = req.params.adminId
        let listDestination = null
        let tmp = null
        UserDestination.findAll({ include: [{ model: Destination }, { model: User }], where: { confirmed: true } })
            .then(data => {
                tmp = data
                Destination.findAll()
                    .then(data2 => {
                        listDestination = data2
                        User.findOne({ where: { id: id } })
                            .then(result => {
                                res.render('admin', { data: result, list: listDestination, order: tmp, numberToRp })
                            })
                    })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static addDestination(req, res) {
        let id = req.params.adminId
        let obj = {
            name: req.body.destination,
            price: Number(req.body.price),
            createdAt: new Date(),
            updatedAt: new Date()
        }

        Destination.create(obj)
            .then(data => {
                res.redirect(`/admin/${id}/mainPage`)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static deleteDestination(req, res) {
        let id = req.params.destinationId
        let adminId = req.params.adminId
        Destination.destroy({ where: { id } })
            .then(() => {
                res.redirect(`/admin/${adminId}/mainPage`)
            })
            .catch(err => {
                res.send(err)
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