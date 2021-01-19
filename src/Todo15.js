import React, { useState } from "react";

const Todo15 = () => {
  const [name15, setname15] = useState("");
  const [collect15, setcollect15] = useState([]);
  const [modal, setmodal] = useState(false);
  const [idholder15, setidholder15] = useState(0);
  const [edit15, setedit15] = useState("");

  const handlesubmit15 = (e) => {
    e.preventDefault();
    setcollect15([{ name15, id: Math.random() }, ...collect15]);
  };

  const dele15 = (id) => {
    const newaree = collect15.filter((e) => e.id !== id);
    setcollect15(newaree);
  };

  const openmodal = (id) => {
    setidholder15(id);
    setmodal(true);
  };

  const handleedit15 = (e) => {
    e.preventDefault();
    const x = collect15.map((e) =>
      e.id === idholder15 ? { ...e, name15: edit15 } : e
    );
    setcollect15(x);
  };

  return (
    <div>
      <h1>TODO 15</h1>

      <form action="submit" onSubmit={handlesubmit15}>
        <input
          type="text"
          value={name15}
          onChange={(e) => {
            setname15(e.target.value);
          }}
        />
      </form>

      {modal && (
        <form action="submit" onSubmit={handleedit15}>
          <input
            type="text"
            value={edit15}
            onChange={(e) => {
              setedit15(e.target.value);
            }}
          />
        </form>
      )}

      {collect15.map((e) => (
        <div key={e.id}>
          {e.name15}{" "}
          <button
            onClick={() => {
              dele15(e.id);
            }}>
            DEL
          </button>
          <button
            onClick={() => {
              openmodal(e.id);
            }}>
            edit
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todo15;
