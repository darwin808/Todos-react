import React, { useState } from "react";

const Todo23 = () => {
  const [name22, setname22] = useState("");
  const [collec22, setcollec22] = useState([]);
  const [edit22, setedit22] = useState("");
  const [idholdder22, setidholdder22] = useState(0);
  const [modal22, setModal22] = useState(false);
  const [currentpage, setcurrentpage] = useState(1);
  const [postperpage, setpostperpage] = useState(5);
  const handlesubmit22 = (e) => {
    e.preventDefault();
    setcollec22([{ name22, id: Math.random() }, ...collec22]);
  };

  const delete22 = (id) => {
    const neware = collec22.filter((e) => e.id !== id);
    setcollec22(neware);
  };

  const openmodal = (id) => {
    setidholdder22(id);
    setModal22(true);
  };

  const handleedit22 = (e) => {
    e.preventDefault();
    const x = collec22.map((e) =>
      e.id === idholdder22 ? { ...e, name22: edit22 } : e
    );
    setcollec22(x);
  };

  const indexoflast = currentpage * postperpage;
  const indexoffirst = indexoflast - postperpage;
  const posts = collec22.slice(indexoffirst, indexoflast);

  const pageNum = [];
  for (let i = 1; i <= Math.ceil(collec22.length / postperpage); i++) {
    pageNum.push(i);
  }

  return (
    <div>
      <h1>TODO23</h1>
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

      {pageNum.map((e) => (
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

export default Todo23;
