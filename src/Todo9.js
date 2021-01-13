import React, { useState } from "react";

function Todo9() {
  const [name9, setname9] = useState("");
  const [modal, setmodal] = useState(false);
  const [idholder9, setidholder9] = useState(0);
  const [edit9, setedit9] = useState("");

  const [collect9, setcollect9] = useState([]);

  const handlesubmit9 = (e) => {
    e.preventDefault();
    setcollect9([...collect9, { name9, id: Math.random() }]);
  };
  const delete9 = (id) => {
    const newar = collect9.filter((e) => e.id !== id);
    setcollect9(newar);
  };
  const openmodaaaall = (id) => {
    setidholder9(id);
    setmodal(true);
  };

  const handleedit9 = (e) => {
    e.preventDefault();
    const x = collect9.map((e) =>
      e.id == idholder9 ? { ...e, name9: edit9 } : e
    );
    setcollect9(x);
  };

  return (
    <div>
      <h1>Todo9</h1>

      <form action="submit" onSubmit={handlesubmit9}>
        <input
          type="text"
          value={name9}
          onChange={(e) => {
            setname9(e.target.value);
          }}
        />
      </form>

      {modal && (
        <form action="submit" onSubmit={handleedit9}>
          <input
            type="text"
            value={edit9}
            onChange={(e) => {
              setedit9(e.target.value);
            }}
          />
        </form>
      )}

      {collect9.map((e) => (
        <div key={e.id}>
          {e.name9}{" "}
          <button
            onClick={() => {
              delete9(e.id);
            }}>
            DEL
          </button>
          <button
            onClick={() => {
              openmodaaaall(e.id);
            }}>
            Edit
          </button>{" "}
        </div>
      ))}
    </div>
  );
}

export default Todo9;
