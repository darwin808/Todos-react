import React, { useState } from "react";

function Todo29() {
  const [name29, setname29] = useState("");
  const [collect29, setcollect29] = useState([]);
  const [edit29, setedit29] = useState("");
  const [modal, setmodal] = useState(false);
  const [idholder, setidholder] = useState(0);
  const [currentpage, setcurrentpage] = useState(1);
  const [postperpage, setpostperpage] = useState(5);

  const handlesubmit29 = (e) => {
    e.preventDefault();
    setcollect29([...collect29, { name29, id: Math.random() }]);
  };

  const delete29 = (id) => {
    const newarr = collect29.filter((e) => e.id !== id);
    setcollect29(newarr);
  };

  const openmodal = (id) => {
    setidholder(id);
    setmodal(true);
  };

  const handleedit = (e) => {
    e.preventDefault();
    const x = collect29.map((e) =>
      e.id === idholder ? { ...e, name29: edit29 } : e
    );
    setcollect29(x);
  };

  const indexofLast = currentpage * postperpage;
  const indexofFirst = indexofLast - postperpage;
  const posts = collect29.slice(indexofFirst, indexofLast);

  const pagenum = [];
  for (let i = 1; i <= Math.ceil(collect29.length / postperpage); i++) {
    pagenum.push(i);
  }

  return (
    <div>
      <h1>TODO29</h1>

      <form action="submit" onSubmit={handlesubmit29}>
        <input
          type="text"
          value={name29}
          onChange={(e) => {
            setname29(e.target.value);
          }}
        />
      </form>

      {modal && (
        <form action="submit" onSubmit={handleedit}>
          <input
            type="text"
            value={edit29}
            onChange={(e) => {
              setedit29(e.target.value);
            }}
          />
        </form>
      )}

      {posts.map((e) => (
        <div key={e.di}>
          {e.name29}{" "}
          <button
            onClick={() => {
              delete29(e.id);
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

export default Todo29;
