import React, { useState } from "react";

function Todo10() {
  const [name10, setname10] = useState("");
  const [modal10, setmodal10] = useState(false);
  const [idholder10, setidholder10] = useState(0);
  const [edit10, setedit10] = useState("");
  const [collect10, setcollect10] = useState([]);
  const handlesubmit10 = (e) => {
    e.preventDefault();
    setcollect10([...collect10, { name10, id: Math.random() }]);
  };

  const del10 = (id) => {
    const newarr = collect10.filter((e) => e.id !== id);
    setcollect10(newarr);
  };

  const openmodal = (id) => {
    setidholder10(id);
    setmodal10(true);
  };

  const handleedit10 = (e) => {
    e.preventDefault();
    const x = collect10.map((e) =>
      e.id === idholder10 ? { ...e, name10: edit10 } : e
    );
    setcollect10(x);
  };

  return (
    <div>
      <form action="submit" onSubmit={handlesubmit10}>
        <input
          type="text"
          value={name10}
          onChange={(e) => {
            setname10(e.target.value);
          }}
        />
      </form>
      {modal10 && (
        <form action="submit" onSubmit={handleedit10}>
          <input
            type="text"
            value={edit10}
            onChange={(e) => {
              setedit10(e.target.value);
            }}
          />
        </form>
      )}
      {collect10.map((e) => (
        <div key={e.id}>
          {e.name10} -{" "}
          <button
            onClick={() => {
              del10(e.id);
            }}>
            Del
          </button>
          <button
            onClick={() => {
              openmodal(e.id);
            }}>
            Edit
          </button>
        </div>
      ))}
    </div>
  );
}

export default Todo10;
