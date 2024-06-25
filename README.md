# To-Do List API (playground-todo)

This project is a RESTful API for managing a To-Do List.

## Features

- **Get all to-dos**: Retrieve the list of all to-do items.
- **Create a new to-do**: Add a new task to the to-do list.
- **Update a to-do**: Update the status (completed/not completed).
- **Delete a to-do**: Remove a to-do item from the list.
- **Versioning**: Supports versioning

### `v1` Endpoints

**Postman Collection: [Todo List](https://www.postman.com/winter-desert-355385/workspace/publicworkspaces/collection/4321151-8f81709c-1935-40e8-aa76-d30735613151?action=share&creator=4321151)**

#### Get all to-dos

- **URL**: `/v1/todos`
- **Method**: `GET`
- **Description**: Retrieve all to-do items.

#### Create a new task
- **URL**: `/v1/todos`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "task": "your new task"
  }
  ```

#### Update a task by `id`
- **URL**: `/v1/todos/{id}`
- **Method**: `PUT`
- **Body**:
  ```json
  {
    "task": "change your task here"
  }
  ```

#### Update a status by `id`
- **URL**: `/v1/todos/{id}/status`
- **Method**: `PUT`
- **Body**:
  ```json
  {
    "completed": true
  }
  ```

#### Delete item by `id`
- **URL**: `/v1/todos/{id}`
- **Method**: `DELETE`
