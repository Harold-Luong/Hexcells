import { useState, useEffect } from "react";
import "../style/hexcells-style.scss";

import {
  renderObjectHexcells,
  handleFortmatId,
  arr_result_blue,
} from "../data";

const HexCellsGame = () => {
  /**
   *handle event close tab and reload tab
   */
  useEffect(() => {
    window.addEventListener("beforeunload", handleSaveEvent);
    return () => {
      window.removeEventListener("beforeunload", handleSaveEvent);
    };
  });
  /**
   * save data when user close or reload tab
   */
  const handleSaveEvent = (event) => {
    event.preventDefault();
    event.returnValue = "";
    handleSave();
  };

  //arr total hexBlue
  const arr_blue = arr_result_blue();
  //arr get from locale
  let arrHexCellFromLocal = window.localStorage.getItem("hexcells");
  //point

  const [remaining, setRemaning] = useState(147);
  const [mistakes, setMistakes] = useState(0);
  const [labelInput, setlabelInput] = useState("Import Data");

  /**
   * check localStorage
   * if null, set local
   */
  if (arrHexCellFromLocal === null) {
    window.localStorage.setItem(
      "hexcells",
      JSON.stringify(renderObjectHexcells())
    );
    arrHexCellFromLocal = window.localStorage.getItem("hexcells");
  }
  const arrHexCellFromLocalParseJSON = JSON.parse(arrHexCellFromLocal);
  //State data json
  const [hexCells, setHexCells] = useState(arrHexCellFromLocalParseJSON);

  /**
   * Previous once step hex
   */
  const handlePrevious = () => {
    //setHexCells((hexCells) => hexCells + 1);
    const getObjUpdateFromLocal = JSON.parse(
      window.localStorage.getItem("previous")
    );
    //check localStorage
    if (getObjUpdateFromLocal !== null) {
      //copy arr
      const listHex = [...hexCells];
      let objPre = listHex.find((item) => item.id === getObjUpdateFromLocal.id);
      //if obj local has in arr
      if (objPre !== null) {
        // objPre.blue_class = null;
        // objPre.black_class = null;
        delete objPre.blue_class;
        delete objPre.black_class;
        objPre.status_check_click = false;
        setHexCells(listHex);
        window.localStorage.removeItem("previous");
      }
    } else {
      alert("You can only press the back button once!!!");
    }
  };

  /**
   * Load data save localStorage
   */
  const handleResume = () => {
    const getObjUpdateFromLocal = JSON.parse(
      window.localStorage.getItem("hexcells-resume")
    );

    if (!getObjUpdateFromLocal) {
      alert("You are not save!");
    } else {
      const mis = parseInt(window.localStorage.getItem("mistakes"));
      const re = parseInt(window.localStorage.getItem("remaining"));
      setHexCells(getObjUpdateFromLocal);
      setMistakes(mis);
      setRemaning(re);
    }
  };

  /**
   * Check class null undefine or "";
   * @param {*} class_name
   * @returns
   */
  const handleCheckClass = (class_name) => {
    return !class_name ? "" : " " + class_name;
  };
  /**
   * Save data to localStorage
   */
  const handleSave = () => {
    const partStringArr = JSON.stringify(hexCells);
    window.localStorage.setItem("hexcells-resume", partStringArr);
    window.localStorage.setItem("mistakes", mistakes);
    window.localStorage.setItem("remaining", remaining);
    alert("Save success! ");
  };
  /**
   *Handle reload game
   */
  const handleReload = (event) => {
    event.preventDefault();
    window.localStorage.clear();
    //  const getObjFromLocal = JSON.parse(window.localStorage.getItem("hexcells"));

    window.localStorage.removeItem("hexcells");
    setHexCells(arrHexCellFromLocalParseJSON);
    setMistakes(0);
    setRemaning(147);
    setlabelInput("Import Data");

    // window.location.reload(false);
  };
  /**
   * right click and left click
   * @param {*} event
   */
  const handleClick = (event) => {
    event.preventDefault();

    const idHex = event.target.id;
    //position ID in arr = idHex -1 (because idHex start from 1)
    const positionIdInArrHexCells = handleFortmatId(idHex) - 1;
    let objHexOnClick = hexCells[positionIdInArrHexCells];
    switch (event.nativeEvent.button) {
      //Left click (synthetic event)
      case 0:
        // positionIdInArrHexCells + 1 because arr_blue has id start from 1
        if (
          arr_blue.includes(positionIdInArrHexCells + 1) &&
          objHexOnClick.status_check_click === false
        ) {
          objHexOnClick.blue_class = "blue_node";
          objHexOnClick.status_check_click = true;
          setHexCells(
            [...hexCells],
            (hexCells[positionIdInArrHexCells] = objHexOnClick)
          );
          setRemaning((remaining) => remaining - 1);
        } else if (objHexOnClick.status_check_click === false) {
          objHexOnClick.buzz_class = "buzz";
          // objHexOnClick.status_check_click = true;
          setHexCells(
            [...hexCells],
            (hexCells[positionIdInArrHexCells] = objHexOnClick)
          );
          setMistakes((mistakes) => mistakes + 1);
          //delete class buzz
          setTimeout(() => {
            delete objHexOnClick.buzz_class;
            setHexCells(
              [...hexCells],
              (hexCells[positionIdInArrHexCells] = objHexOnClick)
            );
          }, 500);
        }

        if (
          objHexOnClick.blue_class !== undefined ||
          objHexOnClick.black_class !== undefined
        ) {
          window.localStorage.setItem(
            "previous",
            JSON.stringify(objHexOnClick)
          );
        }
        // handleSave();
        break;
      //Right click (synthetic event)
      case 2:
        if (
          !arr_blue.includes(positionIdInArrHexCells + 1) === true &&
          objHexOnClick.status_check_click === false
        ) {
          let objHexOnClick = hexCells[positionIdInArrHexCells];
          objHexOnClick.status_check_click = true;
          objHexOnClick.black_class = "black_node";
          setHexCells(
            [...hexCells],
            (hexCells[positionIdInArrHexCells] = objHexOnClick)
          );
          //setRemaning((remaining) => remaining - 1);
        } else if (objHexOnClick.status_check_click === false) {
          let objHexOnClick = hexCells[positionIdInArrHexCells];
          objHexOnClick.buzz_class = "buzz";
          setHexCells(
            [...hexCells],
            (hexCells[positionIdInArrHexCells] = objHexOnClick)
          );
          setMistakes((mistakes) => mistakes + 1);
          //delete class buzz
          setTimeout(() => {
            delete objHexOnClick.buzz_class;
            setHexCells(
              [...hexCells],
              (hexCells[positionIdInArrHexCells] = objHexOnClick)
            );
          }, 500);
        }
        if (
          objHexOnClick.blue_class !== undefined ||
          objHexOnClick.black_class !== undefined
        ) {
          window.localStorage.setItem(
            "previous",
            JSON.stringify(objHexOnClick)
          );
        }
        //handleSave();
        break;
      default:
        alert("Right or left click!");
        break;
    }
  };
  /**
   * export JSON data
   */
  const exportData = () => {
    const obj = [{ mistakes: mistakes, remaining: remaining }];
    const data = [[...obj], hexCells];
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(data)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";
    link.click();
  };
  /**
   * import json data
   */
  const handleImportJson = (e) => {
    e.preventDefault();
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      setHexCells(JSON.parse(e.target.result)[1]);
      setMistakes(JSON.parse(e.target.result)[0][0].mistakes);
      setRemaning(JSON.parse(e.target.result)[0][0].remaining);
    };
    const nameData = document
      .getElementById("importJson")
      .value.replace(/C:\\fakepath\\/i, "");

    setlabelInput("Import Data" + ": " + nameData);
    document.getElementById("importJson").value = null;
  };

  return (
    <div>
      <div className="point">
        <div className="remaining">
          REMAINING <br />
          <h2 id="number-remaining">{remaining}</h2>
        </div>
        <br />
        <div className="mistakes">
          MISTAKES
          <h2 id="number-remaining">{mistakes}</h2>
        </div>
        <br />
        <div className="reload" onClick={handleReload}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path d="M5 18c4.667 4.667 12 1.833 12-4.042h-3l5-6 5 6h-3c-1.125 7.98-11.594 11.104-16 4.042zm14-11.984c-4.667-4.667-12-1.834-12 4.041h3l-5 6-5-6h3c1.125-7.979 11.594-11.104 16-4.041z" />
          </svg>{" "}
          New game
        </div>
        <br />
//         <div className="save" onClick={handleSave}>
//           Save game
//         </div>
        <br />
        <div className="play-again" onClick={handleResume}>
          Resume
        </div>
        <br />
        <div id="back" onClick={handlePrevious}>
          Previous step
        </div>
        <div className="export-data" onClick={exportData}>
          Export Data
        </div>

        <label htmlFor="importJson" className="import-data" id="lableInput">
          {labelInput}
        </label>
        <input
          placeholder="Import Data"
          id="importJson"
          type="file"
          name="file"
          className="input-data "
          onChange={handleImportJson}
        />
      </div>

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
                  handleCheckClass(item.hidden_class) +
                  handleCheckClass(item.black_class) +
                  handleCheckClass(item.blue_class) +
                  handleCheckClass(item.buzz_class) +
                  handleCheckClass(item.visible_class)
                }
              >
                {item.hexagontent ? (
                  <div
                    className={
                      item.hexagontent.main_content_class +
                      handleCheckClass(item.hexagontent.hidden_v_class) +
                      handleCheckClass(item.hexagontent.visible_v_class) +
                      handleCheckClass(item.hexagontent.rotate_straight_class) +
                      handleCheckClass(item.hexagontent.rotate_left_class) +
                      handleCheckClass(item.hexagontent.rotate_right_class)
                    }
                    id={item.hexagontent.id_content}
                  >
                    {item.hexagontent.content}
                  </div>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
/**
 *  The ref object is a generic container whose current property is mutable ...
    ... and can hold any value, similar to an instance property on a class
 * @param {*} value 
 * @returns  Return previous value (happens before update in useEffect above)
 */

export default HexCellsGame;
