import express from "express";
import schoolRouter from "./routes/schoolRoutes.js";

const app = express();

app.use(express.json());

app.use("/api/v1",schoolRouter);

app.use((req,res) => {
    console.log(`Invalid Request came at Url : ${req.url} of Type : ${req.method}, Req : ${req.body}`);
    res.status(404).json({ message:"Resource Not Found" });
});

app.use((err,req,res) => {
    console.log("Unhandled Error Occured : ",err);
    res.status(500).json({ message:"Unhandled Error Occured" });
});

export default app;