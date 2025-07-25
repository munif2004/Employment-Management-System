import axios from 'axios';

import { useState,useEffect } from 'react';
import CrudEMP from './CrudEmp';
export const SettingPage = () => {
    let [option,setOption] = useState("");
    let [empDeatail,setEmp] = useState([]);
    
    
    console.log(option);
    
    
    
    
    
    useEffect(()=>{
    
    
        axios.post("http://localhost:8000/getemp",{option:option})
        .then((res)=>{
            setEmp(res.data);
            console.log(res.data);
            
    
        })
        .catch((e)=>{
            alert("Error")
        })
    },[option])
    
    
    
    
    
    
      return (
        <div>
    
            <div>
    
            <select
      name="department"
      id="slct"
      onChange={(e) => { setOption(e.target.value) }}
      style={{
        padding: "10px 15px",
        fontSize: "16px",
        borderRadius: "6px",
        border: "1px solid #ccc",
        backgroundColor: "#fff",
        color: "#333",
        cursor: "pointer",
        outline: "none",
        transition: "all 0.3s ease",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        width: "100%",
        maxWidth: "300px",
        appearance: "none",
        backgroundImage: "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 10px center",
        backgroundSize: "20px"
      }}
    >
      <option value="IT">IT</option>
      <option value="Human Resources">HR</option>
      <option value="Engineering">Engineering</option>
      <option value="Marketing">Marketing</option>
      <option value="Finance">Finance</option>
      <option value="Sales">Sales</option>
      <option value="Operations">Operations</option>
    </select>
    
            </div>
    
    
    
    
    
            {empDeatail.map((emp)=>{
                return(
    
                    
           <CrudEMP employee={emp}/>
    
                )
            })}
    
    
    
            
    
    
    
    
        </div>
      )
    
}
