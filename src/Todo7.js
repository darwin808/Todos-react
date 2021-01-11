import React, { useState } from "react";

function Todo7() {
  const [name7, setname7] = useState("");
  const [collect7, setcollect7] = useState([]);
  const [edit7, setedit7] = useState("");
  const [openmodal7, setopenmodal7] = useState(false);
  const [idholder7, setidholder7] = useState(0);
  const handlesubmit7 = (e) => {
    e.preventDefault();
    setcollect7([{ name7, id: Math.random() }, ...collect7]);
  };
  const delete7 = (id) => {
    const newar7 = collect7.filter((e) => e.id !== id);
    setcollect7(newar7);
  };

  const togglemodal7 = (id) => {
    setidholder7(id);
    setopenmodal7(true);
  };

  const handleedit7 = (e) => {
    e.preventDefault();
    const x = collect7.map((e) =>
      e.id === idholder7 ? { ...e, name7: edit7 } : e
    );

    setcollect7(x);
  };

  return (
    <div>
      <h1>TODO7</h1>

      <form action="submit" onSubmit={handlesubmit7}>
        <input
          type="text"
          value={name7}
          onChange={(e) => {
            setname7(e.target.value);
          }}
        />
      </form>

      {openmodal7 && (
        <form action="submit" onSubmit={handleedit7}>
          <input
            type="text"
            value={edit7}
            onChange={(e) => {
              setedit7(e.target.value);
            }}
          />
        </form>
      )}

      {collect7.map((e) => (
        <div key={e.id}>
          {e.name7}{" "}
          <button
            onClick={() => {
              delete7(e.id);
            }}>
            delete
          </button>
          <button
            onClick={() => {
              togglemodal7(e.id);
            }}>
            EDIT
          </button>
        </div>
      ))}
    </div>
  );
}

export default Todo7;
