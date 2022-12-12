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
  const [stateGenHex, setstateGenHex] = useState({
    idStartHex: null,
    numberHex: null,
    position: "",
  });
  const [stateObjHex, setStateObjHex] = useState(arrObjHex);
  // const [idStartHex, setidStartHex] = useState("");
  // const [numberHex, setnumberHex] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let idStartHex = event.target.idStartHex.value;
    let numberHex = event.target.numberHex.value;
    let position = event.target.position.value;

    setstateGenHex({
      idStartHex: idStartHex,
      numberHex: numberHex,
      position: position,
    });

    setMessage(
      `Col start id ${stateGenHex.idStartHex} and has ${stateGenHex.numberHex} hex!`
    );
    // setidStartHex("");
    // setnumberHex("");
    // console.log(idStartHex, numberHex);

    // genHexTopToBottomByNumberId(idStartHex, numberHex);
    // genHexRightToLeftByNumberId(idStartHex, numberHex);
    // genHexLeftToRightByNumberId(idStartHex, numberHex);
    console.log(stateGenHex);
    event.target.reset();
  };
  const genHexTopToBottomByNumberId = (idStartHex, numberhex) => {
    let idNum = parseInt(idStartHex);
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

  //gen theo duong cheo phai qua trai
  const genHexRightToLeftByNumberId = (evenNumberId, numberhex) => {
    let idNum = parseInt(evenNumberId);
    let strId;
    console.log("numberhex", numberhex);
    if (idNum % 2 !== 0) {
      for (let index = 0; index < parseInt(numberhex); index++) {
        strId = "id" + idNum;
        let ele = document.getElementById(strId);
        if (ele === null) return;
        if (index % 2 !== 0) {
          ele.style.backgroundColor = "hsl(46, 100%, 46%)";
          ele.style.visibility = "visible";
          idNum -= 1;
        } else {
          ele = document.getElementById(strId);
          ele.style.backgroundColor = "hsl(46, 100%, 46%)";
          ele.style.visibility = "visible";
          idNum += 51;
        }
      }
    } else {
      for (let index = 0; index < parseInt(numberhex); index++) {
        strId = "id" + idNum;
        let ele = document.getElementById(strId);
        if (ele === null) return;
        if (index % 2 === 0) {
          ele.style.backgroundColor = "hsl(46, 100%, 46%)";
          ele.style.visibility = "visible";
          idNum -= 1;
        } else {
          ele = document.getElementById(strId);
          ele.style.backgroundColor = "hsl(46, 100%, 46%)";
          ele.style.visibility = "visible";
          idNum += 51;
        }
      }
    }
  };
  //gen theo duong cheo trai qua phai
  const genHexLeftToRightByNumberId = (evenNumberId, numberhex) => {
    let idNum = parseInt(evenNumberId);
    let strId;
    console.log("numberhex", numberhex);
    if (idNum % 2 !== 0) {
      for (let index = 0; index < parseInt(numberhex); index++) {
        strId = "id" + idNum;
        let ele = document.getElementById(strId);
        if (ele === null) return;
        if (index % 2 !== 0) {
          ele.style.backgroundColor = "hsl(46, 100%, 46%)";
          ele.style.visibility = "visible";
          idNum += 1;
        } else {
          ele = document.getElementById(strId);
          ele.style.backgroundColor = "hsl(46, 100%, 46%)";
          ele.style.visibility = "visible";
          idNum += 53;
        }
      }
    } else {
      for (let index = 0; index < parseInt(numberhex); index++) {
        strId = "id" + idNum;
        let ele = document.getElementById(strId);
        if (ele === null) return;
        if (index % 2 === 0) {
          ele.style.backgroundColor = "hsl(46, 100%, 46%)";
          ele.style.visibility = "visible";
          idNum += 1;
        } else {
          ele = document.getElementById(strId);
          ele.style.backgroundColor = "hsl(46, 100%, 46%)";
          ele.style.visibility = "visible";
          idNum += 53;
        }
      }
    }
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Gen Col hex</th>
            <th>Gen Col hex from Right to Left</th>
            <th>Gen Col hex from Left to Right</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <form onSubmit={handleSubmit}>
                <input
                  type="number"
                  id="idStartHex"
                  name="idStartHex"
                  placeholder="Id start hex"
                />

                <br />

                <input
                  type="number"
                  id="numberHex"
                  name="numberHex"
                  placeholder="Number hex"
                />
                <input
                  type="hidden"
                  name="position"
                  id="position"
                  value="left"
                />

                <br />

                <button type="submit">Submit</button>
                <h2>{message}</h2>
              </form>
              <br /> <br /> <br />
            </td>
            {/* <td>
              <form onSubmit={handleSubmit}>
                <input
                  type="number"
                  id="idStartHex"
                  name="idStartHex"
                  value={idStartHex}
                  placeholder="Id start hex"
                  onChange={(event) => setidStartHex(event.target.value)}
                />

                <br />

                <input
                  type="number"
                  id="numberHex"
                  name="numberHex"
                  value={numberHex}
                  placeholder="Number hex"
                  onChange={(event) => {
                    setnumberHex(event.target.value);
                  }}
                />

                <br />

                <button type="submit">Submit</button>

                <br />
                <br />

                <h2>{message}</h2>
              </form>
            </td> */}
            {/* <td>
              <form onSubmit={handleSubmit}>
                <input
                  type="number"
                  id="idStartHex"
                  name="idStartHex"
                  value={idStartHex}
                  placeholder="Id start hex"
                  onChange={(event) => setidStartHex(event.target.value)}
                />

                <br />

                <input
                  type="number"
                  id="numberHex"
                  name="numberHex"
                  value={numberHex}
                  placeholder="Number hex"
                  onChange={(event) => {
                    setnumberHex(event.target.value);
                  }}
                />

                <br />

                <button type="submit">Submit</button>

                <br />
                <br />

                <h2>{message}</h2>
              </form>
            </td> */}
          </tr>
        </tbody>
      </table>

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
