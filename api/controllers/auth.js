import { db } from '../db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'; 

export const register = (req, res) => {
    // CHECK EXISTING USER
    const q = "SELECT * FROM users WHERE email = ? OR username = ?"

    db.query(q, [req.body.email, req.body.username], (err, data) =>{
        if (err) return res.json(err);
        if (data.length) return res.status(409).json("User already exists!");

        // HASH PASSWORD AND CREATE USER
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO users (`username`, `email`, `password`) VALUES (?)";
        const values = [req.body.username, req.body.email, hash];

        db.query(q, [values], (err, data) => {
            if (err) return res.json(err);
            return res.status(200).json("User has been created.")
        })

    })

}

export const login = (req, res) => {
    // CHECK USER
    const q = "SELECT * FROM users WHERE username = ?"
    db.query([req.body.username], (err, data) => {
        if (err) return res.json(err)
        if (data.length === 0) return res.status(404).json("User not found!")
    })

    // CHECK PASSWORD
    const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password)
    if (!isPasswordCorrect) return res.status(400).json("username or password incorrect")   

    const token = jwt.sign({id: data[0].id}, "jwtkey")

    const {password, ...other} = data[0]

    res.cookie("access_token", token, {
        httpOnly: true
    }).status(200).json(other)
}

export const logout = (req, res) => {

}