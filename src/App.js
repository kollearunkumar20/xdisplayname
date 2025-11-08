import React, { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstName.trim() === "" || lastName.trim() === "") return;

    setFullName(`Full Name: ${firstName} ${lastName}`);
  };

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

        <button type="submit" className="button" disabled={isDisabled}>
          Submit
        </button>
      </form>

      {fullName && <h3>{fullName}</h3>}
    </div>
  );
}

export default App;
