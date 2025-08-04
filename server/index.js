import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import addEmp from "./model/Employye.model.js";

import dotenv from "dotenv";



dotenv.config();
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log("Error to Connect", err));










let app = express();

app.use(express.json())
app.use(cors())
// ✅ Use Render's PORT or default to 8000 (for local)
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Routes



app.post("/addemp",(req,res)=>{

    console.log(req.body);

    addEmp.create({employeename:req.body.employeeName,age:req.body.age,salary:req.body.salary,experience:req.body.experience,city:req.body.city,department:req.body.department,email:req.body.email})
    .then(()=>{
        res.send("Employee Added ")
    })
    .catch((e)=>{
        res.send("Error to add Emp")
    })


})


app.post("/getemp",(req,res)=>{

    addEmp.find({department : req.body.option})
    .then((d)=>{
        res.send(d);
    })
    .catch((e)=>{
        res.send(e);
    })


   

})


app.delete("/del/:id",(req,res)=>{


let {id} = req.params

addEmp.findByIdAndDelete({_id:id})
.then(()=>{

    res.send("Deleted")

})
.catch(()=>{
    res.send("Error to delete")
})

console.log(id);



    
   
})

app.put("/update/:id", (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
  
    console.log("Received update for:", id);
    console.log(updatedData);
  
    addEmp.findByIdAndUpdate(id, updatedData, { new: true })
      .then((updatedDoc) => {
        res.send({ message: "Updated", data: updatedDoc });
      })
      .catch((error) => {
        console.error("Update failed:", error);
        res.send({ message: "Error updating employee" });
      });
  });
  






app.listen(8000,()=>{

    console.log("http://localhost:8000");
    
})


