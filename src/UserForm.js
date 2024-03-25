import './App.css';
import React, { useState } from 'react';

export default function UserForm(props) {
  const { doSubmit } = props;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    season: 'spring'
  })

  let firstNameRegEx = /^[a-zA-Z]+\s*[a-zA-Z]*$/;
  let lastNameRegEx = /^[a-zA-Z]+['-]*[a-zA-Z]*$/;
  let emailRegEx = /^[a-zA-Z0-9.-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,6}$/;
  //https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
  let passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_#])[A-Za-z\d@$!%*?&_#]{8,}$/;

  function handleSubmit(e) {
    e.preventDefault();

    doSubmit(validate(), formData);
  }

  function validate() {
  
    if(firstNameRegEx.test(formData['firstName']) &&
      lastNameRegEx.test(formData['lastName']) &&
      emailRegEx.test(formData['email']) &&
      passwordRegEx.test(formData['password'])) {
        return true;
    } else {
        return false;
    }
  }

  return (
    // Form taken and modified from L8 activity
    <form className="registration" id="register" onSubmit={handleSubmit}>
      <h3>Registration Form</h3>

      <label htmlFor="firstName">First Name: </label>
      <input type="text" name="firstName" id="firstName" tabIndex="1" value={formData['firstName']} onChange={e => setFormData(prevState => ({...prevState, 'firstName': e.target.value}))}/>
      <span className="format">* Letters only (non-case-sensitive)</span>
      <div className='invalid'>{formData['firstName'] !== '' && !firstNameRegEx.test(formData['firstName']) && 'Invalid First Name'}</div>
      

      <label htmlFor="lastName">Last Name: </label>
      <input type="text" name="lastName" id="lastName" tabIndex="2" value={formData['lastName']} onChange={e => setFormData(prevState => ({...prevState, 'lastName': e.target.value}))}/>
      <span className="format">* Letters only (non-case-sensitive), can include - or '</span>
      <div className='invalid'>{formData['lastName'] !== '' && !lastNameRegEx.test(formData['lastName']) && 'Invalid last Name'}</div>

      <label htmlFor="email">Email: </label>
      <input type="email" name="email" id="email" tabIndex="3" value={formData['email']} onChange={e => setFormData(prevState => ({...prevState, 'email': e.target.value}))}/>
      <span className="format">* Must follow the traditional email format</span>
      <div className='invalid'>{formData['email'] !== '' && !emailRegEx.test(formData['email']) && 'Invalid Email'}</div>

      <label htmlFor="password">Password: </label>
      <input type="password" name="password" id="password" tabIndex="4" value={formData['password']} onChange={e => setFormData(prevState => ({...prevState, 'password': e.target.value}))}/>
      <span className="format">* At least 8 characters, include at least one number, one uppercase letter, one lowercase letter, and one special character.</span>
      <div className='invalid'>{formData['password'] !== '' && !passwordRegEx.test(formData['password']) && 'Invalid Password'}</div>

      <div className="selectDiv" id="selectDiv">
          <label htmlFor="seasons">Favorite Season: </label>
          <select htmlFor="seasons" id="seasons" value={formData['season']} onChange={e => setFormData(prevState => ({...prevState, 'season': e.target.value}))}>
              <option value="spring">Spring</option>
              <option value="fall">Fall</option>
              <option value="summer">Summer</option>
              <option value="winter">Winter</option>
          </select>
      </div>

      <button type="submit" tabIndex="5">Submit</button>
    </form>
  );
}
