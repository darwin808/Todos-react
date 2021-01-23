import React, { useState } from "react";

const Todo19 = () => {
  const [name19, setname19] = useState("");
  const [collect19, setcollect19] = useState([]);
  const [edit19, setedit19] = useState("");
  const [idholder19, setidholder19] = useState(0);
  const [modal19, setmodal19] = useState(false);
  const [currenpage, setcurrentpage] = useState(1);
  const [postperpage, setpostperpage] = useState(5);

  const handlesubmit19 = (e) => {
    e.preventDefault();
    setcollect19([{ name19, id: Math.random() }, ...collect19]);
  };

  const delete19 = (id) => {
    const neware = collect19.filter((e) => e.id !== id);
    setcollect19(neware);
  };

  const openmodal = (id) => {
    setidholder19(id);
    setmodal19(true);
  };

  const handleedit19 = (e) => {
    e.preventDefault();
    const x = collect19.map((e) =>
      e.id === idholder19 ? { ...e, name19: edit19 } : e
    );
    setcollect19(x);
  };

  const indexoflast = currenpage * postperpage;
  const indexoffirst = indexoflast - postperpage;
  const currentposts = collect19.slice(indexoffirst, indexoflast);

  const pagenum = [];
  for (let i = 1; i <= Math.ceil(collect19.length / postperpage); i++) {
    pagenum.push(i);
  }

  return (
    <div>
      <h1>TODO19</h1>

      <form action="submit" onSubmit={handlesubmit19}>
        <input
          type="text"
          value={name19}
          onChange={(e) => {
            setname19(e.target.value);
          }}
        />
      </form>

      {modal19 && (
        <form action="submit" onSubmit={handleedit19}>
          <input
            type="text"
            value={edit19}
            onChange={(e) => {
              setedit19(e.target.value);
            }}
          />
        </form>
      )}

      {currentposts.map((e) => (
        <div key={e.id}>
          {e.name19}{" "}
          <button
            onClick={() => {
              delete19(e.id);
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
};

export default Todo19;
