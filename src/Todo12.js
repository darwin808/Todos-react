import React, { useState } from "react";

export default function Todo12() {
  const [name12, setname12] = useState("");
  const [collect12, setcollect12] = useState([]);
  const [modal, setmodal] = useState(false);
  const [idholder12, setidholder12] = useState(0);
  const [edit12, setedit12] = useState("");

  const handleclick12 = (e) => {
    e.preventDefault();

    setcollect12([{ name12, id: Math.random() }, ...collect12]);
  };

  const delete12 = (id) => {
    const newar = collect12.filter((e) => e.id !== id);
    setcollect12(newar);
  };

  const openmodal12 = (id) => {
    setidholder12(id);
    setmodal(true);
  };
  const handledit12 = (e) => {
    e.preventDefault();

    const x = collect12.map((e) =>
      e.id === idholder12 ? { ...e, name12: edit12 } : e
    );
    setcollect12(x);
  };
  return (
    <div>
      <h1>todo12</h1>

      <form action="submit" onSubmit={handleclick12}>
        <input
          type="text"
          value={name12}
          onChange={(e) => {
            setname12(e.target.value);
          }}
        />
      </form>

      {modal && (
        <form action="submit" onSubmit={handledit12}>
          <input
            type="text"
            value={edit12}
            onChange={(e) => {
              setedit12(e.target.value);
            }}
          />
        </form>
      )}

      {collect12.map((e) => (
        <div key={e.id}>
          {e.name12}{" "}
          <button
            onClick={() => {
              delete12(e.id);
            }}>
            Del
          </button>
          <button
            onClick={() => {
              openmodal12(e.id);
            }}>
            Edit
          </button>
        </div>
      ))}
    </div>
  );
}
