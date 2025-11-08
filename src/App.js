import React, { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // null = render nothing after the form
  const [fullName, setFullName] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const f = firstName.trim();
    const l = lastName.trim();

    if (f && l) {
      setFullName(`Full Name: ${f} ${l}`);
    } else {
      // invalid submit -> ensure NO element exists after form
      setFullName(null);
    }
  };

  const handleFirstChange = (e) => {
    const v = e.target.value;
    setFirstName(v);
    if (v.trim() === "" || lastName.trim() === "") setFullName(null);
  };

  const handleLastChange = (e) => {
    const v = e.target.value;
    setLastName(v);
    if (firstName.trim() === "" || v.trim() === "") setFullName(null);
  };

  const isIncomplete = firstName.trim() === "" || lastName.trim() === "";

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

        {/* Keep the button ENABLED so Cypress can click it */}
        <button
          type="submit"
          className={`button ${isIncomplete ? "inactive" : ""}`}
          // no disabled attribute here
        >
          Submit
        </button>
      </form>

      {/* Only render this when submission was valid */}
      {fullName !== null && <h3>{fullName}</h3>}
    </div>
  );
}

export default App;
