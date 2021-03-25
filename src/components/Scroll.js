import React from "react";
import "../css/Scroll.css";

function Scroll({ children }) {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "1px solid black",
        height: "750px",
      }}
    >
      {children}
    </div>
  );
}

export default Scroll;
