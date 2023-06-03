import path from "path";
import express from "express";
import cors from "cors";
import morgan from 'morgan';
require("dotenv").config({
  path: ".env"
});


const app = express();

//connect to mongodb
const { connectToMongoose } = require("./config/db");

//middlewares
//express json parser middleware
app.use(express.json());

app.use(morgan('tiny'));

app.use(cors());