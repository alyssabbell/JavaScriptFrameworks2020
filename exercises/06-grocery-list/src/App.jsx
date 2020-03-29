import React, { useState } from "react";
import "./App.css";

const GroceryList = () => {
  const [formValues, setFormValues] = useState([]);

  // 1 - get the key and value from the element, put into an object
  let total = 0;
  let newObj = {};

  // this is the function called by onChange
  const getObjectValues = (e) => {
    console.log(typeof(e.target.value));
    const objKey = e.target.name; 
    let tempVal = e.target.value;
    
    let objVal;
     
    objVal = isNaN(tempVal) ? objVal = tempVal.charAt(0).toUpperCase() + tempVal.substr(1) : objVal = parseFloat(tempVal);

    newObj[objKey] = objVal;
  }
  
  // 2 - add the new object into the state array
  // called by onClick when add button is clicked
  const addNewObjectToList = (event) => {
    event.preventDefault();
    let newList = [...formValues];
    newList.push(newObj);
    setFormValues(newList);
    //console.log(newList);
    // clear form inputs here...? 
  }

  // 3 - Clear all list contents and start over
  // called by onClick
  const clearList = (e) => {
    setFormValues([]);
  }

  const deleteItem = (indexToRemove) => {
    setFormValues(formValues.filter((item, index) => index !== indexToRemove));
  };


  return (
    <div className="container">
      <div className="card card-body bg-light mb-2">
        <form className="form-inline" onSubmit={addNewObjectToList}>
          <input
            className="form-control"
            type="text"
            placeholder="Name of grocery item..."
            aria-label="Name of grocery item..."
            name="item"
            value={formValues.item}
            onChange={getObjectValues}
            required
          />
          <input
            className="form-control"
            type="number"
            min="0"
            step=".01"
            placeholder="Cost of grocery Item..."
            aria-label="Cost of grocery Item..."
            name="price"
            value={formValues.price}
            onChange={getObjectValues}
            required
          />
          <div>
            <button type="submit" className="btn btn-success" onClick={addNewObjectToList}>
              Add
            </button>
          </div>
        </form>
      </div>
      <div className="card card-body border-white">
        <h1 className="h4">Grocery List</h1>
        <table className="table table-compact">
          <thead>
            <tr>
              <th>Item</th>
              <th>Cost</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
               {
               formValues.map(({ item, price }, index) => {
                 total += price;
                 return <tr key={index}><td>{ item }</td><td>${ price }</td>
                 <td>
                   <button type="button" title="Delete" onClick={() => deleteItem(index)}>X</button>
                   </td></tr>
               })
              }            
          </tbody>
        </table>
        <p className="lead">
          <strong>Total Cost: ${ total }</strong>
        </p>
        <div className="text-right">
          <button type="button" className="btn btn-outline-success">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroceryList;
