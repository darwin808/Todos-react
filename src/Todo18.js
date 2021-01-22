import React, { useState } from "react";

const Todo18 = () => {
  const [name18, setname18] = useState("");
  const [collect18, setcollect18] = useState([]);
  const [modal, setmodal] = useState(false);
  const [idholder, setidholder] = useState(0);
  const [edit18, setedit18] = useState("");
  const [currentpage, setcurrentpage] = useState(1);
  const [postperpage] = useState(10);

  const handlesubmit18 = (e) => {
    e.preventDefault();
    setcollect18([{ name18, id: Math.random() }, ...collect18]);
  };
  const dele18 = (id) => {
    const neware = collect18.filter((e) => e.id !== id);
    setcollect18(neware);
  };

  const openmodal = (id) => {
    setidholder(id);
    setmodal(true);
  };

  const handleedit18 = (e) => {
    e.preventDefault();
    const x = collect18.map((e) =>
      e.id === idholder ? { ...e, name18: edit18 } : e
    );

    setcollect18(x);
  };

  //////////////////******~~*******PAGINATION*******~~****** ///////////////////////////////////

  ///////~~8~*~*~*~*~*~*~*~*~ DISPLAY ITEMS PER PAGE *~*~*~*~*~*~*~*~**~///////////
  const indexoflast = currentpage * postperpage;
  const indexoffirst = indexoflast - postperpage;
  const currentpost = collect18.slice(indexoffirst, indexoflast);

  ////////*~*~*~*~*~*~*~*~*~*~ DISPLAY PAGE NUMBER*~*~**~*~*~*~*~*~*~*~*~//////////////
  const pagenum = [];
  for (let i = 1; i <= Math.ceil(collect18.length / postperpage); i++) {
    pagenum.push(i);
  }
  const renderpagnum = pagenum.map((e) => (
    <div
      onClick={() => {
        gotopage(e);
      }}>
      {e}
    </div>
  ));

  //////////~*~**~*~*~*~*~*~*~ GOTO PAGE*~*~*~**~*~*~*~*~*~*~*~*~*//////////////////////
  const gotopage = (e) => {
    setcurrentpage(e);
  };

  return (
    <div>
      <h1>TODO18</h1>
      {renderpagnum}

      <form action="submit" onSubmit={handlesubmit18}>
        <input
          type="text"
          value={name18}
          onChange={(e) => {
            setname18(e.target.value);
          }}
        />
      </form>

      {modal && (
        <form action="submit" onSubmit={handleedit18}>
          <input
            type="text"
            value={edit18}
            onChange={(e) => {
              setedit18(e.target.value);
            }}
          />
        </form>
      )}

      {currentpost.map((e) => (
        <div key={e.id}>
          {e.name18}{" "}
          <button
            onClick={() => {
              dele18(e.id);
            }}>
            DEL
          </button>
          <button
            onClick={() => {
              openmodal(e.id);
            }}>
            edit
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todo18;
