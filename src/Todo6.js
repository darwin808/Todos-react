import React, { useState } from "react";

function Todo6() {
  const [name6, setname6] = useState("");
  const [collect6, setcollect6] = useState([]);
  const [editdata6, seteditdata6] = useState("");
  const [modal6, setmodal6] = useState(false);
  const [idholder6, setidholder6] = useState(0);
  const handlesubmit6 = (e) => {
    e.preventDefault();
    setcollect6([{ name6, id: Math.random() }, ...collect6]);
  };

  const del6 = (id) => {
    const newar6 = collect6.filter((e) => e.id !== id);
    setcollect6(newar6);
  };

  const showmodal6 = (id) => {
    setmodal6(true);
    setidholder6(id);
  };

  const handlesumitedit6 = (e) => {
    e.preventDefault();
    const x = collect6.map((e) =>
      e.id === idholder6 ? { ...e, name6: editdata6 } : e
    );

    setcollect6(x);
  };

  return (
    <div>
      <h1>TODO 6</h1>

      <form action="submit" onSubmit={handlesubmit6}>
        <input
          type="text"
          value={name6}
          onChange={(e) => {
            setname6(e.target.value);
          }}
        />
      </form>

      {modal6 && (
        <form action="submit" onSubmit={handlesumitedit6}>
          <input
            type="text"
            value={editdata6}
            onChange={(e) => {
              seteditdata6(e.target.value);
            }}
          />
        </form>
      )}

      {collect6.map((e) => (
        <div key={e.id}>
          {e.name6}
          <button
            onClick={() => {
              del6(e.id);
            }}>
            DEL
          </button>
          <button
            onClick={() => {
              showmodal6(e.id);
            }}>
            EDIT
          </button>
        </div>
      ))}
    </div>
  );
}

export default Todo6;
