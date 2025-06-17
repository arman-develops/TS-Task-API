import express, { Request, Response, json } from 'express'
import taskRouter from './routes/tasks.route'
import dotenv from 'dotenv'
import { errorHandler } from './middleware/errorHandler'
import { SendSuccessResponse } from './utils/success.utils'
dotenv.config()

const app = express()
app.use(json())
app.get("/", (req: Request, res: Response) => {
    SendSuccessResponse(res, {message: "Welcome to my TypeScript Task API"}, "index route reached")
})
app.use("/api", taskRouter)
app.use(errorHandler)
const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})