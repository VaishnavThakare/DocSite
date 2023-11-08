import React, { useState, useEffect } from 'react';
import EditForm from './EditForm';
import './PatientDetails.css';

const PatientDetails = () => {
  const [searchValue, setSearchValue] = useState('');
  const [patientData, setPatientData] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);


  useEffect(() => {
    if (patientData) {
      // Fetch treatments for the patient when patientData is available
      fetch(`http://localhost:3001/api/doctor/${patientData.id}`)
        .then((response) => response.json())
        .then((data) => {
        })
        .catch((error) => {
          console.error('Error fetching doctor:', error);
        });
    }
  }, [patientData]);

  
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    // Send a GET request to fetch patient data based on the search value
    fetch(`http://localhost:3001/api/doctor?name=${searchValue}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setPatientData(data[0]);
        } else {
          setPatientData(null);
          console.log('Patient not found');
        }
      });
  };



  const handleEdit = () => {
    setIsEditMode(true);
  };

  
  const handleDeletePatient = () => {
 
    const confirmDelete = window.confirm('Are you sure you want to delete this patient?');
    if (confirmDelete) {
      // Handle the delete action when "Yes" is clicked
      console.log('Patient deleted');
      // You can make your DELETE request here
      fetch(`http://localhost:3001/api/doctor/${patientData.id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          // Clear the patient data and search value
          setPatientData(null);
          setSearchValue('');
        }
      })
      .catch((error) => {
        console.error('Error deleting patient:', error);
      });
    } else {
    }
  };
  const handleSavePatient = (updatedPatientData) => {
    console.log('Save patient:', updatedPatientData);
    setPatientData(updatedPatientData);
    setIsEditMode(false);
    
  };
  const handleCancelEdit = () => {
    setIsEditMode(false);
  };
  
  return (
    <div>
      {isEditMode ? (
        <EditForm patientData={patientData} onSave={handleSavePatient} onCancel={handleCancelEdit} />
      ) : (
        <div>
          {patientData && (
            <div >
              <h1 style={{marginLeft:"270px",display:"flex",textDecoration: "underline"}} >Patient Details</h1>
              <table >
                <tbody>
                  <tr>
                    <td>Name:</td>
                    <td>{patientData.name}</td>
                  </tr>
                  <tr>
                    <td>Age:</td>
                    <td>{patientData.age}</td>
                  </tr>
                  <tr>
                    <td>Gender:</td>
                    <td>{patientData.gender}</td>
                  </tr>
                  <tr>
                    <td>Weight:</td>
                    <td>{patientData.weight}</td>
                  </tr>
                  <tr>
                    <td>Address:</td>
                    <td>{patientData.address}</td>
                  </tr>
                  <tr>
                    <td>Contact No:</td>
                    <td>{patientData.contactNo}</td>
                  </tr>
                  <tr>
                    <td>Date:</td>
                    <td>{patientData.date}</td>
                  </tr>
                  <tr>
                    <td>Blood Pressure:</td>
                    <td>{patientData.bloodPressure}</td>
                  </tr>
                  <tr>
                    <td>History of Medicine:</td>
                    <td>{patientData.historyOfMedicine}</td>
                  </tr>
                  <tr>
                    <td>Next Visit:</td>
                    <td>{patientData.nextvisit}</td>
                  </tr>
                </tbody>
              </table>
              <button style={{marginLeft:"18.5%",marginTop:"33px",height:"37px",width:"70px"}} onClick={handleEdit} >Edit</button>
              <button style={{marginLeft:"30px",marginTop:"-8px"}} onClick={handleDeletePatient} type="button" className="btn btn-danger" >Delete</button>
            </div>
          )}
          <form className="search-form" onSubmit={handleSearchSubmit}>
                <input
                type="text"
                value={searchValue}
                onChange={handleSearchChange}
                placeholder="Patient name"
                  />
                  <button type="submit">Search</button>
              </form>
          
        </div>
      )}
    </div>
  );
};

export default PatientDetails;
