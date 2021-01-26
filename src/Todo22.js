import React, { useState } from "react";

function Todo22() {
  const [name22, setname22] = useState("");
  const [collect22, setcollect22] = useState([]);
  const [edit22, setedit22] = useState("");
  const [idholde22, setidholde22] = useState(0);
  const [modal22, setmoda22] = useState(false);
  const [currentpage, setcurrentpage] = useState(1);
  const [postperpage, setpostperpage] = useState(5);
  const handlesubmit22 = (e) => {
    e.preventDefault();
    setcollect22([{ name22, id: Math.random() }, ...collect22]);
  };

  const delt22 = (id) => {
    const neware = collect22.filter((e) => e.id !== id);
    setcollect22(neware);
  };

  const handleedit22 = (e) => {
    e.preventDefault();
    const x = collect22.map((e) =>
      e.id === idholde22 ? { ...e, name22: edit22 } : e
    );
    setcollect22(x);
  };

  const openmodal22 = (id) => {
    setidholde22(id);
    setmoda22(true);
  };

  const indexoflast = currentpage * postperpage;
  const indexoffirst = indexoflast - postperpage;
  const post = collect22.slice(indexoffirst, indexoflast);

  const pagenum22 = [];
  for (let i = 1; i <= Math.ceil(collect22.length / postperpage); i++) {
    pagenum22.push(i);
  }

  return (
    <div>
      <h1>todo22</h1>

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

      {post.map((e) => (
        <div key={e.id}>
          {e.name22}{" "}
          <button
            onClick={() => {
              delt22(e.id);
            }}>
            delte
          </button>
          <button
            onClick={() => {
              openmodal22(e.id);
            }}>
            edit
          </button>
        </div>
      ))}

      {pagenum22.map((e) => (
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

export default Todo22;
