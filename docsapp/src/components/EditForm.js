import React, { useState, useEffect } from 'react';
import './EditForm.css';

const EditForm = ({ patientData, onSave, onCancel }) => {
  const [formData, setFormData] = useState(patientData);
  const [isUpdated, setIsUpdated] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the updated form data to the backend server
    fetch(`http://localhost:3001/api/doctor/${formData.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          // Handle the successful update
          // console.log(formData.id);
          setIsUpdated(true);
          onSave(formData);
        }
      })
      .catch((error) => {
        console.error('Error updating patient data:', error);
        // console.log(formData.id);
      });
  };

  const handleFormCancel = () => {
    onCancel();
  };

  return (
    <div className="edit-form-container">
      {isUpdated ? (
        <p>Updated successfully!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="name">Name:</label>
                </td>
                <td>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="age">Age:</label>
                </td>
                <td>
                  <input
                    type="text"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="gender">Gender:</label>
                </td>
                <td>
                  <input
                    type="text"
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="address">Address:</label>
                </td>
                <td>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="contactNo">Contact No:</label>
                </td>
                <td>
                  <input
                    type="text"
                    id="contactNo"
                    name="contactNo"
                    value={formData.contactNo}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="bloodPressure">Blood Pressure:</label>
                </td>
                <td>
                  <input
                    type="text"
                    id="bloodPressure"
                    name="bloodPressure"
                    value={formData.bloodPressure}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="historyOfMedicine">History of Medicine:</label>
                </td>
                <td>
                  <textarea
                    id="historyOfMedicine"
                    name="historyOfMedicine"
                    value={formData.historyOfMedicine}
                    onChange={handleInputChange}
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="nextvisit">Next visit:</label>
                </td>
                <td>
                  <input
                    type="varchar"
                    id="nextvisit"
                    name="nextvisit"
                    value={formData.nextvisit}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <button type="submit">Save</button>
                  <button type="button" onClick={handleFormCancel}>
                    Cancel
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      )}
    </div>
  );
};

export default EditForm;
