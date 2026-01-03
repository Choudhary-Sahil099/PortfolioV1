import express from "express";
import cors from "cors";
import path from 'path';
import { fileURLToPath } from "url";

const app = express();
app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/api/profile-image", (req,res) =>{
    res.sendFile(path.join(__dirname,"private","profile.png"));
});

app.listen(5000, () =>{
    console.log("backend is running");
})