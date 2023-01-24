const  todoModel    = require  ('../models/todoModel' ) 

async function get (req, res)  {
  const result = await todoModel.find({})
  if (!result) {
    res.sendStatus(403).json({message : 'Not Found'})
    return false
  }
   res.json(result)
}

async function getById (req, res)  {
  const result = await todoModel.findById(req.params.id).sort({_id : -1})
  if (!result) {
    res.sendStatus(403).json({message : 'Not Found'})
    return false
  }
   res.json(result)
}

async function post (req, res)  {
  if (!req.body.todo || !req.body.completed || !req.body.userId){
    res.sendStatus(403).json({message : 'Not Found'})
    return false
  }
  const TodoModel = await todoModel.create({
    todoModel : req.body.todoModel,
    completed : req.body.completed,
    userId : req.body.userId
  })
  console.log('ee')
  let result = await TodoModel.save()
  if (!result) {
    res.sendStatus(403).json({message : 'Not Found'})
    return false
  }
    res.json(result)
}

async function deleteById (req, res)  {
  if (!req.body._id ){
    return false
  }
  const result = await todoModel.deleteOne({_id : req.body._id})
  if (!result) {
    res.sendStatus(403).json({message : 'Not Found'})
    return false
  }
   res.json(result)
}


module.exports = {
  get,
  getById,
  post,
  deleteById
}
