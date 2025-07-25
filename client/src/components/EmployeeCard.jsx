import React from 'react';
import '../components/styles/EmployeeCard.css'; // We'll create this CSS file next

const EmployeeCard = ({ employee }) => {
  return (
    <div className="employee-card-fullwidth" id='em'>
      <div className="card-header-fullwidth" style={{background:"purple"}} >
        <div className="header-left">
          <h2>{employee.employeename}</h2>
          <p className="department">{employee.department} Department</p>
        </div>
        <div className="header-right">
          <span className="salary">${employee.salary.toLocaleString()}</span>
          <span className="experience">{employee.experience} years experience</span>
        </div>
      </div>
      
      <div className="card-body-fullwidth">
        <div className="info-grid">
          <div className="info-item">
            <span className="label">Email:</span>
            <span className="value">{employee.email}</span>
          </div>
          
          <div className="info-item">
            <span className="label">Location:</span>
            <span className="value">{employee.city}</span>
          </div>
          
          <div className="info-item">
            <span className="label">Age:</span>
            <span className="value">{employee.age}</span>
          </div>
          
          <div className="info-item">
            <span className="label">Employee ID:</span>
            <span className="value">EMP-{Math.floor(1000 + Math.random() * 9000)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;