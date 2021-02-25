import React from "react";

function Add({ toggleFunc }) {
  return (
    <div>
      <button className="pa2 w4 h2 bg-lightest-blue on" onClick={toggleFunc}>
        Open
      </button>
    </div>
  );
}

export default Add;
