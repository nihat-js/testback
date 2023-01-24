const mongoose = require('mongoose');
const { Schema } = require('mongoose')


const todoSchema = new Schema({
  todo: {type: String,   },
  completed: {type: String},
  userId : {type: String  }
})

const todo = mongoose.model('todos',todoSchema)

module.exports =  todo