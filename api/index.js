import express from "express";
import postRoutes from './routes/posts.js'
import usersRoutes from './routes/users.js'
import authRoutes from './routes/auth.js'
import cookieParser from "cookie-parser";
import multer from 'multer'

const app = express();

app.use(express.json());
app.use(cookieParser());

const upload = multer({ dest: './uploads/' })
app.post('/api/upload', upload.single('file'), function (req, res) {
    res.status(200).json('Image has been uploaded')
})

app.use('/api/posts', postRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/users', usersRoutes)

app.listen(8800, ()=>{
    console.log("Connected to backend!")
});