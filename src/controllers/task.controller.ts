import {prisma} from '../config/client.config'
import { Request, Response, json, NextFunction } from 'express';
import { Task } from '@prisma/client'
import { SendSuccessResponse } from '../utils/success.utils'
import { SendErrorResponse } from '../utils/error.utils';

async function getAllTasks (_req:Request, res:Response, next:NextFunction) {
    try {
        const tasks:Task[] = await prisma.task.findMany()
        SendSuccessResponse(res, {tasks}, "Tasks Fetched successfully",200)
    } catch (error) {
        next(error)
    }
}

async function getSingleTask(req:Request, res:Response, next:NextFunction) {
    try {
        const {id} = req.params
        let taskID:number = parseInt(id)
        const task:Task | null = await prisma.task.findUnique({
            where: {
                id: taskID
            },
        })

        if(!task) {
            SendErrorResponse(res, "Task Not Found", 404)
            return
        }

        SendSuccessResponse(res, {task}, "Task Fetched Successfully")
    } catch (error) {
        next(error)
    }
}

async function createNewTask (req:Request, res:Response, next:NextFunction) {
    try {
        const {taskName, taskDescription} = req.body
        const newTask:Task = await prisma.task.create({
            data: {
                title: taskName,
                description: taskDescription
            }
        })
        SendSuccessResponse(res, {newTask}, "Task Created Successfully")
    } catch (error) {
        next(error)
    }
    
}

async function updateTask(req:Request, res:Response, next:NextFunction) {
    try {
        const {id} = req.params
        const taskID = parseInt(id)
        const {updates} = req.body
        const updatedTask:Task = await prisma.task.update({
            where: {
                id: taskID
            },
            data: {
                title: updates.name,
                description: updates.description
            }
        })
        SendSuccessResponse(res, {updatedTask}, "Task Updated Successfully")
    } catch (error) {
        next(error)
    }
}

function deleteTask (req:Request, res:Response, next:NextFunction) {
    try {
        const {id} = req.params
        const taskID = parseInt(id)
        const deletedTask = prisma.task.delete({
            where: {
                id: taskID
            }
        })
        SendSuccessResponse(res,{deletedTask},"Task Deleted Successfully")
    } catch (error) {
        next(error)
    }
}

export {deleteTask, updateTask, getAllTasks, getSingleTask, createNewTask}