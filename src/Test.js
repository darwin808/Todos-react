import React from "react";

const Test = ({ name3, x, onclick }) => {
  return (
    <div>
      <h1>TEST</h1>

      <h1>
        {name3} - {x} {onclick}
      </h1>
    </div>
  );
};

export default Test;
