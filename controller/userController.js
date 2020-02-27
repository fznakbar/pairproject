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
    res.render()
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
    res.render('signup')
  }

  static register(req,res){

  }

  static loginForm(req,res){
    res.render('login')
  }

  static login(req,res){

  }

  static mainPage(req,res){
    res.render('mainUser')
  }

}

module.exports=UserController