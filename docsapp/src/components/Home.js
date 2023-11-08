import React from 'react';
import './Home.css';
import PatientDetails from './PatientDetails';
const Home = ({ registeredUsers }) => {
  return (
    <div>    
    <div className="home-container">
    <h1 className='moving-title' >WELCOME TO OUR CLINIC !!! </h1>
      <PatientDetails />
      <br></br>
      {registeredUsers.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Contact No</th>
            </tr>
          </thead>
          <tbody>
            {registeredUsers.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.contactNo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p></p>
      )}
    </div>
    </div>
  );
};

export default Home;
