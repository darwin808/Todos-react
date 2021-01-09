import React, { useState } from "react";

function Todo4() {
  const [name4, setname4] = useState("");
  const [collection4, setcollection4] = useState([]);
  const [toggleedit, settoggleedit] = useState(false);
  const [editdata4, seteditdata4] = useState("");
  const [idholder, setidholder] = useState(0);

  const handlesubmit4 = (e) => {
    e.preventDefault();
    setcollection4([...collection4, { name4, id: Math.random() }]);
  };

  const deltodo4 = (id) => {
    const newarr4 = collection4.filter((e) => e.id !== id);
    setcollection4(newarr4);
  };

  const openmodal4 = (id) => {
    settoggleedit(true);
    setidholder(id);
  };

  const submiteditdata4 = (e) => {
    e.preventDefault();
    const x = collection4.map((e) =>
      e.id === idholder ? { ...e, name4: editdata4 } : e
    );

    setcollection4(x);
  };

  return (
    <div>
      <h1>TODOD4</h1>

      <form action="submit" onSubmit={handlesubmit4}>
        <input
          type="text"
          value={name4}
          onChange={(e) => {
            setname4(e.target.value);
          }}
        />
      </form>

      {toggleedit && (
        <form action="submit" onSubmit={submiteditdata4}>
          <input
            type="text"
            value={editdata4}
            onChange={(e) => {
              seteditdata4(e.target.value);
            }}
          />
        </form>
      )}

      {collection4.map((e) => (
        <div key={e.id}>
          {e.name4}{" "}
          <button
            onClick={() => {
              deltodo4(e.id);
            }}>
            DEL
          </button>
          <button
            onClick={() => {
              openmodal4(e.id);
            }}>
            EDIT
          </button>
        </div>
      ))}
    </div>
  );
}

export default Todo4;
