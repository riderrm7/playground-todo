const express = require('express');
const router = express.Router();
const todosController = require('../../controllers/v1/todosController');

router.get('/', todosController.getAllTodos);
router.post('/', todosController.createTodo);
router.put('/:id', todosController.updateTodoTask);
router.put('/:id/status', todosController.updateTodoStatus);
router.delete('/:id', todosController.deleteTodoById);

module.exports = router;
