const express = require('express')
const router =  express.Router()

const todoController = require('../controllers/todoController')





router.get('/', todoController.get )
router.get('/:id', todoController.getById )


router.post('/', todoController.post )
router.delete('/', todoController.deleteById )



module.exports  = router  