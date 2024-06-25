const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const todosV1Routes = require('./routes/v1/todosRoutes');

app.use(bodyParser.json());

app.use('/v1/todos', todosV1Routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
