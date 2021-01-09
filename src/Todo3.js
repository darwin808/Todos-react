import React, { useState } from "react";

import Test from "./Test";

function Todo3() {
  const [name3, setname3] = useState("");
  const [collection3, setcollection3] = useState([]);
  const [editdata3, seteditdata3] = useState("");
  const [showid3, setshowid3] = useState(false);
  const [editedid3, seteditid3] = useState(0);

  const handlesubmit3 = (e) => {
    e.preventDefault();
    setcollection3([...collection3, { name3, id: Math.random() }]);
    setname3("");
  };
  const handlechange3 = (e) => {
    setname3(e.target.value);
  };

  const delete3 = (id) => {
    const newarr3 = collection3.filter((e) => e.id !== id);
    setcollection3(newarr3);
  };

  const openedit3 = (id) => {
    setshowid3(true);
    seteditid3(id);
  };

  const handlechangeEDIT = (e) => {
    seteditdata3(e.target.value);
  };

  const handleediteddata3 = (g) => {
    g.preventDefault();
    const x = collection3.map((e) =>
      e.id == editedid3 ? { ...e, name3: editdata3 } : e
    );
    console.log(x);
    setcollection3(x);
    setshowid3(false);
  };

  return (
    <div>
      <h1>TODO3</h1>

      <form action="submit" onSubmit={handlesubmit3}>
        <input type="text" value={name3} onChange={handlechange3} />
      </form>

      {showid3 ? (
        <form action="submit" onSubmit={handleediteddata3}>
          <input
            type="text"
            value={editdata3}
            onChange={handlechangeEDIT}
            placeholder="edit here..."
          />
        </form>
      ) : null}

      {collection3.map((e) => (
        <div key={e.id}>
          {e.name3}
          <button
            key={e.id}
            onClick={() => {
              delete3(e.id);
            }}>
            Delete
          </button>{" "}
          <button
            onClick={() => {
              openedit3(e.id);
            }}>
            EDIT
          </button>
        </div>
      ))}

      <Test name3="adada" onClick={openedit3} />
    </div>
  );
}

export default Todo3;
