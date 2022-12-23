import React from "react";
import { useState } from "react";
import "../style/hexcells-style.scss";
import {
  renderObjectHexcells,
  handleFortmatId,
  arr_result_blue,
} from "../data";
const HexCellsGame = () => {
  const arr_blue = arr_result_blue();
  // save localStorage
  window.localStorage.setItem(
    "hexcells",
    JSON.stringify(renderObjectHexcells())
  );
  const [hexCells, setHexCells] = useState(renderObjectHexcells());
  /**
   * load data save
   */
  const handleClickPlayAgain = () => {
    const getObjUpdateFromLocal = JSON.parse(
      window.localStorage.getItem("hexcells-update")
    );
    !getObjUpdateFromLocal
      ? alert("Ban chua lu data")
      : setHexCells(getObjUpdateFromLocal);
  };

  /**
   * check class null undefine or "";
   * @param {*} class_name
   * @returns
   */
  const checkUndefine = (class_name) => {
    return !class_name ? "" : " " + class_name;
  };
  /**
   * save data to localStorage
   */
  const handleSave = () => {
    const partStringArr = JSON.stringify(hexCells);
    window.localStorage.setItem("hexcells-update", partStringArr);
  };
  /**
   *handle reload game
   */
  const handleReset = () => {
    const getObjFromLocal = JSON.parse(window.localStorage.getItem("hexcells"));
    setHexCells(getObjFromLocal);
  };
  /**
   * right click and left click
   * @param {*} event
   */
  const handleClick = (event) => {
    event.preventDefault();
    //id hex on click
    const idHex = event.target.id;
    //position ID in arr = idHex -1 (because idHex start from 1)
    const positionIdInArrHexCells = handleFortmatId(idHex) - 1;
    let objHexOnClick = hexCells[positionIdInArrHexCells];

    switch (event.nativeEvent.button) {
      //Left click (synthetic event)
      case 0:
        // positionIdInArrHexCells + 1 becase arr_blue has id start from 1
        if (arr_blue.includes(positionIdInArrHexCells + 1)) {
          objHexOnClick.blue_class = "blue_node";
          objHexOnClick.status_check_click = true;
          setHexCells(
            [...hexCells],
            (hexCells[positionIdInArrHexCells] = objHexOnClick)
          );
        } else {
          objHexOnClick.buzz_class = "buzz";
          objHexOnClick.status_check_click = true;
          setHexCells(
            [...hexCells],
            (hexCells[positionIdInArrHexCells] = objHexOnClick)
          );

          setTimeout(() => {
            objHexOnClick.buzz_class = null;

            setHexCells(
              [...hexCells],

              (hexCells[positionIdInArrHexCells] = objHexOnClick)
            );
          }, 500);
        }

        break;
      //Right click (synthetic event)
      case 2:
        if (!arr_blue.includes(positionIdInArrHexCells + 1) === true) {
          let objHexOnClick = hexCells[positionIdInArrHexCells];
          objHexOnClick.black_class = "black_node";
          setHexCells(
            [...hexCells],
            (hexCells[positionIdInArrHexCells] = objHexOnClick)
          );
        } else {
          let objHexOnClick = hexCells[positionIdInArrHexCells];
          objHexOnClick.buzz_class = "buzz";
          setHexCells(
            [...hexCells],
            (hexCells[positionIdInArrHexCells] = objHexOnClick)
          );

          setTimeout(() => {
            objHexOnClick.buzz_class = null;
            setHexCells(
              [...hexCells],
              (hexCells[positionIdInArrHexCells] = objHexOnClick)
            );
          }, 500);
        }
        break;
      default:
        alert("Right or left click!");
        break;
    }
  };
  return (
    <div>
      <div className="point">
        <div className="remaining">
          REMAINING
          {/* <h2 id="number-remaining">{point.remaining}</h2> */}
        </div>
        <br />
        <div className="mistakes">
          MISTAKES
          {/* <h2 id="number-mistakes">{point.mistakes}</h2> */}
        </div>
        <br />
        <button className="reload" onClick={handleReset}>
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
        <button onClick={handleSave}>Save</button>
        <br />
        <button onClick={handleClickPlayAgain}>Play again</button>
      </div>
      {/* hexcells */}
      <div className="honeycomb">
        <div className="ibws-fix">
          {hexCells.map((item, key) => {
            return (
              <div
                onClick={handleClick}
                onContextMenu={handleClick}
                key={key}
                id={item.id}
                className={
                  item.main_class +
                  checkUndefine(item.hidden_class) +
                  checkUndefine(item.black_class) +
                  checkUndefine(item.blue_class) +
                  checkUndefine(item.buzz_class) +
                  checkUndefine(item.visible_class)
                }
              >
                <div
                  className={
                    item.hexagontent.main_content_class +
                    checkUndefine(item.hexagontent.hidden_v_class) +
                    checkUndefine(item.hexagontent.visible_v_class) +
                    checkUndefine(item.hexagontent.rotate_straight_class) +
                    checkUndefine(item.hexagontent.rotate_left_class) +
                    checkUndefine(item.hexagontent.rotate_right_class)
                  }
                  id={item.hexagontent.id_content}
                >
                  {item.hexagontent.content}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HexCellsGame;
