import express from "express";
import ejs from "ejs";
import {dirname} from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

 
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

let tasks = [];
app.get("/",(req,res)=>{
    res.render("index1.ejs",{tasks});
});

app.get("/work", (req, res) => {
  res.render("work.ejs");
});


app.post("/submit",(req,res)=>{
  const task = {
    description:req.body.task,
    completed:false,};
  tasks.push(task);
  console.log(task);
  res.redirect("/");
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
