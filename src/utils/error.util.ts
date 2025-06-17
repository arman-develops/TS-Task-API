import  {Response } from 'express'
import { TaskAPIResponse } from '../types/response.types'

function SendErrorResponse(res: Response, message: string, code: number=500):void {
    res.status(400).json({
        success: false,
        message,
    })
}

export {SendErrorResponse}