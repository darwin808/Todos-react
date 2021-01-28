import React, { useState } from "react";

function Todo24() {
  const [name22, setname22] = useState("");
  const [collect22, setcollect22] = useState([]);
  const [edit22, setedit22] = useState("");
  const [idholder22, setidholder22] = useState(0);
  const [modal22, setmodal22] = useState(false);
  const [currentpage, setcurrentpage] = useState(1);
  const [postperpage, setpostperpage] = useState(5);

  const handlesubmit22 = (e) => {
    e.preventDefault();
    setcollect22([...collect22, { name22, id: Math.random() }]);
    console.log(collect22);
  };

  const delete22 = (id) => {
    const neware = collect22.filter((e) => e.id !== id);
    setcollect22(neware);
  };

  const openmodal = (id) => {
    setidholder22(id);
    setmodal22(true);
  };

  const handleedit22 = (e) => {
    e.preventDefault();
    const x = collect22.map((e) =>
      e.id === idholder22 ? { ...e, name22: edit22 } : e
    );
    setcollect22(x);
  };

  const indexoflast24 = currentpage * postperpage;
  const indexoffirst24 = indexoflast24 - postperpage;
  const z = collect22.slice(indexoffirst24, indexoflast24);

  const pagenum = [];
  for (let i = 1; i <= Math.ceil(collect22.length / postperpage); i++) {
    pagenum.push(i);
  }

  return (
    <div>
      <h1>Todo24</h1>

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

      {collect22.slice(indexoffirst24, indexoflast24).map((e) => (
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

export default Todo24;
