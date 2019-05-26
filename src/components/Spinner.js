import React from "react";
import loading from "./spinner.svg";

const Spinner = () => {
  return (
    <div>
      <img className="loading" src={loading}/>
    </div>
  );
};

export default Spinner;
