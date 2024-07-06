import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cookieParser from "cookie-parser"
import path from "path"
import schoolRouter from "./routes/schoolRoutes.js"
import adminRouter from "./routes/adminRoute.js"
import userRoute from "./routes/userRoute.js"
import classRoute from "./routes/classRoute.js"

dotenv.config()

//connecting to the database
mongoose.connect(process.env.MONGO).then(() => {
    console.log("its connected to the database");
}).catch((err) => {
    console.log("an error occured in connecting to the database")
})

const __dirname = path.resolve()


const app = express();


app.use(cors())
app.use(express.json())
app.use(cookieParser());

app.listen(4000, () => {
    console.log("server is running")
})

app.use('/api', schoolRouter);
app.use('/api', adminRouter );
app.use('/api', userRoute);
app.use("/api", classRoute)

app.use(express.static(path.join(__dirname, '/client/dist')))


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
})


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
})

