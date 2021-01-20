import React, { useState } from "react";

const Todo16 = () => {
  const [edit16, setedit16] = useState("");
  const [idholder, setidjolder16] = useState(0);
  const [modal, setmodal] = useState(false);

  const [name16, setname16] = useState("");
  const [collect16, setcollect16] = useState([]);
  const handlesubmit16 = (e) => {
    e.preventDefault();
    setcollect16([{ name16, id: Math.random() }, ...collect16]);
  };

  const delete16 = (id) => {
    const neware = collect16.filter((e) => e.id !== id);
    setcollect16(neware);
  };

  const openmodal = (id) => {
    setidjolder16(id);
    setmodal(true);
  };

  const handleedit16 = (e) => {
    e.preventDefault();
    const x = collect16.map((e) =>
      e.id === idholder ? { ...e, name16: edit16 } : e
    );

    setcollect16(x);
  };

  return (
    <div>
      <h1>Todo16</h1>

      <form action="submit" onSubmit={handlesubmit16}>
        <input
          type="text"
          value={name16}
          onChange={(e) => {
            setname16(e.target.value);
          }}
        />
      </form>
      {modal && (
        <form action="submit" onSubmit={handleedit16}>
          <input
            type="text"
            value={edit16}
            onChange={(e) => {
              setedit16(e.target.value);
            }}
          />
        </form>
      )}
      {collect16.map((e) => (
        <div key={e.id}>
          {e.name16}{" "}
          <button
            onClick={() => {
              delete16(e.id);
            }}>
            del
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

export default Todo16;
