import express from 'express';
import mongoose from 'mongoose';



//app config



//create instance
const app = express()
const port = 9000;

//middlewares


// DB config


//  api endpoints

app.get("/", (req, res) => res.status(200).send("hello world"));

//  listen
app.listen(port, () => console.log(`LISTENING ON PORT:  ${port}`));