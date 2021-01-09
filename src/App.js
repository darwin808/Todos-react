import React, { useState } from "react";
import Todo3 from "./Todo3";
import Todo4 from "./Todo4";
import Todo5 from "./Todo5";

const App = () => {
  const [name, setname] = useState("");
  const [collection, setcollection] = useState([]);
  const [editname, seteditname] = useState("");
  const [showedit, setshowedit] = useState(false);
  const [editid, seteditid] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    setcollection([{ name, id: Math.random() }, ...collection]);
    setname("");
  };
  const handleChange = (e) => {
    setname(e.target.value);
  };

  const deletetodo = (id) => {
    const newarr = collection.filter((e) => e.id !== id);
    setcollection(newarr);
  };

  const handlesubmitedit = (e) => {
    e.preventDefault();
    console.log(editname);
    const x = collection.map((e) =>
      e.id == editid ? { ...e, name: editname } : e
    );
    console.log(x);
    setcollection(x);
    setshowedit(false);
  };
  const handleeditname = (e) => {
    seteditname(e.target.value);
  };

  const edittodo = (id) => {
    setshowedit(true);
    seteditid(id);
  };

  return (
    <div className="App">
      {/* <h1>TODOS</h1>

      <form action="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="add TODO..."
        />
      </form>

      {showedit == true ? (
        <form action="submit" onSubmit={handlesubmitedit}>
          <input
            type="text"
            value={editname}
            onChange={handleeditname}
            placeholder="edit here... "
          />
        </form>
      ) : null}

      {collection.map((e) => (
        <div key={e.id}>
          {e.name}
          <button
            onClick={() => {
              deletetodo(e.id);
            }}>
            DELETE
          </button>
          <button onClick={() => edittodo(e.id)}>EDIT</button>
        </div>
      ))} */}

      <Todo5 />
    </div>
  );
};

export default App;
