import React, { useState } from "react";
import "../css/addForm.css";

const AddForm = ({ toggleState, addFunc }) => {
  // state
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const clearInputs = () => {
    setEmail("");
    setName("");
  };

  return toggleState !== false ? (
    <form action="" className="addForm">
      <input
        type="text"
        required
        placeholder="Name of Robot"
        value={name}
        className="addInputs"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        required
        placeholder="Email of Robot"
        value={email}
        className="addInputs"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={(e) => addFunc(e, name, email, clearInputs)}>Add</button>
    </form>
  ) : (
    <div></div>
  );
};

export default AddForm;
