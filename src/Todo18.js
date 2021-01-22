import React, { useState } from "react";

const Todo18 = () => {
  const [name18, setname18] = useState("");
  const [collect18, setcollect18] = useState([]);
  const [modal, setmodal] = useState(false);
  const [idholder, setidholder] = useState(0);
  const [edit18, setedit18] = useState("");

  const handlesubmit18 = (e) => {
    e.preventDefault();
    setcollect18([{ name18, id: Math.random() }, ...collect18]);
  };
  const dele18 = (id) => {
    const neware = collect18.filter((e) => e.id !== id);
    setcollect18(neware);
  };

  const openmodal = (id) => {
    setidholder(id);
    setmodal(true);
  };

  const handleedit18 = (e) => {
    e.preventDefault();
    const x = collect18.map((e) =>
      e.id === idholder ? { ...e, name18: edit18 } : e
    );
    setcollect18(x);
  };

  return (
    <div>
      <h1>TODO18</h1>

      <form action="submit" onSubmit={handlesubmit18}>
        <input
          type="text"
          value={name18}
          onChange={(e) => {
            setname18(e.target.value);
          }}
        />
      </form>

      {modal && (
        <form action="submit" onSubmit={handleedit18}>
          <input
            type="text"
            value={edit18}
            onChange={(e) => {
              setedit18(e.target.value);
            }}
          />
        </form>
      )}

      {collect18.map((e) => (
        <div key={e.id}>
          {e.name18}{" "}
          <button
            onClick={() => {
              dele18(e.id);
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

export default Todo18;
