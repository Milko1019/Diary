import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <br></br>
      <div className="form-group">
        <label htmlFor="search"></label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="entries"
          list="entries"
          type="text"
          className="form-control"
          placeholder="Type in a Entry Title to Begin"
          id="breentriesed"
        />
        <datalist id="entries">
          {props.entries.map(entry => (
            <option value={entry} key={entry} />
          ))}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
