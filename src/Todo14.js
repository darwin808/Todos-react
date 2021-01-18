import React, { useState } from "react";

const Todo14 = () => {
  const [name14, setName14] = useState("");
  const [collect14, setcollect14] = useState([]);
  const [modal14, setmodal14] = useState(false);
  const [edit14, setedit14] = useState("");
  const [idholder14, setidholder14] = useState(0);

  const handlesubmit14 = (e) => {
    e.preventDefault();
    setcollect14([{ name14, id: Math.random() }, ...collect14]);
  };
  const dele14 = (id) => {
    const neware = collect14.filter((e) => e.id !== id);

    setcollect14(neware);
  };

  const openmodal = (id) => {
    setmodal14(true);
    setidholder14(id);
  };

  const handleedit14 = (e) => {
    e.preventDefault();
    const x = collect14.map((e) =>
      e.id === idholder14 ? { ...e, name14: edit14 } : e
    );
    setcollect14(x);
  };

  const y = [{ 0: 1 }, { 1: 2 }, { 2: 3 }, { 3: 4 }];
  return (
    <div>
      <h1>Todo14</h1>

      <form action="submit" onSubmit={handlesubmit14}>
        <input
          type="text"
          onChange={(e) => {
            setName14(e.target.value);
          }}
          value={name14}
        />
      </form>

      {modal14 && (
        <form action="submit" onSubmit={handleedit14}>
          <input
            type="text"
            onChange={(e) => {
              setedit14(e.target.value);
            }}
            value={edit14}
          />
        </form>
      )}

      {collect14.map((e) => (
        <div key={e.id}>
          {e.name14}{" "}
          <button
            onClick={() => {
              dele14(e.id);
            }}>
            DEL
          </button>
          <button
            onClick={() => {
              openmodal(e.id);
            }}>
            Edit
          </button>
        </div>
      ))}
      {Object.entries(y).forEach((x, y) => {
        console.log(x, y);
      })}
    </div>
  );
};

export default Todo14;
