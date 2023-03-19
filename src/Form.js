// React.useState acts as a public method of an imported object
import React from "react";
import { useState } from "react";

const Form = (props) => {
  // initializing state to check when form has been changed
  const [searchValue, setSearchValue] = React.useState("");

  // logging what the user searched
  const handleChange = (event) => {
    setSearchValue(event.target.form[0].value);
  };

  return (
    <section className="wrapper">
      <form
        action=""
        onSubmit={(event) => {
          props.handleSubmit(event, searchValue);
        }}
      >
        <label htmlFor="userSearch">Search Books by Title:</label>

        <div className="input-and-search">
          <input
            required
            type="text"
            id="userSearch"
            data-testid="input"
            onChange={handleChange}
            value={searchValue}
          ></input>

          <button>Search</button>
        </div>
        <p>
          Want more search options?{" "}
          <a href="https://openlibrary.org/search/howto">
            Here's how to use the advanced search functions.
          </a>
        </p>
      </form>
    </section>
  );
};

export default Form;
