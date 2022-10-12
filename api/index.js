import express from "express";
import postRoutes from './routes/posts.js'
import usersRoutes from './routes/users.js'
import authRoutes from './routes/auth.js'

const app = express();

app.use(express.json());
app.use('/api/posts', postRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/users', usersRoutes)

app.listen(8800, ()=>{
    console.log("Connected to backend!")
});