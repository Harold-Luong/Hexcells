import React from "react";
import {
  result_blue,
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

const HexIndex = () => {
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
        style_color: "hsl(46, 100%, 46%)",
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
      (stateObjHex.at(positionCurrentId).style_color = color)
      // (stateObjHex.at(positionCurrentId).status_check_click = true)
      // (stateObjHex.at(positionCurrentId).hexagontent.style_visibility =
      //   "visible")
    );
  };
  const handleClick = (event) => {
    // prevent context menu from opening on right-click
    event.preventDefault();
    let currentId = event.nativeEvent.srcElement.id;
    let positionCurrentId = currentId - 1;
    if (stateObjHex[positionCurrentId] === undefined) return;
    const objHexagontent = stateObjHex[positionCurrentId].hexagontent;

    let checkID = result_blue().includes(parseInt(currentId));

    switch (event.nativeEvent.button) {
      //Left click (synthetic event)
      case 0:
        if (stateObjHex[positionCurrentId].status_check_click === false) {
          setidStartHexStart(currentId);

          if (objHexagontent.content === undefined || checkID) {
            setPoint({ ...point, remaining: --point.remaining });
            handleSetStateObjhex("rgb(0, 116, 170", positionCurrentId);
          } else {
            setPoint({ ...point, mistakes: ++point.mistakes });
            handleClickHexagon(currentId);
            handleSetStateObjhex("hsl(46, 100%, 46%)", positionCurrentId);
          }
        }
        //  handleSetStateObjhex("rgb(0, 116, 170", positionCurrentId);
        break;
      //Right click (synthetic event)
      case 2:
        if (stateObjHex[positionCurrentId].status_check_click === false) {
          if (objHexagontent.content === undefined || checkID === true) {
            setPoint({ ...point, mistakes: ++point.mistakes });
            handleSetStateObjhex("hsl(46, 100%, 46%)", positionCurrentId);
            handleClickHexagon(currentId);
          } else {
            handleSetStateObjhex("black", positionCurrentId);
          }
        }

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
    const ele = document.querySelectorAll(".hexagon > .hexagontent");
    //handle blue hex
    if (event.target.checked) {
      setPoint({ mistakes: 0, remaining: 147 });
      //hex
      inner.forEach((element) => {
        element.style.backgroundColor = "rgb(0, 116, 170)"; //blue
        const id = parseInt(element.id);
        if (!result_blue().includes(id)) {
          element.classList.add("black_node");
        }
      });
      //content
      ele.forEach((element) => {
        element.style.visibility = "visible";
      });
    }
    //handle yellow hex
    else {
      window.location.reload(false);
    }
    setisChangeColor((current) => !current);
  };
  //form submit
  const [idStart, setidStartHexStart] = useState("");
  const [top, setidStartHexTop] = useState("");
  const [left, setidStartHexLeft] = useState("");
  const [right, setidStartHexRight] = useState("");
  const [iputHidden, setIputHidden] = useState("");
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
  const handleSubmitColRight = (event) => {
    event.preventDefault();
    genHexRightToLeftByNumberId(idStart, right);
    setidStartHexRight("");
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
      //elem.style.backgroundColor = "rgb(0, 116, 170)";
      elem.style.visibility = "visible";
      strId = idNum;

      //------------
      const inner = document.querySelectorAll(".hexagon");
      inner.forEach((element) => {
        const id = parseInt(element.id);
        if (strId == element.id) {
          //  element.style.backgroundColor = "rgb(0, 116, 170)";
          // if (!result_blue().includes(id)) {
          //   element.classList.add("black_node");
          // } else {
          //   element.classList.add("blue_node");
          // }

          if (result_blue().includes(id) === true) {
            element.classList.add("blue_node");
            count++;
          }
        }
      });
      idNum += 36;
    }
  };
  //gen line left
  const genHexLeftToRightByNumberId = (idStartHex, numberhex) => {
    let idNum = parseInt(idStartHex);
    let count = 0;
    if (idNum % 2 !== 0 && count < numberhex) {
      while (count < numberhex) {
        let ele = document.getElementById(idNum);
        if (ele === null) break;
        if (idNum % 2 !== 0) {
          if (result_blue().includes(idNum)) {
            ele.classList.add("blue_node");
            count++;
          }
          // } else {
          //   ele.classList.add("black_node");
          // }
          idNum += 1;
        } else {
          ele = document.getElementById(idNum);
          if (result_blue().includes(idNum)) {
            ele.classList.add("blue_node");
            count++;
          }
          // } else {
          //   ele.classList.add("black_node");
          // }
          idNum += 37;
        }
      }
    } else {
      console.log(numberhex, count);
      while (count < numberhex) {
        console.log(count);
        let ele = document.getElementById(idNum);

        if (ele === null) break;
        if (idNum % 2 !== 0) {
          if (result_blue().includes(idNum)) {
            ele.classList.add("blue_node");
            ++count;
          }
          // else {
          //   //ele.classList.add("black_node");
          // }
          idNum += 1;
        } else {
          ele = document.getElementById(idNum);
          if (result_blue().includes(idNum)) {
            ele.classList.add("blue_node");
            ++count;
          }
          // else {
          //   // ele.classList.add("black_node");
          // }
          idNum += 37;
        }
      }
      for (let index = 0; index < parseInt(numberhex); index++) {
        let ele = document.getElementById(idNum);
        console.log(ele);
        if (ele === null) break;
        if (idNum % 2 !== 0) {
          if (result_blue().includes(idNum)) {
            ele.classList.add("blue_node");
          } else {
            //ele.classList.add("black_node");
          }
          idNum += 1;
        } else {
          ele = document.getElementById(idNum);
          if (result_blue().includes(idNum)) {
            ele.classList.add("blue_node");
          } else {
            // ele.classList.add("black_node");
          }
          idNum += 37;
        }
      }
    }
  };
  //gen line right
  const genHexRightToLeftByNumberId = (idStartHex, numberhex) => {
    let idNum = parseInt(idStartHex);
    let count = 0;
    if (idNum % 2 !== 0) {
      while (count < numberhex) {
        let ele = document.getElementById(idNum);
        if (ele === null) break;
        if (idNum % 2 !== 0) {
          if (result_blue().includes(idNum)) {
            count++;
            ele.classList.add("blue_node");
          }
          //  else {
          //   ele.classList.add("black_node");
          // }
          idNum -= 1;
        } else {
          ele = document.getElementById(idNum);
          if (result_blue().includes(idNum)) {
            count++;
            ele.classList.add("blue_node");
          }
          //  else {
          //   ele.classList.add("black_node");
          // }
          idNum += 35;
        }
      }
    } else {
      while (count < numberhex) {
        if (count == numberhex) break;
        let ele = document.getElementById(idNum);
        console.log(ele);
        if (ele === null) break;
        if (idNum % 2 == 0) {
          if (result_blue().includes(idNum)) {
            ele.classList.add("blue_node");
            ++count;
          }
          // else {
          //   ele.classList.add("black_node");
          // }
          idNum += 35;
        } else {
          ele = document.getElementById(idNum);
          if (result_blue().includes(idNum)) {
            ele.classList.add("blue_node");
            ++count;
          }
          //  else {
          //   ele.classList.add("black_node");
          // }
          idNum -= 1;
        }
        console.log(count);
      }
    }
  };
  //click number outside hex
  const handleClickDefault = (event) => {
    event.preventDefault();
    const id = parseInt(event.target.id.slice(1));

    document.getElementById(event.target.id).style.color = "white";
    if (default_number_top.has(id)) {
      setidStartHexStart(id);
      setidStartHexTop(document.getElementById(event.target.id).innerText);
    }
    if (default_number_left.has(id)) {
      setidStartHexStart(id);
      setidStartHexLeft(document.getElementById(event.target.id).innerText);
    }
    if (default_number_right.has(id)) {
      setidStartHexStart(id);
      setidStartHexRight(document.getElementById(event.target.id).innerText);
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
        <div className="mistakes">
          MISTAKES
          <h2 id="number-mistakes">{point.mistakes}</h2>
        </div>
        <br />
        <button
          className="reload"
          onClick={() => window.location.reload(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M5 18c4.667 4.667 12 1.833 12-4.042h-3l5-6 5 6h-3c-1.125 7.98-11.594 11.104-16 4.042zm14-11.984c-4.667-4.667-12-1.834-12 4.041h3l-5 6-5-6h3c1.125-7.979 11.594-11.104 16-4.041z" />
          </svg>
        </button>
        <br />
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
                    className="inputHex"
                    type="hidden"
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
                  <button type="submit">Show hex blue</button>
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
                  <button type="submit">Show hex blue</button>
                </form>
              </td>
              <td>
                Right to bottom
                <form onSubmit={handleSubmitColRight}>
                  <input
                    className="inputHex"
                    type="number"
                    id="right"
                    name="right"
                    placeholder="number hex open"
                    value={right}
                    onChange={(event) => setidStartHexRight(event.target.value)}
                  />{" "}
                  <button type="submit">Show hex blue</button>
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
                  onClick={handleClickDefault}
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

export default HexIndex;
