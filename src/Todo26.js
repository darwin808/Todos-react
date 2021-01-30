import React, { useState } from "react";

export default function Todo26() {
  const [name26, setname26] = useState("");
  const [collect26, setcollect26] = useState([]);
  const [edit26, setedit26] = useState("");
  const [modal, setmodal] = useState(false);
  const [idholder, setidholder] = useState(0);
  const [currentpage, setcurrentpage] = useState(1);
  const [postperpage, setpostperpage] = useState(5);

  const handlesubmit = (e) => {
    e.preventDefault();
    setcollect26([{ name26, id: Math.random() }, ...collect26]);
  };

  const del26 = (id) => {
    const neware = collect26.filter((e) => e.id !== id);
    setcollect26(neware);
  };

  const openmodal = (id) => {
    setidholder(id);
    setmodal(true);
  };

  const handleedit = (e) => {
    e.preventDefault();
    const x = collect26.map((e) =>
      e.id === idholder ? { ...e, name26: edit26 } : e
    );
    setcollect26(x);
  };

  const indexoflast = currentpage * postperpage;
  const indexoffirst = indexoflast - postperpage;
  const posts = collect26.slice(indexoffirst, indexoflast);

  const pagenum = [];
  for (let i = 1; i <= Math.ceil(collect26.length / postperpage); i++) {
    pagenum.push(i);
  }
  return (
    <div className="Todo26">
      <h1>TODO26</h1>

      <form action="submit" onSubmit={handlesubmit}>
        <input
          type="text"
          value={name26}
          onChange={(e) => {
            setname26(e.target.value);
          }}
        />
      </form>

      {modal && (
        <form action="submit" onSubmit={handleedit}>
          <input
            type="text"
            value={edit26}
            onChange={(e) => {
              setedit26(e.target.value);
            }}
          />
        </form>
      )}

      {posts.map((e) => (
        <div key={e.id}>
          {e.name26}{" "}
          <button
            onClick={() => {
              del26(e.id);
            }}>
            del
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
          }}
          key={e}>
          {e}
        </div>
      ))}
    </div>
  );
}
