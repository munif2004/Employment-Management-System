import React, { useState } from 'react';
import "../components/EmployeeForm.css";
import axios from "axios"

const EmployeeForm = () => {
  // Individual state variables for each form field
  const [employeeName, setEmployeeName] = useState('');
  const [age, setAge] = useState('');
  const [salary, setSalary] = useState('');
  const [experience, setExperience] = useState('');
  const [city, setCity] = useState('');
  const [department, setDepartment] = useState('');
  const [email, setEmail] = useState('');

  const departments = [
    'Engineering',
    'Human Resources',
    'Marketing',
    'Finance',
    'Sales',
    'Operations',
    'IT',
    'Customer Support'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Collect all data into an object
    const formData = {
      employeeName,
      age,
      salary,
      experience,
      city,
      department,
      email
    };

    // Here you would typically send the data to an API
    console.log('Form submitted:', formData);
axios.post(`${import.meta.env.VITE_API_BASE_URL}/addemp`,formData);
    alert('Employee data submitted successfully!');
    
    // Reset all form fields
    setEmployeeName('');
    setAge('');
    setSalary('');
    setExperience('');
    setCity('');
    setDepartment('');
    setEmail('');
  };

  return (
    <div className="employee-form-container">
      <h2>Employee Information Form</h2>
      <form onSubmit={handleSubmit} className="employee-form">
        <div className="form-group">
          <label htmlFor="employeeName">Employee Name:</label>
          <input
            type="text"
            id="employeeName"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            min="18"
            max="70"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="salary">Salary ($):</label>
          <input
            type="number"
            id="salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            min="0"
            step="1000"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="experience">Experience (years):</label>
          <input
            type="number"
            id="experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            min="0"
            max="50"
            step="0.5"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="department">Department:</label>
          <select
            id="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
          >
            <option value="">Select Department</option>
            {departments.map(dept => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default EmployeeForm;