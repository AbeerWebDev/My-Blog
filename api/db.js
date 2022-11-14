 import mysql from "mysql";
 import * as dotenv from 'dotenv'

dotenv.config()

//  export const db = mysql.createConnection({
//     host: 'localhost',
//     user: "root",
//     password: process.env.DB_KEY,
//     database: "blog"
//  })



 export const db = mysql.createConnection({
    host: process.env.HOST ?? 'localhost',
    user: process.env.USER ?? "root",
    password: process.env.DB_KEY,
    database: process.env.DATABASE ?? "blog"
 })