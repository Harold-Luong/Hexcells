import React from "react";
import "../style/tool.scss";
import { nHex } from "./LogicFunc";
import { useState } from "react";
import { getToHex } from "./LetCheck";
const ToolHexCells = () => {
  console.log(nHex);
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
  const [idStartHex, setidStartHex] = useState("");
  const [numberHex, setnumberHex] = useState("");
  const handleSubmitCol = (event) => {
    event.preventDefault();
    genHexTopToBottomByNumberId(idStartHex, numberHex);
    event.target.reset();
  };
  const handleSubmitLeft = (event) => {
    event.preventDefault();
    genHexLeftToRightByNumberId(idStartHex, numberHex);
    event.target.reset();

    // set css in elemnent
  };
  const handleSubmitRight = (event) => {
    event.preventDefault();
    genHexRightToLeftByNumberId(idStartHex, numberHex);
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
  const genHexRightToLeftByNumberId = (idStartHex, numberhex) => {
    let idNum = parseInt(idStartHex);
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
  const genHexLeftToRightByNumberId = (idStartHex, numberhex) => {
    let idNum = parseInt(idStartHex);
    let strId;

    if (idNum % 2 !== 0) {
      for (let index = 0; index < parseInt(numberhex); index++) {
        strId = "id" + idNum;
        let ele = document.getElementById(strId);
        if (ele === null) break;
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
        if (ele === null) break;
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
      <button onClick={getToHex}>Generate</button>
      <table>
        <thead>
          <tr>
            <th>Gen Col hex</th>
            <th>Gen Col hex from Left to Right</th>
            <th>Gen Col hex from Right to Left</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <form onSubmit={handleSubmitCol}>
                <input
                  type="number"
                  id="idStartHex"
                  name="idStartHex"
                  placeholder="Id start hex"
                  // value={idStartHex}
                  onChange={(event) => setidStartHex(event.target.value)}
                />

                <br />

                <input
                  type="number"
                  id="numberHex"
                  name="numberHex"
                  placeholder="Number hex"
                  // value={numberHex}
                  onChange={(event) => setnumberHex(event.target.value)}
                />
                <input
                  type="hidden"
                  name="position"
                  id="position"
                  value="left"
                />

                <br />

                <button type="submit">Submit</button>
              </form>
              <br /> <br /> <br />
            </td>
            <td>
              <form onSubmit={handleSubmitLeft}>
                <input
                  type="number"
                  id="idStartHex"
                  name="idStartHex"
                  placeholder="Id start hex"
                  // value={idStartHex}
                  onChange={(event) => setidStartHex(event.target.value)}
                />

                <br />

                <input
                  type="number"
                  id="numberHex"
                  name="numberHex"
                  placeholder="Number hex"
                  // value={numberHex}
                  onChange={(event) => setnumberHex(event.target.value)}
                />
                <input type="hidden" name="position" id="position" />

                <br />

                <button type="submit">Submit</button>
              </form>
              <br /> <br /> <br />
            </td>
            <td>
              <form onSubmit={handleSubmitRight}>
                <input
                  type="number"
                  id="idStartHex"
                  name="idStartHex"
                  placeholder="Id start hex"
                  // value={idStartHex}
                  onChange={(event) => setidStartHex(event.target.value)}
                />

                <br />

                <input
                  type="number"
                  id="numberHex"
                  name="numberHex"
                  placeholder="Number hex"
                  // value={numberHex}
                  onChange={(event) => setnumberHex(event.target.value)}
                />
                <input
                  type="hidden"
                  name="position"
                  id="position"
                  value="left"
                />

                <br />

                <button type="submit">Submit</button>
              </form>
              <br /> <br /> <br />
            </td>
          </tr>
        </tbody>
      </table>

      <div className="honeycomb">
        <div className="ibws-fix">
          {arrObjHex.map((item) => {
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
