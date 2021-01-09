import React, { useState } from "react";

function Todo2() {
  const [name1, setname1] = useState("");
  const [collection1, setcollection1] = useState([]);
  const [showinput1, setshowinput1] = useState(false);
  const [editdata, seteditdata] = useState("");
  const [dataID, setdataID] = useState("");

  const handleSUbmit1 = (e) => {
    e.preventDefault();
    setcollection1([...collection1, { name1, id: Math.random() }]);
  };

  const handlechange1 = (e) => {
    setname1(e.target.value);
  };

  const deltodo1 = (id) => {
    const newarr1 = collection1.filter((e) => e.id !== id);
    setcollection1((collection1) => newarr1);
  };

  const showinputbox = (id) => {
    setshowinput1(true);
    setdataID(id);
  };

  const handleeditdata = (e) => {
    seteditdata(e.target.value);
  };

  const submiteditdata1 = (e) => {
    e.preventDefault();
    const x = collection1.map((e) =>
      e.id == dataID ? { ...collection1, name1: editdata } : e
    );

    setcollection1(x);
  };

  return (
    <div>
      <h1>TODO2</h1>
      <form action="submit" onSubmit={handleSUbmit1}>
        <input type="text" value={name1} onChange={handlechange1} />
      </form>

      <form action="submit" onSubmit={submiteditdata1}>
        {showinput1 ? (
          <input
            type="text"
            value={editdata}
            onChange={handleeditdata}
            placeholder="edit here...."
          />
        ) : null}
      </form>

      {collection1.map((e) => (
        <div key={e.id}>
          {e.name1} <button onClick={() => deltodo1(e.id)}>DEL</button>{" "}
          <button onClick={() => showinputbox(e.id)} key={e.id}>
            EDIT
          </button>
        </div>
      ))}
    </div>
  );
}

export default Todo2;
