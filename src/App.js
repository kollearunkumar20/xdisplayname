import React, { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFullName(`${firstName} ${lastName}`);
  };

  // Disable the button if any field is empty
  const isDisabled = firstName.trim() === "" || lastName.trim() === "";

  return (
    <div className="container">
      <h2>Full Name Display</h2>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="input"
        />

        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="input"
        />

        <button type="submit" disabled={isDisabled} className="button">
          Submit
        </button>
      </form>

      {fullName && <h3>Full Name: {fullName}</h3>}
    </div>
  );
}

export default App;
