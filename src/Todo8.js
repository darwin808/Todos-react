import React from "react";

function Todo8() {
  const [name8, setname8] = React.useState("");
  const [collect8, setcollect8] = React.useState([]);
  const [modal8, setmodal8] = React.useState(false);
  const [idholder8, setidholder8] = React.useState(0);
  const [edit8, setedit8] = React.useState("");

  const handlesubmit8 = (e) => {
    e.preventDefault();
    setcollect8([...collect8, { name8, id: Math.random() }]);
  };

  const delete8 = (id) => {
    const newarr = collect8.filter((e) => e.id !== id);
    setcollect8(newarr);
  };

  const openmodal8 = (id) => {
    setidholder8(id);
    setmodal8(true);
  };

  const handleeddit8 = (e) => {
    e.preventDefault();
    const x = collect8.map((e) =>
      e.id == idholder8 ? { ...e, name8: edit8 } : e
    );
    setcollect8(x);
  };

  return (
    <div>
      <h1>Todo8</h1>

      <form action="submit" onSubmit={handlesubmit8}>
        <input
          type="text"
          value={name8}
          onChange={(e) => {
            setname8(e.target.value);
          }}
        />
      </form>

      {modal8 && (
        <form action="submit" onSubmit={handleeddit8}>
          <input
            type="text"
            value={edit8}
            onChange={(e) => {
              setedit8(e.target.value);
            }}
          />
        </form>
      )}

      {collect8.map((e) => (
        <div key={e.id}>
          {e.name8}{" "}
          <button
            onClick={() => {
              delete8(e.id);
            }}>
            DEL
          </button>
          <button
            onClick={() => {
              openmodal8(e.id);
            }}>
            EDIT
          </button>
        </div>
      ))}
    </div>
  );
}

export default Todo8;
