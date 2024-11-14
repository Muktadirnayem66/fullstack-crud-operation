import express from "express"
import router from "./src/routes/api.js"
import 'dotenv/config'
import connectDB from "./src/config/mongodb.js"
import cors from 'cors'
import rateLimit from "express-rate-limit"
import helmet from "helmet"
import mongoSanitize from "express-mongo-sanitize"

const app = express()
connectDB()





app.use(express.json())
app.use(cors())


app.use(helmet())
app.use(mongoSanitize())


const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, 
	limit: 100,	
})

app.use(limiter)

//api end points
app.use("/api/v1", router)



export default app