import React, { useState } from "react";

function Todo27() {
  const [name27, setname27] = useState("");
  const [collect27, setcollect27] = useState([]);
  const [edit27, setedit27] = useState("");
  const [modal, setmodal] = useState(false);
  const [idholder, setidholder] = useState(0);
  const [currentpage, setcurrentpage] = useState(1);
  const [postperpage, setpostperpage] = useState(5);

  const handlesubmit27 = (e) => {
    e.preventDefault();
    setcollect27([{ name27, id: Math.random() }, ...collect27]);
    console.log(collect27);
  };

  const delele27 = (id) => {
    const neware = collect27.filter((e) => e.id !== id);
    setcollect27(neware);
  };

  const openmodal = (id) => {
    setidholder(id);
    setmodal(true);
  };

  const handleedit27 = (e) => {
    e.preventDefault();
    const x = collect27.map((e) =>
      e.id === idholder ? { ...e, name27: edit27 } : e
    );
    setcollect27(x);
  };

  const indexoflast = currentpage * postperpage;
  const indexoffirst = indexoflast - postperpage;
  const posts = collect27.slice(indexoffirst, indexoflast);

  const pagenum = [];
  for (let i = 1; i <= Math.ceil(collect27.length / postperpage); i++) {
    pagenum.push(i);
  }

  return (
    <div>
      <h1>Todo27</h1>

      <form action="submit" onSubmit={handlesubmit27}>
        <input
          type="text"
          value={name27}
          onChange={(e) => {
            setname27(e.target.value);
          }}
        />
      </form>

      {modal && (
        <form action="submit" onSubmit={handleedit27}>
          <input
            type="text"
            value={edit27}
            onChange={(e) => {
              setedit27(e.target.value);
            }}
          />
        </form>
      )}

      {posts.map((e) => (
        <div key={e.id}>
          {e.name27}{" "}
          <button
            onClick={() => {
              delele27(e.id);
            }}>
            del
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
        <div
          onClick={() => {
            setcurrentpage(e);
          }}
          key={e}>
          {e}
        </div>
      ))}
    </div>
  );
}

export default Todo27;
