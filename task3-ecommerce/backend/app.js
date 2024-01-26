import dotenv from "dotenv";
import express, { urlencoded } from "express";
import { connectPassport } from "./utils/Provider.js";
import session from "express-session";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/errormiddleware.js";
import cors from "cors";
import passport from "passport";

dotenv.config({path:"./config/config.env"});
const app=express();
export default app;

//using middlewares
app.use(session({
    secret:process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie:{
         secure:process.env.NODE_ENV==="development"?false:true,
         httpOnly:process.env.NODE_ENV==="development"?false:true,
         sameSite:process.env.NODE_ENV==="development"?false:"none",
    }
}));
app.use(cookieParser());
app.use(express.json());
app.use(urlencoded({extended:true}));
app.use(cors({
    credentials:true,
    origin:process.env.FRONT_END_URL,
    methods:["GET","POST","PUT","DELETE"],
}));
app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());
app.enable("trust proxy");


connectPassport();

//importing routes

import userRoute from "./routes/user.js"
import orderRoute from "./routes/order.js"
app.use("/api/v1",userRoute);
app.use("/api/v1",orderRoute);

//use errorhandler middleware
app.use(errorMiddleware)