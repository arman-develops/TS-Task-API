import express, { Request, Response, json } from 'express'
import dotenv from 'dotenv'
dotenv.config()
import { PrismaClient } from '@prisma/client'

const app = express()
app.use(json())
const prisma = new PrismaClient()



const port = process.env.PORT 
app.listen(port,() => {
    console.log(`Server is running on port ${port}`)
})