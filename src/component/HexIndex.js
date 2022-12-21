import React from "react";
import {
  kq,
  blue_node_default,
  black_node_default,
  objHex,
  map_hex_none,
  default_number_top,
  default_number_left,
  default_number_right,
  mapALL,
} from "../contains";
import { useState } from "react";
import "../style/index.scss";
import "../style/togglebutton.scss";
const Index = () => {
  let arrObjHex = [];
  //add arrObjHex
  for (let index = 1; index < 613; index++) {
    if (!mapALL().has(index) || map_hex_none.has(index)) {
      arrObjHex.push({
        ...objHex,
        id: index,
        class_hex_none: "hexanone",
        hexagontent: {
          ...objHex.hexagontent,
          id_content: "c" + index,
        },
      });
    } else {
      arrObjHex.push({
        ...objHex,
        id: index,
        style_color: " hsl(46, 100%, 46%)",
        hexagontent: {
          ...objHex.hexagontent,
          id_content: "c" + index,
          content: mapALL().get(index),
        },
      });
    }
  }
  const [stateObjHex, setStateObjHex] = useState(arrObjHex);
  const [point, setPoint] = useState({
    mistakes: 0,
    remaining: 147,
  });
  //set state, change element's css property
  const handleSetStateObjhex = (color, positionCurrentId) => {
    setStateObjHex(
      [...stateObjHex],
      (stateObjHex.at(positionCurrentId).style_color = color),
      (stateObjHex.at(positionCurrentId).status_check_click = true),
      (stateObjHex.at(positionCurrentId).hexagontent.style_visibility =
        "visible")
    );
  };
  const handleClick = (event) => {
    // prevent context menu from opening on right-click
    event.preventDefault();
    let currentId = event.nativeEvent.srcElement.id;
    let positionCurrentId = currentId - 1;
    const objHexagontent = stateObjHex[positionCurrentId].hexagontent;
    switch (event.nativeEvent.button) {
      //Left click (synthetic event)
      case 0:
        // /stateObjHex[positionCurrentId].status_check_click === false
        let checkID = kq().includes(parseInt(currentId));
        setidStartHexStart(currentId);
        console.log(currentId, checkID);
        if (objHexagontent.content === undefined || checkID) {
          setPoint({ ...point, remaining: --point.remaining });
        } else {
          setPoint({ ...point, mistakes: ++point.mistakes });
          handleClickHexagon(currentId);
        }
        handleSetStateObjhex("rgb(0, 116, 170", positionCurrentId);

        break;
      //Right click (synthetic event)
      case 2:
        //stateObjHex[positionCurrentId].status_check_click === false

        if (objHexagontent.content === undefined) {
          setPoint({ ...point, mistakes: ++point.mistakes });
          handleClickHexagon(currentId);
        }
        handleSetStateObjhex("black", positionCurrentId);
        handleClickHexagon(currentId);

        break;
      default:
        alert("Right or left click!");
        break;
    }
  };
  //add buzz effect
  const handleClickHexagon = (id) => {
    let element = document.getElementById(id);
    element.classList.add("buzz");
  };

  //check box
  const [isChangeColor, setisChangeColor] = useState(false);
  const handleChange = (event) => {
    const inner = document.querySelectorAll(".hexagon");
    const ele = document.querySelectorAll(".hexagon > .hexagontent ");
    if (event.target.checked) {
      setPoint({ mistakes: 0, remaining: 147 });
      //hex
      inner.forEach((element) => {
        element.style.backgroundColor = "rgb(0, 116, 170)";
        const id = parseInt(element.id);
        if (!kq().includes(id)) {
          element.classList.add("black_node");
        }
      });
      //content
      ele.forEach((element) => {
        element.style.visibility = "visible";
      });
    }
    //xy ly blue
    else {
      setPoint({ mistakes: 0, remaining: 147 });
      inner.forEach((element) => {
        element.style.backgroundColor = "unset";
        if (element.id !== "318") {
          element.classList.remove("black_node");
        }
        if (!blue_node_default.has(parseInt(element.id))) {
          element.classList.remove("blue_node");
        }
        element.style = "";
        if (element.style.backgroundColor !== "") {
          element.style.backgroundColor = "hsl(46, 100%, 46%)";
        }
      });
      ele.forEach((element) => {
        element.style.visibility = "hidden";
        if (element.classList.length === 2) {
          element.style.visibility = "visible";
        }
      });
    }
    setisChangeColor((current) => !current);
  };
  //form submit
  const [idStart, setidStartHexStart] = useState("");
  const [top, setidStartHexTop] = useState("");
  const [left, setidStartHexLeft] = useState("");
  const handleSubmitCol = (event) => {
    event.preventDefault();
    genTop(idStart, top);
    setidStartHexTop("");
    event.target.reset();
  };
  const handleSubmitColLeft = (event) => {
    event.preventDefault();
    genHexLeftToRightByNumberId(idStart, left);
    setidStartHexLeft("");

    event.target.reset();
  };
  //gen line top
  const genTop = (idStartHex, numberhex) => {
    let idNum = parseInt(idStartHex);
    let strId = idNum;
    let count = 0;
    while (count < parseInt(numberhex)) {
      const elem = document.getElementById(strId);
      if (elem === null) break;
      elem.style.backgroundColor = "rgb(0, 116, 170)";
      elem.style.visibility = "visible";
      strId = idNum;
      count++;
      //------------
      const inner = document.querySelectorAll(".hexagon");
      inner.forEach((element) => {
        const id = parseInt(element.id);
        if (strId == element.id) {
          element.style.backgroundColor = "rgb(0, 116, 170)";
          if (!kq().includes(id)) {
            element.classList.add("black_node");
          } else {
            element.classList.add("blue_node");
          }
        }
      });
      idNum += 36;
    }
  };
  //gen line left
  const genHexLeftToRightByNumberId = (idStartHex, numberhex) => {
    let idNum = parseInt(idStartHex);
    if (idNum % 2 !== 0) {
      for (let index = 0; index < parseInt(numberhex); index++) {
        let ele = document.getElementById(idNum);
        console.log(ele);
        if (ele === null) break;
        if (idNum % 2 !== 0) {
          if (kq().includes(idNum)) {
            ele.classList.add("blue_node");
          } else {
            ele.classList.add("black_node");
          }
          idNum += 1;
        } else {
          ele = document.getElementById(idNum);
          if (kq().includes(idNum)) {
            ele.classList.add("blue_node");
          } else {
            ele.classList.add("black_node");
          }
          idNum += 37;
        }
      }
    } else {
      for (let index = 0; index < parseInt(numberhex); index++) {
        let ele = document.getElementById(idNum);
        console.log(ele);
        if (ele === null) break;
        if (idNum % 2 !== 0) {
          if (kq().includes(idNum)) {
            ele.classList.add("blue_node");
          } else {
            ele.classList.add("black_node");
          }
          idNum += 1;
        } else {
          ele = document.getElementById(idNum);
          if (kq().includes(idNum)) {
            ele.classList.add("blue_node");
          } else {
            ele.classList.add("black_node");
          }
          idNum += 37;
        }
      }
    }
  };

  return (
    <div id="content">
      <div className="point">
        <div className="remaining">
          REMAINING
          <h2 id="number-remaining">{point.remaining}</h2>
        </div>
        <br />
        <div className="mistakes" style={{ marginTop: "10px" }}>
          MISTAKES
          <h2 id="number-mistakes">{point.mistakes}</h2>
        </div>
        <br></br>
      </div>
      {/* --------------- */}
      <div className="honeycomb">
        <table>
          <tbody>
            <tr>
              <td>
                Top to bottom
                <form onSubmit={handleSubmitCol}>
                  <input
                    disabled
                    className="inputHex"
                    type="number"
                    id="left"
                    name="left"
                    placeholder="id hex onclick"
                    value={idStart}
                    onChange={(event) => setidStartHexStart(event.target.value)}
                  />{" "}
                  <input
                    className="inputHex"
                    type="number"
                    id="top"
                    name="top"
                    placeholder="number hex open"
                    value={top}
                    onChange={(event) => setidStartHexTop(event.target.value)}
                  />{" "}
                  <button type="submit">Submit</button>
                </form>
              </td>
              <td>
                Left to bottom
                <form onSubmit={handleSubmitColLeft}>
                  <input
                    className="inputHex"
                    type="number"
                    id="left"
                    name="left"
                    placeholder="number hex open"
                    value={left}
                    onChange={(event) => setidStartHexLeft(event.target.value)}
                  />{" "}
                  <button type="submit">Submit</button>
                </form>
              </td>
            </tr>
          </tbody>
        </table>
        <hr />
        <div>
          <p>Show result</p>

          <label className="switch">
            <input
              type="checkbox"
              id="togBtn"
              value={isChangeColor}
              onChange={handleChange}
              name="togBtn"
            />
            <div className="slider round"></div>
          </label>
        </div>
        <hr />
      </div>
      <div className="honeycomb">
        <div className="ibws-fix">
          {stateObjHex.map((item) => {
            return (
              <div
                key={item.id}
                onClick={handleClick}
                onContextMenu={handleClick}
                style={{ backgroundColor: `${item.style_color}` }}
                className={
                  item.main_class +
                  " " +
                  item.class_hex_none +
                  `${blue_node_default.has(item.id) ? "blue_node" : ""}` +
                  " " +
                  `${black_node_default.has(item.id) ? "black_node" : ""}`
                }
                id={item.id}
              >
                <div
                  id={item.hexagontent.id_content}
                  style={{ visibility: `${item.hexagontent.style_visibility}` }}
                  className={
                    item.hexagontent.class_content +
                    `${
                      default_number_right.has(item.id) ? " df-num-right" : ""
                    }` +
                    `${
                      default_number_left.has(item.id) ? " df-num-left" : ""
                    }` +
                    `${default_number_top.has(item.id) ? " df-num" : ""}`
                  }
                >
                  {item.hexagontent.content}
                  {default_number_left.get(item.id)}
                  {default_number_right.get(item.id)}
                  {default_number_top.get(item.id)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Index;
