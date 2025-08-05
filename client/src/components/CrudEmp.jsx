import React, { useState } from 'react';
import './styles/CrudEMP.css';
import axios from 'axios';

const CrudEMP = ({ employee, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedEmployee, setEditedEmployee] = useState({ ...employee });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = () => {
    axios
      .put(`${import.meta.env.VITE_API_BASE_URL}/update/${editedEmployee._id}, editedEmployee`)
      .then((res) => {
        alert('Employee updated successfully!');
        onUpdate(editedEmployee); // Notify parent of the update
        setIsEditing(false);
      })
      .catch((error) => {
     
        console.error(error);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`${import.meta.env.VITE_API_BASE_URL}/del/${id}`)
      .then((res) => {
        alert('Employee removed.');
        onDelete(id); // Notify parent to remove from list
      })
      .catch((e) => {
        alert('Error deleting employee.');
        console.error(e);
      });
  };

  return (
    <div className="employee-card-fullwidth" >
      <div className="card-header-fullwidth" style={{background:"purple"}}> 
        <div className="header-left">
          {isEditing ? (
            <input
              type="text"
              name="employeename"
              value={editedEmployee.employeename}
              onChange={handleChange}
              className="edit-input"
            />
          ) : (
            <h2>{employee.employeename}</h2>
          )}
          {isEditing ? (
            <select
              name="department"
              value={editedEmployee.department}
              onChange={handleChange}
              className="edit-select"
            >
              <option value="IT">IT</option>
              <option value="Human Resources">HR</option>
              <option value="Engineering">Engineering</option>
              <option value="Marketing">Marketing</option>
              <option value="Finance">Finance</option>
              <option value="Sales">Sales</option>
              <option value="Operations">Operations</option>
            </select>
          ) : (
            <p className="department">{employee.department} Department</p>
          )}
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
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={editedEmployee.email}
                onChange={handleChange}
                className="edit-input"
              />
            ) : (
              <span className="value">{employee.email}</span>
            )}
          </div>

          <div className="info-item">
            <span className="label">Location:</span>
            {isEditing ? (
              <input
                type="text"
                name="city"
                value={editedEmployee.city}
                onChange={handleChange}
                className="edit-input"
              />
            ) : (
              <span className="value">{employee.city}</span>
            )}
          </div>

          <div className="info-item">
            <span className="label">Age:</span>
            {isEditing ? (
              <input
                type="number"
                name="age"
                value={editedEmployee.age}
                onChange={handleChange}
                className="edit-input"
              />
            ) : (
              <span className="value">{employee.age}</span>
            )}
          </div>

          <div className="info-item">
            <span className="label">Experience:</span>
            {isEditing ? (
              <input
                type="text"
                name="experience"
                value={editedEmployee.experience}
                onChange={handleChange}
                className="edit-input"
              />
            ) : (
              <span className="value">{employee.experience} years</span>
            )}
          </div>
        </div>

        <div className="action-buttons">
          {isEditing ? (
            <>
              <button onClick={handleUpdate} className="save-btn">
                Save
              </button>
              <button onClick={() => setIsEditing(false)} className="cancel-btn">
                Cancel
              </button>
            </>
          ) : (
            <>
              <button onClick={() => setIsEditing(true)} className="update-btn">
                Update
              </button>
              <button onClick={() => handleDelete(employee._id)} className="delete-btn">
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CrudEMP;
