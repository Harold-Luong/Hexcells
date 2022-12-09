import React from "react";
import "../style/tool.scss";

import { useState } from "react";
const ToolHexCells = () => {
  const totalHex = 1144;
  const objHex = {
    id: "",
    main_class: "hexagon",
    style_color: "",
    class_hex_none: "",
    status_check_click: false,

    hexagontent: {
      id_content: "",
      class_content: "hexagontent",
      style_visibility: "",
      content: "",
    },
  };
  let arrObjHex = [];
  //add arrObjHex
  for (let index = 0; index < totalHex; index++) {
    arrObjHex.push({
      ...objHex,
      id: "id" + index,
      hexagontent: {
        ...objHex.hexagontent,
        id_content: "cid" + index,
      },
    });
  }

  const [stateObjHex, setStateObjHex] = useState(arrObjHex);
  const [colHex, setcolHex] = useState("");
  const [rowHex, setrowHex] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setMessage(`Col start id ${colHex} and has ${rowHex} hex!`);
    setcolHex("");
    setrowHex("");
    evenNumberId(colHex, rowHex);
    // genHexCol(colHex, rowHex);
    event.target.reset();
  };
  const genHexCol = (colHex, numberhex) => {
    let idNum = parseInt(colHex);
    let strId = "id" + idNum;
    let count = 0;
    while (count < parseInt(numberhex)) {
      const ele = document.getElementById(strId);
      if (ele === null) break;
      ele.style.backgroundColor = "hsl(46, 100%, 46%)";
      ele.style.visibility = "visible";
      idNum += 52;
      strId = "id" + idNum;
      count++;
    }
  };
  const genHexDiagonal = (diagonalHex, numberhex) => {
    let idNum = parseInt(diagonalHex);
    let strId = "id" + idNum;
    let count = 0;
    while (count < parseInt(numberhex)) {
      const ele = document.getElementById(strId);
      if (ele === null) break;
      if (idNum % 2 === 0) {
      } else {
      }
      ele.style.backgroundColor = "hsl(46, 100%, 46%)";
      ele.style.visibility = "visible";
      idNum += 52;
      strId = "id" + idNum;
      count++;
    }
  };
  //so chan
  const evenNumberId = (evenNumberId, numberhex) => {
    let idNum = parseInt(evenNumberId);
    let strId = "id" + idNum;
    let count = 0;
    let chan = false;

    while (count < parseInt(numberhex)) {
      console.log(count);
      if (chan === false) {
        count++;
        console.log(strId);
        const ele = document.getElementById(strId);
        if (ele === null) break;
        ele.style.backgroundColor = "hsl(46, 100%, 46%)";
        ele.style.visibility = "visible";
        idNum -= 1;
        strId = "id" + idNum;
        chan = true;
      }

      if (chan === true) {
        count++;
        console.log(strId);
        const ele = document.getElementById(strId);
        if (ele === null) break;
        ele.style.backgroundColor = "hsl(46, 100%, 46%)";
        ele.style.visibility = "visible";
        idNum += 51;
        strId = "id" + idNum;
        chan = false;
      }
    }
  };
  // so le
  const oddNumberId = () => {};
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          id="colHex"
          name="colHex"
          value={colHex}
          placeholder="Col number hex"
          onChange={(event) => setcolHex(event.target.value)}
        />

        <br />

        <input
          type="number"
          id="rowHex"
          name="rowHex"
          value={rowHex}
          placeholder="Row number hex"
          onChange={(event) => {
            setrowHex(event.target.value);
          }}
        />

        <br />

        <button type="submit">Submit</button>

        <br />
        <br />

        <h2>{message}</h2>

        <br />
        <br />
        <br />
        <br />
      </form>

      <div className="honeycomb">
        <div className="ibws-fix">
          {stateObjHex.map((item) => {
            return (
              <div key={item.id} className={item.main_class} id={item.id}>
                <div
                  className={item.hexagontent.class_content}
                  id={item.hexagontent.id_content}
                >
                  {item.id.split("id", 3)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ToolHexCells;
