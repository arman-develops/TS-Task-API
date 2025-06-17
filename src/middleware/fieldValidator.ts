import { Request, Response, NextFunction } from "express";
import { SendErrorResponse } from "../utils/error.utils";

function validateCreateTask(req:Request, res:Response, next:NextFunction):void { 
    const {taskName, taskDescription} = req.body
    if(!taskDescription || !taskName) {
        SendErrorResponse(
            res,
            "Task name and description are required",
            400
        )
        return
    }
    if(typeof taskName !== 'string' || typeof taskDescription !== 'boolean') {
        SendErrorResponse(
            res,
            "Task name and description must be strings",
            400
        )
        return
    }
    next()
}

function validateTaskID(req:Request, res:Response, next:NextFunction):void {
    const {id} = req.params
    if (isNaN(parseInt(id))) {
        SendErrorResponse(res, 'Invalid task ID', 400);
        return;
    }

    next();
}

export {validateCreateTask, validateTaskID}