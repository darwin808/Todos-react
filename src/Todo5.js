import React, { useState } from "react";

function Todo5() {
  const [name5, setname5] = useState("");
  const [collect5, setcollect5] = useState([]);
  const [modal5, setmodal5] = useState(false);
  const [editedata5, seteditedata5] = useState("");
  const [idholder5, setidholder5] = useState(0);
  const handlesubmit5 = (e) => {
    e.preventDefault();
    setcollect5([{ name5, id: Math.random() }, ...collect5]);
  };
  const delete5 = (id) => {
    const newarr = collect5.filter((e) => e.id !== id);
    setcollect5(newarr);
  };

  const openmodal5 = (id) => {
    setmodal5(true);
    setidholder5(id);
  };

  const handleEDIT = (e) => {
    e.preventDefault();
    const x = collect5.map((e) =>
      e.id == idholder5 ? { ...e, name5: editedata5 } : e
    );
    setcollect5(x);
  };

  return (
    <div>
      <h1>TODO5</h1>

      <form action="submit" onSubmit={handlesubmit5}>
        <input
          type="text"
          onChange={(e) => {
            setname5(e.target.value);
          }}
          value={name5}
        />
      </form>

      {modal5 && (
        <form action="submit" onSubmit={handleEDIT}>
          <input
            placeholder="EDIT"
            type="text"
            value={editedata5}
            onChange={(e) => {
              seteditedata5(e.target.value);
            }}
          />
        </form>
      )}

      {collect5.map((e) => (
        <div key={e.id}>
          {e.name5}{" "}
          <button
            onClick={() => {
              delete5(e.id);
            }}>
            Delete
          </button>
          <button
            onClick={() => {
              openmodal5(e.id);
            }}>
            Edit
          </button>
        </div>
      ))}
    </div>
  );
}

export default Todo5;
