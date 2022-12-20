import React from "react";
import {
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
        style_color: "rgb(0, 116, 170)",
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
        if (stateObjHex[positionCurrentId].status_check_click === false) {
          if (objHexagontent.content === undefined) {
            setPoint({ ...point, remaining: --point.remaining });
          } else {
            setPoint({ ...point, mistakes: ++point.mistakes });
            handleClickHexagon(currentId);
          }
          handleSetStateObjhex("rgb(0, 116, 170", positionCurrentId);
        }

        break;
      //Right click (synthetic event)
      case 2:
        if (stateObjHex[positionCurrentId].status_check_click === false) {
          if (objHexagontent.content === undefined) {
            setPoint({ ...point, mistakes: ++point.mistakes });
            handleClickHexagon(currentId);
          }
          handleSetStateObjhex("black", positionCurrentId);
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
  const [isSubscribed, setIsSubscribed] = useState(false);
  const handleChange = (event) => {
    if (event.target.checked) {
      console.log("✅ Checkbox is checked");
    } else {
      console.log("⛔️ Checkbox is NOT checked");
    }
    setIsSubscribed((current) => !current);
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
        <table className="ibws-fix">
          <thead>
            <tr>
              <th>input value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <form>
                  <input
                    type="number"
                    id="idStartHex"
                    name="idStartHex"
                    placeholder=" number hex top"
                    // value={idStartHex}
                    //  onChange={(event) => setidStartHex(event.target.value)}
                  />{" "}
                  <input
                    type="number"
                    id="idStartHex"
                    name="idStartHex"
                    placeholder=" number hex left"
                    // value={idStartHex}
                    //  onChange={(event) => setidStartHex(event.target.value)}
                  />{" "}
                  <input
                    type="number"
                    id="idStartHex"
                    name="idStartHex"
                    placeholder="value number right"
                    // value={idStartHex}
                    //  onChange={(event) => setidStartHex(event.target.value)}
                  />
                  <br />
                  <br />
                  <input
                    type="hidden"
                    name="position"
                    id="position"
                    value="left"
                  />
                  <button type="submit">Submit</button>
                </form>
              </td>
            </tr>
          </tbody>
        </table>
        <hr />
        <div>
          <p>show yellow</p>

          <label className="switch">
            <input
              type="checkbox"
              id="togBtn"
              value={isSubscribed}
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
                  style={{ visibility: `${item.hexagontent.style_visibility}` }}
                  className={
                    item.hexagontent.class_content +
                    `${
                      default_number_right.has(item.id) ? " df-num-right" : ""
                    }` +
                    `${default_number_left.has(item.id) ? " df-num-left" : ""}`
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
      <br></br>
      <br></br>
    </div>
  );
};

export default Index;
