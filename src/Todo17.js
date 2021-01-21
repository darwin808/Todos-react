import React, { useState } from "react";

const Todo17 = () => {
  const [name17, setname17] = useState("");
  const [collect17, setcollect17] = useState([]);
  const [modal, setmodal] = useState(false);
  const [idholder, setidholder] = useState(0);
  const [edit17, setedit17] = useState("");

  const openmodal = (id) => {
    setidholder(id);
    setmodal(true);
  };

  const handleedit17 = (e) => {
    e.preventDefault();
    const x = collect17.map((e) =>
      e.id === idholder ? { ...e, name17: edit17 } : e
    );
    setcollect17(x);
  };

  const handlesubmit17 = (e) => {
    e.preventDefault();

    setcollect17([{ name17, id: Math.random() }, ...collect17]);
  };

  const dele17 = (id) => {
    const neware = collect17.filter((e) => e.id !== id);
    setcollect17(neware);
  };

  return (
    <div>
      <h1>TODO17</h1>

      <form action="submit" onSubmit={handlesubmit17}>
        <input
          type="text"
          value={name17}
          onChange={(e) => {
            setname17(e.target.value);
          }}
        />
      </form>

      {modal && (
        <form action="submit" onSubmit={handleedit17}>
          <input
            type="text"
            value={edit17}
            onChange={(e) => {
              setedit17(e.target.value);
            }}
          />
        </form>
      )}

      {collect17.map((e) => (
        <div key={e.id}>
          {e.name17}{" "}
          <button
            onClick={() => {
              dele17(e.id);
            }}>
            DELE
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

export default Todo17;
