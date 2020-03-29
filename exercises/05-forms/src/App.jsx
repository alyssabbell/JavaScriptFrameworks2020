import React, { useState } from "react";
import "./App.css";
// Import data from "assets/countries.json" and "assets/states.json" here
import States from "./assets/states.json";
import Countries from "./assets/countries.json"

function App(e) {
  const [formValues, setFormValues] = useState({});
  const [submitted, setSubmission] = useState(false);

  const setForm = (e) => {
    //console.log(e.target.name);
    const name = e.target.name;
    const value = e.target.value;
    let form = {
      ...formValues,
      [name] : value
    }
    setFormValues(form)
  };

  function submitFormInfo(event) {
    event.preventDefault();
    setSubmission(true);
  }
  
  return (
    <form className="container mt-4">
      {/* You will need to handle form submission */}
      <div className="form-group">
        <label htmlFor="firstName" className="control-label">
          First Name
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          className="form-control"
          onChange={setForm}
          value={formValues.firstName}
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName" className="control-label">
          Last Name
        </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          className="form-control"
          onChange={setForm}
          value={formValues.lastName}
        />
      </div>
      <div className="form-group">
        <label htmlFor="addressLine1" className="control-label">
          Address Line 1
        </label>
        <input
          id="addressLine1"
          name="addressLine1"
          type="text"
          className="form-control"
          onChange={setForm}
          value={formValues.addressLine1}
        />
        <p className="help-block text-muted">
          Street Address, P.O. Box, Company Name, C/O
        </p>
      </div>

      <div className="form-group">
        <label htmlFor="city" className="control-label">
          City / Town
        </label>
        <input 
          id="city" 
          name="city" 
          type="text" 
          className="form-control" 
          onChange={setForm}
          value={formValues.city} />
      </div>
      <div className="form-group">
        <label htmlFor="state" className="control-label">
          State / Province / Region
        </label>
        {/* Loop through the states you imported here */}
        <select 
          id="state" 
          name="state" 
          className="form-control"
          onChange={setForm}
          value={formValues.state}>
        {
          States.map(state => {
            return (<option value={state} key={state}>{state}</option>);
          })
        
        }
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="postalCode" className="control-label">
          Zip / Postal Code
        </label>
        <input
          id="postalCode"
          name="postalCode"
          type="text"
          className="form-control"
          onChange={setForm}
          value={formValues.postalCode}
        />
      </div>

      <div className="form-group">
        <label htmlFor="country" className="control-label">
          Country
        </label>
        {/* Loop through the countries you imported here */}
        <select 
          id="country" 
          name="country" 
          className="form-control"
          onChange={setForm}
          value={formValues.country}>
        {
          Countries.map(country => {
            return <option value={ country } key={ country }>{ country }</option>
          })
        }
        </select>
      </div>
      <button 
        type="submit" 
        className="btn btn-primary" 
        onClick={submitFormInfo}>
        Submit
      </button>

      {/*
       * Find a way to only display this once the form has been submitted.
       * Hint: You will need to change "false" below with something else
       */}
      {submitted && (
        <div className="card card-body bg-light mt-4 mb-4">
          Results:
          <ul className="list-unstyled mb-0">
            {/* Add <li></li> tags here contained form input*/}
            { 
              Object.entries(formValues).map (([ key, value ], index ) => {
              return <li key={index}>{ value }</li>
              })
            }
          </ul>
        </div>
         
      )}
    </form>
  );
}

export default App;
