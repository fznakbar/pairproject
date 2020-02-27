const { User,Destination,UserDestination } = require('../models/index.js')

class UserController{

  static view(req,res){
    User.findAll()
    .then(result =>{
      res.send(result)
    })
    .catch(err=>{
      res.send(err)
    })
  }

  static addForm(req,res){
    res.render('admin')
  }

  static add(req,res){
    let obj = {

    }
    User.create(obj)
    .then(result=>{
      res.send(result)
    })
    .catch(err=>{
      res.send(err)
    })
  }

  static editForm(req,res){
    let params = req.params.id
    User.findOne({where:{id:params}})
    .then(result=>{
      res.send(result)
    })
    .catch(err=>{
      res.send(err)
    })
  }

  static edit(req,res){
    let params = req.params.id
    let obj = {

    }
    User.update(obj,{where:{id:params}})
    .then(result=>{
      res.send(result)
    })
    .catch(err=>{
      res.send(err)
    })
  }

  static delete(req,res){
    let params = req.params.id
    User.destroy({where:{id:params}})
    .then(result=>{
      res.send(result)
    })
    .catch(err=>{
      res.send(err)
    })
  }

  static registerForm(req,res){
    res.render('mainUser')
  }

  static register(req,res){
    let obj = {
      first_name : req.body.firstname,
      last_name : req.body.lastname,
      email : req.body.email,
      role : 'user',
      username : req.body.username,
      password : req.body.password
    }
    User.create(obj)
    .then(result=>{
      let data = 'Congratulation! you can login now!'
      res.redirect('/user/login')
    })
    .catch(err=>{
      res.send(err)
    })

  }

  static loginForm(req,res){
    res.render('login')
  }

  static login(req,res){
    User.findOne({where:{name : req.body.username,
                        password : req.body.password}})
    .then(data=>{
      res.send(data)
      req.session.user = {id : data.id,
                          role : data.role,
                          name : data.name}
    })
    .catch(err=>{
      res.send(err)
    })

  }

  static mainPage(req,res){
    res.render('mainUser')
  }

}

module.exports=UserController