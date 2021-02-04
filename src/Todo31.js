import React, { useState } from "react";
import jasonData from "./MOCK_DATA.json";
function Todo31() {
  const [serch, setserch] = useState("");
  const [name31, setname31] = useState("");
  const [collect31, setcollect31] = useState([]);
  const [edit31, setedit31] = useState("");
  const [modal, setmodal] = useState(false);
  const [idholder, setidholder] = useState(0);

  const [currpage, setcurrpage] = useState(1);
  const [postperpage, setpostperpage] = useState(5);

  const handlesubmit31 = (e) => {
    e.preventDefault();
    setcollect31([...collect31, { name31, id: Math.random() }]);
  };
  const delete31 = (id) => {
    const newarr = collect31.filter((e) => e.id !== id);
    setcollect31(newarr);
  };
  const opemodal = (id) => {
    setmodal(true);
    setidholder(id);
  };
  const handleedit31 = (e) => {
    e.preventDefault();
    const x = collect31.map((e) =>
      e.id === idholder ? { ...e, name31: edit31 } : e
    );
    setcollect31(x);
  };
  const indexOfLast = currpage * postperpage;
  const indexOfFirst = indexOfLast - postperpage;
  const posts = collect31.slice(indexOfFirst, indexOfLast);

  const pagenum = [];
  for (let i = 1; i <= Math.ceil(collect31.length / postperpage); i++) {
    pagenum.push(i);
  }

  return (
    <div>
      <h1>todo31</h1>

      <input
        placeholder="SEARCHH>>>>>>>
      "
        type="text"
        value={serch}
        onChange={(e) => {
          setserch(e.target.value);
        }}
      />

      <form action="submit" onSubmit={handlesubmit31}>
        <input
          type="text"
          value={name31}
          onChange={(e) => {
            setname31(e.target.value);
          }}
        />
      </form>
      {modal && (
        <form action="submit" onSubmit={handleedit31}>
          <input
            type="text"
            value={edit31}
            onChange={(e) => {
              setedit31(e.target.value);
            }}
          />
        </form>
      )}
      {collect31.map((e) => (
        <div key={e.id}>
          {e.name31}{" "}
          <button
            onClick={() => {
              delete31(e.id);
            }}>
            dlete
          </button>
          <button
            onClick={() => {
              opemodal(e.id);
            }}>
            edit
          </button>
        </div>
      ))}
      {pagenum.map((e) => (
        <div key={e}>{e}</div>
      ))}

      {jasonData
        .filter((e) => e.first_name.toLowerCase().includes(serch.toLowerCase()))
        .map((e) => (
          <div>{e.first_name}</div>
        ))}
    </div>
  );
}

export default Todo31;
