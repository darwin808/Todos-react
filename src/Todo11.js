import React, { useState } from "react";

function Todo11() {
  const [modal, setmodal] = useState(false);
  const [idholder, setidholder11] = useState(0);
  const [edit11, setedit11] = useState("");
  const [name11, setname11] = useState("");
  const [collect11, setcollect11] = useState([]);
  const handlesubmit11 = (e) => {
    e.preventDefault();
    setcollect11([{ name11, id: Math.random() }, ...collect11]);
  };

  const del11 = (id) => {
    const neware = collect11.filter((e) => e.id !== id);
    setcollect11(neware);
  };

  const handleedit11 = (e) => {
    e.preventDefault();

    const x = collect11.map((e) =>
      e.id === idholder ? { ...e, name11: edit11 } : e
    );
    setcollect11(x);
  };
  const openmodal = (id) => {
    setidholder11(id);
    setmodal(true);
  };

  return (
    <div>
      <h1>Todo11</h1>

      <form action="submit" onSubmit={handlesubmit11}>
        <input
          type="text"
          value={name11}
          onChange={(e) => {
            setname11(e.target.value);
          }}
        />
      </form>

      {modal && (
        <form action="submit" onSubmit={handleedit11}>
          <input
            type="text"
            value={edit11}
            onChange={(e) => {
              setedit11(e.target.value);
            }}
          />
        </form>
      )}

      {collect11.map((e) => (
        <div key={e.id}>
          {e.name11}{" "}
          <button
            onClick={() => {
              del11(e.id);
            }}>
            DEL
          </button>
          <button
            onClick={() => {
              openmodal(e.id);
            }}>
            EDIT
          </button>
        </div>
      ))}
    </div>
  );
}

export default Todo11;
