import React, { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // Use null to mean "no result element should exist"
  const [fullName, setFullName] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const f = firstName.trim();
    const l = lastName.trim();

    if (f && l) {
      // Valid submit → render <h3> after form
      setFullName(`Full Name: ${f} ${l}`);
    } else {
      // Invalid submit → ensure no sibling element after form
      setFullName(null);
    }
  };

  const handleFirstChange = (e) => {
    const v = e.target.value;
    setFirstName(v);
    // If either field is incomplete, ensure nothing is rendered after form
    if (v.trim() === "" || lastName.trim() === "") setFullName(null);
  };

  const handleLastChange = (e) => {
    const v = e.target.value;
    setLastName(v);
    if (firstName.trim() === "" || v.trim() === "") setFullName(null);
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

        <button type="submit" className="button" disabled={isDisabled}>
          Submit
        </button>
      </form>

      {/* Only render this ELEMENT when fullName is a non-null string */}
      {fullName !== null && <h3>{fullName}</h3>}
    </div>
  );
}

export default App;
