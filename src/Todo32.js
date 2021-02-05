import React, { useState } from "react";
import mockData from "./MOCK_DATA.json";

function Todo32() {
  const [name32, setname32] = useState("");
  const [collect32, setcollect32] = useState([]);
  const [edit32, setedit32] = useState("");
  const [modal, setmodal] = useState(false);
  const [idholder, setidholder] = useState(0);
  const [currentpage, setcurrentpage] = useState(1);
  const [postperpage, setpostperpage] = useState(5);
  const [serch, setserch] = useState("");

  const handlesubmit32 = (e) => {
    e.preventDefault();
    setcollect32([...collect32, { name32, id: Math.random() }]);
  };
  const del32 = (id) => {
    const newarr = collect32.filter((e) => e.id !== id);
    setcollect32(newarr);
  };
  const openmodal = (id) => {
    setidholder(id);
    setmodal(true);
  };
  const handleedit32 = (e) => {
    e.preventDefault();
    const x = collect32.map((e) =>
      e.id === idholder ? { ...e, name32: edit32 } : e
    );
    setcollect32(x);
  };
  const indexOfLast = currentpage * postperpage;
  const indexOfFirst = indexOfLast - postperpage;
  const posts = collect32.slice(indexOfFirst, indexOfLast);

  const pagenum = [];
  for (let i = 1; i <= Math.ceil(collect32.length / postperpage); i++) {
    pagenum.push(i);
  }
  return (
    <div>
      <h1>TODO32</h1>
      <input
        type="text"
        value={serch}
        placeholder="SEARCH..."
        onChange={(e) => {
          setserch(e.target.value);
        }}
      />
      <form action="submit" onSubmit={handlesubmit32}>
        <input
          type="text"
          value={name32}
          onChange={(e) => {
            setname32(e.target.value);
          }}
        />
      </form>
      {modal && (
        <form action="submit" onSubmit={handleedit32}>
          <input
            type="text"
            value={edit32}
            onChange={(e) => {
              setedit32(e.target.value);
            }}
          />
        </form>
      )}
      {collect32.map((e) => (
        <div key={e.id}>
          {e.name32}{" "}
          <button
            onClick={() => {
              del32(e.id);
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
      {mockData
        .filter((e) => e.first_name.toLowerCase().includes(serch.toLowerCase()))
        .map((e) => (
          <div key={e.id}>{e.first_name}</div>
        ))}
    </div>
  );
}

export default Todo32;
