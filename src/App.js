import './App.css';
import React, { useState } from 'react';
import Profile from './Profile.js';
import UserForm from './UserForm.js';


export default function App() {

  const [formData, setFormData] = useState(null);
  const [isFormValid, setIsFormValid] = useState(false);

  function formSubmit(isValid, data){
    
    if(isValid){
      console.log("gh");
      setFormData(data);
      setIsFormValid(true);
    }
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Lab 7 - Maguire Richard</p>
        <div className="content">
          {isFormValid ? <Profile formData={formData}/> : <UserForm doSubmit={formSubmit}/>}
        </div>
      </header>
    </div>
    
  );
}
