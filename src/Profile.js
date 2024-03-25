import './App.css';
import React from 'react';

function Profile(props) {
  return (
    <div className="Profile">
      <h1>Profile</h1>
      <p>First Name: {props.formData.firstName}</p>
      <p>Last Name: {props.formData.lastName}</p>
      <p>Email: {props.formData.email}</p>
      <p>Favorite Season: {props.formData.season}</p>

      <a href='./dashboard'>Go to Dashboard</a>
    </div>
  );
}

export default Profile;
