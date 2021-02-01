import React, { useState } from "react";

function Todo28() {
  const [name28, setname28] = useState("");
  const [collect28, setcollect28] = useState([]);
  const [edit28, setedit28] = useState("");
  const [modal, setmodal] = useState(false);
  const [idholder, setidholder] = useState(0);
  const [currentpage, setcurrentpage] = useState(1);
  const [postperpage, setpostperpage] = useState(5);

  const handlesubmit = (e) => {
    e.preventDefault();
    setcollect28([...collect28, { name28, id: Math.random() }]);
  };

  const delet28 = (id) => {
    const neware = collect28.filter((e) => e.id !== id);
    setcollect28(neware);
  };

  const openmodal = (id) => {
    setidholder(id);
    setmodal(true);
  };

  const handleedit = (e) => {
    e.preventDefault();
    const x = collect28.map((e) =>
      e.id === idholder ? { ...e, name28: edit28 } : e
    );
    setcollect28(x);
  };

  const indeofLast = currentpage * postperpage;
  const indexofFirst = indeofLast - postperpage;
  const posts = collect28.slice(indexofFirst, indeofLast);

  const pagenum = [];
  for (let i = 1; i <= Math.ceil(collect28.length / postperpage); i++) {
    pagenum.push(i);
  }

  return (
    <div>
      <h1>TODO28</h1>

      <form action="submit " onSubmit={handlesubmit}>
        <input
          type="text"
          value={name28}
          onChange={(e) => {
            setname28(e.target.value);
          }}
        />
      </form>

      {modal && (
        <form action="submit " onSubmit={handleedit}>
          <input
            type="text"
            value={edit28}
            onChange={(e) => {
              setedit28(e.target.value);
            }}
          />
        </form>
      )}

      {posts.map((e) => (
        <div key={e.id}>
          {e.name28}{" "}
          <button
            onClick={() => {
              delet28(e.id);
            }}>
            delete
          </button>{" "}
          <button
            onClick={() => {
              openmodal(e.id);
            }}>
            edit
          </button>
        </div>
      ))}

      {pagenum.map((e) => (
        <div
          onClick={() => {
            setcurrentpage(e);
          }}>
          {e}
        </div>
      ))}
    </div>
  );
}

export default Todo28;
