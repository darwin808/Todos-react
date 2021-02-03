import React, { useState } from "react";

function Todo30() {
  const [edit30, setedit30] = useState("");
  const [modal, setmodal] = useState(false);
  const [idholder, setidholder] = useState(0);

  const [name30, setname30] = useState("");
  const [collect30, setcollect30] = useState([]);
  const [currentpage, setcurrentpage] = useState(1);
  const [postperpage, setpostperpage] = useState(5);

  const handlesubmit30 = (e) => {
    e.preventDefault();
    setcollect30([{ name30, id: Math.random() }, ...collect30]);
  };

  const dele30 = (id) => {
    const newarr = collect30.filter((e) => e.id !== id);
    setcollect30(newarr);
  };

  const openmodal = (id) => {
    setidholder(id);
    setmodal(true);
  };
  const handleedit30 = (e) => {
    e.preventDefault();
    const x = collect30.map((e) =>
      e.id === idholder ? { ...e, name30: edit30 } : e
    );
    setcollect30(x);
  };

  const indexOfLast = currentpage * postperpage;
  const indexOfFirst = indexOfLast - postperpage;
  const posts = collect30.slice(indexOfFirst, indexOfLast);

  const pagenum = [];
  for (let i = 1; i <= Math.ceil(collect30.length / postperpage); i++) {
    pagenum.push(i);
  }

  return (
    <div>
      <h1>TODO30</h1>

      <form action="submit" onSubmit={handlesubmit30}>
        <input
          type="text"
          value={name30}
          onChange={(e) => {
            setname30(e.target.value);
          }}
        />
      </form>

      {modal && (
        <form action="submit" onSubmit={handleedit30}>
          <input
            type="text"
            value={edit30}
            onChange={(e) => {
              setedit30(e.target.value);
            }}
          />
        </form>
      )}

      {posts.map((e) => (
        <div key={e.id}>
          {e.name30}{" "}
          <button
            onClick={() => {
              dele30(e.id);
            }}>
            delete
          </button>
          <button
            onClick={() => {
              openmodal(e.id);
            }}>
            edit
          </button>
        </div>
      ))}

      {pagenum.map((e) => (
        <div key={e}>{e}</div>
      ))}
    </div>
  );
}

export default Todo30;
