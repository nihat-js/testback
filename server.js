const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const port = process.env.PORT || 1000;
const  {todo } = require('./models/todoModel')
const todoRouter = require('./routers/todoRouter')

app.use(express.json());
app.use(cors())
app.use('/todos', todoRouter)


app.listen(port,function ()  {
  console.log(`Server is running on port ${port}`)
})
mongoose.set('strictQuery', true)
mongoose.connect(process.env.DB_URI)
  .then(() => console.log('Connected!'))
  .catch(() => console.log('Not connected'));