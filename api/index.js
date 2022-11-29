import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import cookieParser from "cookie-parser";
import multer from "multer";
import cors from 'cors'
import session from 'express-session';

const isDev = process.env.NODE_ENV !== "production";
const app = express();

app.set("trust proxy", 1);
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: isDev ? true : process.env.FE_URL,
    credentials: true,
  })
);

 app.use(
   session({
     resave: false,
     saveUninitialized: false,
     secret: "session",
     cookie: {
       maxAge: 1000 * 60 * 60,
       sameSite: process.env.NODE_ENV === "development" ? true : "none",
       secure: process.env.NODE_ENV === "development" ? false : true,
     },
   })
 )

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

// default error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(8800, () => {
  console.log("Connected!");
});
