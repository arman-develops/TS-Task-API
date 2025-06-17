# Task API

A minimal RESTful API for managing tasks, built with Node.js and Express.

## Endpoints

### GET /tasks
Returns a list of all tasks.

### GET /tasks/:id
Returns a single task by ID.

### POST /tasks
Creates a new task.

**Request Body Example:**
```json
{
  "title": "Finish assignment",
  "description": "Complete the backend part",
  "completed": false
}
````

### PUT /tasks/:id

Updates an existing task by ID.

**Request Body Example:**

```json
{
  "title": "Finish assignment (updated)",
}
```

### DELETE /tasks/\:id

Deletes a task by ID.

## Getting Started

1. Clone the repo:

   ```bash
   git clone https://github.com/arman-develops/TS-Task-API.git
   cd task-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm start
   ```

## Tech Stack

* Node.js
* Express.js
* Prisma + PostgreSQL