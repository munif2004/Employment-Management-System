import React from 'react'
import EmployeeForm from './components/EmployeeForm';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Home } from './Pages/Home';
import Navbar from './components/Navbar';
import { Department } from './Pages/Department';
import { Settings } from './Pages/Settings';

 const App = () => {
  return (

<BrowserRouter>

<Navbar />

<Routes>

  <Route path='/' element={<Home />}></Route>
  <Route path='/addEmp' element={<EmployeeForm />} />
  <Route path="/departments" element={<Department />}/>
  <Route path='/settings' element={<Settings />}></Route>
</Routes>

</BrowserRouter>

    

    
    

  )
}



export default App;