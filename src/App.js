import React, { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const bothFilled = firstName.trim() !== "" && lastName.trim() !== "";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bothFilled) {
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  };

  const handleFirstChange = (e) => {
    const v = e.target.value;
    setFirstName(v);
    if (v.trim() === "" || lastName.trim() === "") setSubmitted(false);
  };

  const handleLastChange = (e) => {
    const v = e.target.value;
    setLastName(v);
    if (firstName.trim() === "" || v.trim() === "") setSubmitted(false);
  };

  return (
    <div className="container">
      <h2>Full Name Display</h2>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={handleFirstChange}
          className="input"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={handleLastChange}
          className="input"
        />
        <button type="submit" className="button" disabled={!bothFilled}>
          Submit
        </button>
      </form>

      {submitted && bothFilled && (
        <h3>{`Full Name: ${firstName} ${lastName}`}</h3>
      )}
    </div>
  );
}

export default App;
