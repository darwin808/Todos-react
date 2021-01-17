import React, { useState } from "react";

function Todo13() {
  const [name13, setname13] = useState("");
  const [collect13, setcollect13] = useState([]);
  const [idhodle13, setidolhde13] = useState(0);
  const [modal13, setmodal13] = useState(false);
  const [edit13, setedit13] = useState("");

  const handlesubmit13 = (e) => {
    e.preventDefault();
    setcollect13([{ name13, id: Math.random() }, ...collect13]);
  };

  const dele13 = (id) => {
    const newarrr = collect13.filter((e) => e.id !== id);
    setcollect13(newarrr);
  };

  const openmodal13 = (id) => {
    setidolhde13(id);
    setmodal13(true);
  };

  const handleedit13 = (e) => {
    e.preventDefault();
    const x = collect13.map((e) =>
      e.id === idhodle13 ? { ...e, name13: edit13 } : e
    );
    setcollect13(x);
  };
  return (
    <div>
      <h1>TODO13</h1>

      <form action="submit" onSubmit={handlesubmit13}>
        <input
          type="text"
          value={name13}
          onChange={(e) => {
            setname13(e.target.value);
          }}
        />
      </form>

      {modal13 && (
        <form action="submit" onSubmit={handleedit13}>
          <input
            type="text"
            value={edit13}
            onChange={(e) => {
              setedit13(e.target.value);
            }}
          />
        </form>
      )}

      {collect13.map((e) => (
        <div key={e.id}>
          {e.name13}
          <button
            onClick={() => {
              dele13(e.id);
            }}>
            DEL
          </button>

          <button
            onClick={() => {
              openmodal13(e.id);
            }}>
            EDIT
          </button>
        </div>
      ))}
    </div>
  );
}

export default Todo13;
