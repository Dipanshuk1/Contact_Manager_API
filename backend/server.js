import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";

const app=express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.use("/api/contacts", contactRoutes);

// mongoose.connect(process.env.MONGO_URI)
// .then(()=>{
//     console.log("connected to DB");
// })
// .catch((err)=>{
//     console.log(err.message);
// })

connectDB();

app.get("/",(req,res)=>{
    res.send("This is root page");
})

const PORT=process.env.PORT || 4000;
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})

