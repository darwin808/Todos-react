import React, { useState } from "react";

const Todo20 = () => {
  const [name20, setname20] = useState("");
  const [collect20, setcollect20] = useState([]);
  const [edit20, setedit20] = useState("");
  const [idholder, setidholder] = useState(0);
  const [modal20, setmodal20] = useState(false);
  const [currentpage, setcurrentpage] = useState(1);
  const [postperpage, setpostperpage] = useState(5);

  const handlesubmit20 = (e) => {
    e.preventDefault();
    setcollect20([...collect20, { name20, id: Math.random() }]);
  };

  const dele20 = (id) => {
    const neware = collect20.filter((e) => e.id !== id);

    setcollect20(neware);
  };

  const openmodal20 = (id) => {
    setidholder(id);
    setmodal20(true);
  };

  const handleedit20 = (e) => {
    e.preventDefault();
    const x = collect20.map((e) =>
      e.id === idholder ? { ...e, name20: edit20 } : e
    );
    setcollect20(x);
  };

  const indexoflast = currentpage * postperpage;
  const indexoffirst = indexoflast - postperpage;
  const posts = collect20.slice(indexoffirst, indexoflast);

  const pagenum = [];
  for (let i = 1; i <= Math.ceil(collect20.length / postperpage); i++) {
    pagenum.push(i);
  }

  return (
    <div>
      <h1>TODO20</h1>

      <form action="submit" onSubmit={handlesubmit20}>
        <input
          type="text"
          value={name20}
          onChange={(e) => {
            setname20(e.target.value);
          }}
        />
      </form>

      {modal20 && (
        <form action="submit" onSubmit={handleedit20}>
          <input
            type="text"
            value={edit20}
            onChange={(e) => {
              setedit20(e.target.value);
            }}
          />
        </form>
      )}

      {posts.map((e) => (
        <div key={e.id}>
          {e.name20}{" "}
          <button
            onClick={() => {
              dele20(e.id);
            }}>
            delete
          </button>
          <button
            onClick={() => {
              openmodal20(e.id);
            }}>
            EDIT
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

export default Todo20;
