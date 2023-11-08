import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegistrationForm.css';
const RegistrationForm = ({ onRegistration }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [address, setAddress] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [date, setDate] = useState('');
  const [bloodPressure, setBloodPressure] = useState('');
  const [historyOfMedicine, setHistoryOfMedicine] = useState('');
  const [nextvisit, setNextvisit] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      age,
      gender,
      weight,
      address,
      contactNo,
      date,
      bloodPressure,
      historyOfMedicine,
      nextvisit,
      
    };
    onRegistration(formData);

    // Clear the form after submission
    setName('');
    setAge('');
    setGender('');
    setWeight('');
    setAddress('');
    setContactNo('');
    setDate('');
    setBloodPressure('');
    setHistoryOfMedicine('');
    setNextvisit('');

    // Send the form data to the backend server
    fetch('http://localhost:3001/api/doctor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          // Reset form fields

          // Navigate to the Home page
          navigate('/');
        }
      });
  };

  return (
    <div className="registration-form">
      <form onSubmit={handleSubmit}>
        <h2>Enter Patients Data</h2>
        <div className="form-grid">         
          <label htmlFor="name">Name:</label>         
          <input
          required="required"
            type="text"
            id="name"
            placeholder="Name"
            autoComplete="off"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-grid">
          <label htmlFor="age">Age:</label>
          <input
          required="required"
            type="text"
            id="age"
            placeholder="Age"
            autoComplete="off"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="form-grid">
          <label htmlFor="gender">Gender:</label>
          <input
          required="required"
            type="text"
            id="gender"
            placeholder="Gender"
            autoComplete="off"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        <div className="form-grid">
          <label htmlFor="weight">Weight:</label>
          <input
          required="required"
            type="text"
            id="weight"
            placeholder="Weight"
            autoComplete="off"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="form-grid">
          <label htmlFor="address">Address:</label>
          <input
          required="required"
            type="text"
            id="address"
            placeholder="Address"
            autoComplete="off"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-grid">
          <label htmlFor="contactNo">Contact No:</label>
          <input
          required="required"
            type="text"
            id="contactNo"
            placeholder="Contact No"
            autoComplete="off"
            value={contactNo}
            onChange={(e) => setContactNo(e.target.value)}
          />
        </div>
        <div className="form-grid">
          <label htmlFor="date" >Date:</label>
          <input 
          required="required"
          style={{width:"180px"}}
            type="date"
            id="date"
            autoComplete="off"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="form-grid">
          <label htmlFor="bloodPressure">Blood Pressure:</label>
          <input
            type="text"
            id="bloodPressure"
            placeholder="Blood Pressure"
            autoComplete="off"
            value={bloodPressure}
            onChange={(e) => setBloodPressure(e.target.value)}
          />
        </div>
        <div className="form-grid">
          <label htmlFor="historyOfMedicine">Previous Prescreption:</label>
          <input
          required="required"
            type="text"
            id="historyOfMedicine"
            placeholder="Previous Prescreption"
            autoComplete="off"
            value={historyOfMedicine}
            onChange={(e) => setHistoryOfMedicine(e.target.value)}
          />
        </div>
        <div className="form-grid" style={{marginLeft:"30px"}}>
          <label htmlFor="nextvisit">Next Visit:</label>
          <input
          required="required"
            type="date"
            id="nextvisit"
            placeholder="Next Visit"
            autoComplete="off"
            value={nextvisit}
            onChange={(e) => setNextvisit(e.target.value)}
          />
        </div>
          <button type="submit" className="btn btn-success" style={{marginLeft:"40%",marginTop:"20px",color:"black"}} >Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
