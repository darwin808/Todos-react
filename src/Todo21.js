import React, { useState } from "react";

function Todo21() {
  const [name21, setname21] = useState("");
  const [collec21, setcollect21] = useState([]);
  const [modal21, setmodal21] = useState(false);
  const [idholder, setiddholde21] = useState(0);
  const [edit21, setedit21] = useState("");
  const [currentpage, setcurrentpage] = useState(0);
  const [postperpage, setpostperpage] = useState(5);

  const handlesubmit21 = (e) => {
    e.preventDefault();
    setcollect21([...collec21, { name21, id: Math.random() }]);
  };

  const delete21 = (id) => {
    const neware = collec21.filter((e) => e.id !== id);
    setcollect21(neware);
  };

  const openmodal21 = (id) => {
    setiddholde21(id);
    setmodal21(true);
  };

  const handleedit21 = (e) => {
    e.preventDefault();
    const x = collec21.map((e) =>
      e.id === idholder ? { ...e, name21: edit21 } : e
    );
    setcollect21(x);
  };

  const indexoflast = currentpage * postperpage;
  const indexoffirst = indexoflast - postperpage;
  const posts = collec21.slice(indexoffirst, indexoflast);

  const pagenum = [];
  for (let i = 1; i <= Math.ceil(collec21.length / postperpage); i++) {
    pagenum.push(i);
  }

  return (
    <div>
      <h1>TODO21</h1>

      <form action="submit" onSubmit={handlesubmit21}>
        <input
          type="text"
          value={name21}
          onChange={(e) => {
            setname21(e.target.value);
          }}
        />
      </form>

      {modal21 && (
        <form action="submit" onSubmit={handleedit21}>
          <input
            type="text"
            value={edit21}
            onChange={(e) => {
              setedit21(e.target.value);
            }}
          />
        </form>
      )}

      {posts.map((e) => (
        <div key={e.id}>
          {e.name21}{" "}
          <button
            onClick={() => {
              delete21(e.id);
            }}>
            del
          </button>
          <button
            onClick={() => {
              openmodal21(e.id);
            }}>
            edit
          </button>
        </div>
      ))}

      {pagenum.map((e) => (
        <div
          key={e}
          onClick={() => {
            setcurrentpage(e);
          }}>
          {e}
        </div>
      ))}
    </div>
  );
}

export default Todo21;
