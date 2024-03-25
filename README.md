<!--- The following README.md sample file was adapted from https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md by Gabriella Mosquera for academic use ---> 



# Lab 7

**[Optional]** If what is being submitted is an individual Lab or Assignment. Otherwise, include a brief one paragraph description about the project.

* *Date Created*: 12 March 2024
* *Last Modification Date*: 25 March 2024
* *Lab URL*: <https://maguirelab6.netlify.app>
* *Git URL*: <https://git.cs.dal.ca/maguirer/csci3172-web-centric/-/tree/main/labs/lab7?ref_type=heads>



## Authors

* [Maguire Richard](Maguire@dal.ca)


## Sources Used

### UserForm.js

*Lines 27-77*

```
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
      <input type="text" name="firstName" id="firstName" tabIndex="1" value={formData['firstName']} onChange={e => setFormData(prevState => ({...prevState, ['firstName']: e.target.value}))}/>
      <span className="format">* Letters only (non-case-sensitive)</span>
      <div className='invalid'>{formData['firstName'] !== '' && !firstNameRegEx.test(formData['firstName']) && 'Invalid First Name'}</div>
      

      <label htmlFor="lastName">Last Name: </label>
      <input type="text" name="lastName" id="lastName" tabIndex="2" value={formData['lastName']} onChange={e => setFormData(prevState => ({...prevState, ['lastName']: e.target.value}))}/>
      <span className="format">* Letters only (non-case-sensitive), can include - or '</span>
      <div className='invalid'>{formData['lastName'] !== '' && !lastNameRegEx.test(formData['lastName']) && 'Invalid last Name'}</div>

      <label htmlFor="email">Email: </label>
      <input type="email" name="email" id="email" tabIndex="3" value={formData['email']} onChange={e => setFormData(prevState => ({...prevState, ['email']: e.target.value}))}/>
      <span className="format">* Must follow the traditional email format</span>
      <div className='invalid'>{formData['email'] !== '' && !emailRegEx.test(formData['email']) && 'Invalid Email'}</div>

      <label htmlFor="password">Password: </label>
      <input type="password" name="password" id="password" tabIndex="4" value={formData['password']} onChange={e => setFormData(prevState => ({...prevState, ['password']: e.target.value}))}/>
      <span className="format">* At least 8 characters, include at least one number, one uppercase letter, one lowercase letter, and one special character.</span>
      <div className='invalid'>{formData['password'] !== '' && !passwordRegEx.test(formData['password']) && 'Invalid Password'}</div>

      <div className="selectDiv" id="selectDiv">
          <label htmlFor="seasons">Favorite Season: </label>
          <select htmlFor="seasons" id="seasons" value={formData['season']} onChange={e => setFormData(prevState => ({...prevState, ['season']: e.target.value}))}>
              <option value="spring">Spring</option>
              <option value="fall">Fall</option>
              <option value="summer">Summer</option>
              <option value="winter">Winter</option>
          </select>
      </div>

      <button type="submit" tabIndex="5">Submit</button>
    </form>
  );
```

The code above was created by adapting the code in [Lecture 9 Activity](https://dal.brightspace.com/d2l/le/content/308886/viewContent/4166257/View) as shown below: 

```
<form class="registration" id="register" onsubmit="validate()">
  <h3>Registration Form</h3>
  <label for="firstName">First Name</label>
  <span class="format">* Letters only (non-case-sensitive)</span>
  <br>
  <input type="text" name="firstName" id="firstName" tabindex="1">
  <br>
  <label for="lastName">Last Name</label>
  <span class="format">* Letters only (non-case-sensitive)</span>
  <br>
  <input type="text" name="lastName" id="lastName" tabindex="2">
  <br>
  <label for="email">Email</label>
  <span class="format">* Must follow the traditional email format</span>
  <br>
  <input type="email" name="email" id="email" tabindex="3">
  <br>
  <label for="password">Password</label>
  <span class="format">* At least 8 characters, include at least one number, one uppercase letter, one lowercase letter, and one special character.</span>
  <br>
  <input type="password" name="password" id="password" tabindex="4">
  <br>
  <button type="submit" tabindex="5">Submit</button>
</form>

function validate() {
    let firstNameRegEx = /^[a-zA-Z]+\s*[a-zA-Z]*$/;
    let lastNameRegEx = /^[a-zA-Z]+['-]*[a-zA-Z]*$/;
    let emailRegEx = /^[a-zA-Z0-9.-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,6}$/;
    //https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
    let passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_#])[A-Za-z\d@$!%*?&_#]{8,}$/;

    let firstNameValue = document.getElementById('firstName').value;
    let lastNameValue = document.getElementById('lastName').value;
    let emailValue = document.getElementById('email').value;
    let passwordValue = document.getElementById('password').value;

    if(!firstNameRegEx.test(firstNameValue)) {
        alert("First name must only use letters");
    } else if (!lastNameRegEx.test(lastNameValue)) {
        alert("Last name must only be letters, and may contain a - or '")
    } else if (!emailRegEx.test(emailValue)) {
        alert("Email must be of the form abc@abc.abc, and the domain must be between 2 and 6 characters (inclusive)")
    } else if (!passwordRegEx.test(passwordValue)) {
        alert("Password must be at least 8 characters, and contain a lowercase letter, uppercase letter, number, and special character")
    } else {
        alert('Thank you for completing our form successfully!');
    }
}
```

- <!---How---> The code in [Lecture 9 Activity](https://dal.brightspace.com/d2l/le/content/308886/viewContent/4166257/View) was implemented by copying the form and validation code into its own component.
- <!---Why---> [Lecture 9 Activity](https://dal.brightspace.com/d2l/le/content/308886/viewContent/4166257/View)'s Code was used to save time creating the entire form and validation code/regex from scratch.
- <!---How---> [Lecture 9 Activity](https://dal.brightspace.com/d2l/le/content/308886/viewContent/4166257/View)'s Function was modified significantly to include state variables, validate in realtime, change how validation worked to return true or false, and the season dropdown was added.
