import { Router } from "express"
import {deleteTask, updateTask, getAllTasks, getSingleTask, createNewTask} from '../controllers/task.controller'

const router = Router()
router.get("/tasks", getAllTasks)
router.get("/tasks/:id", getSingleTask)
router.post("/tasks", createNewTask)
router.put("/tasks/:id", updateTask)
router.delete("/tasks/:id", deleteTask)

export default router