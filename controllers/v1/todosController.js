const fs = require('fs');
const path = require('path');
const todosFilePath = path.join(__dirname, '../../data/todos-v1.json');

const RESP_HTTP_STATUS = {
    ok: 200,
    created: 201,
    not_found: 404,
}

const getAllTodos = (req, res) => {
    const todos = JSON.parse(fs.readFileSync(todosFilePath, 'utf8'));
    res.status(RESP_HTTP_STATUS.ok).json(todos);
};

const createTodo = (req, res) => {
    const todos = JSON.parse(fs.readFileSync(todosFilePath, 'utf8'));
    const now = new Date()
    const newTodo = {
        id: now.getTime(),
        task: req.body.task,
        created_at: now,
        completed: false
    };
    todos.push(newTodo);
    fs.writeFileSync(todosFilePath, JSON.stringify(todos, null, 2), 'utf8');
    res.status(RESP_HTTP_STATUS.created).json(newTodo);
};

const updateTodoStatus = (req, res) => {
    const todos = JSON.parse(fs.readFileSync(todosFilePath, 'utf8'));
    const todo = todos.find(ele => ele.id === parseInt(req.params.id));
    if (!todo) {
        return res.status(RESP_HTTP_STATUS.not_found).json({ message: 'Todo not found' });
    }
    todo.completed = req.body.completed;
    fs.writeFileSync(todosFilePath, JSON.stringify(todos, null, 2), 'utf8');
    res.status(RESP_HTTP_STATUS.ok).json(todo);
};

const updateTodoTask = (req, res) => {
    const todos = JSON.parse(fs.readFileSync(todosFilePath, 'utf8'));
    const todo = todos.find(ele => ele.id === parseInt(req.params.id));
    if (!todo) {
        return res.status(RESP_HTTP_STATUS.not_found).json({ message: 'Todo not found' });
    }
    todo.task = req.body.task;
    fs.writeFileSync(todosFilePath, JSON.stringify(todos, null, 2), 'utf8');
    res.status(RESP_HTTP_STATUS.ok).json(todo);
};

const deleteTodoById = (req, res) => {
    let todos = JSON.parse(fs.readFileSync(todosFilePath, 'utf8'));
    const todoIndex = todos.findIndex(ele => ele.id === parseInt(req.params.id));
    if (todoIndex === -1) {
        return res.status(RESP_HTTP_STATUS.not_found).json({ message: 'Todo not found' });
    }
    todos.splice(todoIndex, 1);
    fs.writeFileSync(todosFilePath, JSON.stringify(todos, null, 2), 'utf8');
    res.status(RESP_HTTP_STATUS.ok).end();
};

module.exports = {
    getAllTodos,
    createTodo,
    updateTodoStatus,
    updateTodoTask,
    deleteTodoById
};
