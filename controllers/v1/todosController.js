const RESP_HTTP_STATUS = {
    ok: 200,
    created: 201,
    not_found: 404,
}

const TodoStore = []

const getAllTodos = (req, res) => {
    res.status(RESP_HTTP_STATUS.ok).json(TodoStore);
};

const createTodo = (req, res) => {
    const now = new Date()
    const newTodo = {
        id: now.getTime(),
        task: req.body.task,
        created_at: now,
        completed: false
    };
    TodoStore.push(newTodo);
    res.status(RESP_HTTP_STATUS.created).json(newTodo);
};

const updateTodoStatus = (req, res) => {
    const todo = TodoStore.find(ele => ele.id === parseInt(req.params.id));
    if (!todo) {
        return res.status(RESP_HTTP_STATUS.not_found).json({ message: 'Todo not found' });
    }
    todo.completed = req.body.completed;
    res.status(RESP_HTTP_STATUS.ok).json(todo);
};

const updateTodoTask = (req, res) => {
    const todo = TodoStore.find(ele => ele.id === parseInt(req.params.id));
    if (!todo) {
        return res.status(RESP_HTTP_STATUS.not_found).json({ message: 'Todo not found' });
    }
    todo.task = req.body.task;
    res.status(RESP_HTTP_STATUS.ok).json(todo);
};

const deleteTodoById = (req, res) => {
    const todoIndex = TodoStore.findIndex(ele => ele.id === parseInt(req.params.id));
    if (todoIndex === -1) {
        return res.status(RESP_HTTP_STATUS.not_found).json({ message: 'Todo not found' });
    }
    TodoStore.splice(todoIndex, 1);
    res.status(RESP_HTTP_STATUS.ok).end();
};

module.exports = {
    getAllTodos,
    createTodo,
    updateTodoStatus,
    updateTodoTask,
    deleteTodoById
};
