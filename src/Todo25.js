import React, { useState } from "react";

function Todo25() {
  const [name22, setname22] = useState("");
  const [collect22, setCollect22] = useState([]);
  const [edit22, setedit22] = useState("");
  const [modal22, setmodal22] = useState(false);
  const [idholder, setidholder] = useState(0);
  const [currentpage, setcurrentpage] = useState(1);
  const [postperpage, setpostperpage] = useState(5);

  const handlesubmit22 = (e) => {
    e.preventDefault();
    setCollect22([{ name22, id: Math.random() }, ...collect22]);
  };

  const delete22 = (id) => {
    const neware = collect22.filter((e) => e.id !== id);
    setCollect22(neware);
  };

  const openmodal22 = (id) => {
    setidholder(id);
    setmodal22(true);
  };

  const handleedit22 = (e) => {
    e.preventDefault();
    const x = collect22.map((e) =>
      e.id === idholder ? { ...e, name22: edit22 } : e
    );
    setCollect22(x);
  };

  const indexoflast = currentpage * postperpage;
  const indexoffirst = indexoflast - postperpage;
  const posts = collect22.slice(indexoffirst, indexoflast);

  const pagenum = [];
  for (let i = 1; i <= Math.ceil(collect22.length / postperpage); i++) {
    pagenum.push(i);
  }

  return (
    <div>
      <h1>25555</h1>
      <form action="submit" onSubmit={handlesubmit22}>
        <input
          type="text"
          value={name22}
          onChange={(e) => {
            setname22(e.target.value);
          }}
        />
      </form>

      {modal22 && (
        <form action="submit" onSubmit={handleedit22}>
          <input
            type="text"
            value={edit22}
            onChange={(e) => {
              setedit22(e.target.value);
            }}
          />
        </form>
      )}

      {posts.map((e) => (
        <div key={e.id}>
          {e.name22}{" "}
          <button
            onClick={() => {
              delete22(e.id);
            }}>
            delete
          </button>
          <button
            onClick={() => {
              openmodal22(e.id);
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

export default Todo25;
