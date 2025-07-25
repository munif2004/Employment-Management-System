import mongoose from "mongoose";

let EmpForm = new mongoose.Schema({
    "employeename":{
        type:String
    },
    "age":{
        type:Number
    },
    "salary":{
        type:Number
    },
    "experience":{
        type:String
    },
    "city":{
        type:String
    },
    "department":{
        type:String
    },
    "email":{
        type:String
    }
})

 let addEmp =  mongoose.model("empform",EmpForm);

 export default addEmp;

