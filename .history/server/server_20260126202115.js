import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
const app= express();
const port= process.env.PORT || 5000;
app.use(express.json());
app.use(cors({credentials:true}));
app.use(cookieParser());
app.get()
app.listen(port,()=>console.log(`Server started and runningon PORT ${port}`))