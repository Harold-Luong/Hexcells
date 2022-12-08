import React from "react";
import {
  blue_node_default,
  black_node_default,
  objHex,
  map_hex_none,
  map_arr_hex_hidden,
} from "../contains";
import { useState } from "react";
import "../style/index.scss";

const Index = () => {
  let arrObjHex = [];
  //add arrObjHex
  for (let index = 1; index < 513; index++) {
    if (map_hex_none.has(index)) {
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
        hexagontent: {
          ...objHex.hexagontent,
          id_content: "c" + index,
          content: map_arr_hex_hidden.get(index),
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
                  className={item.hexagontent.class_content}
                  id={item.hexagontent.id_content}
                >
                  {item.hexagontent.content} {blue_node_default.get(item.id)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const handleClickHexagon = (id) => {
  let element = document.getElementById(id);
  element.classList.add("buzz");
};
export default Index;
