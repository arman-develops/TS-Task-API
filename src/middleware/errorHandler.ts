import { Request, Response, NextFunction } from "express";
import { TaskAPIResponse } from "../types/response.types";

function errorHandler(error: Error, req: Request, res: Response, next: NextFunction): void {
    let response: TaskAPIResponse = {
        success: false,
        error: "Internal Server Error"
    }
    console.error(error);
    res.status(500).json(response)
    next()
}

export {errorHandler}