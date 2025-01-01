import express from 'express'
import authRoutes from './routes/auth.route.js'
import dotenv from 'dotenv'
import { connectDB } from './lib/db.js';

dotenv.config()

const app = express();
const PORT= process.env.PORT || 5000;
app.use(express.json());

app.get("/", (req,res) => {
    res.send("API is running...")
});

app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
    console.log("Server is running on part port: ", PORT)
    connectDB()
})