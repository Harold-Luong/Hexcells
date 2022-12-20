import { mapValue } from "../contains";
let maptemp = new Map();
const generateArrTop = () => {
  // cạnh trên
  let arr_top = [];
  for (let i = 70; i <= 84; i++) {
    arr_top.push(i);
  }
  // đường chéo trai
  let idNum = 70;
  for (let index = 0; index < 8; index++) {
    if (index % 2 === 0) {
      idNum -= 1;
    } else {
      idNum += 51;
    }
    arr_top.push(idNum);
  }
  // đường chéo phai
  let idNums = 84;
  for (let index = 0; index < 8; index++) {
    if (index % 2 === 0) {
      idNums += 1;
    } else {
      idNums += 53;
    }
    arr_top.push(idNums);
  }
  return arr_top;
};
const generateArrBottom = () => {
  // arr đáy
  let arr_bottom = [];
  arr_bottom.push(790);
  arr_bottom.push(791);
  arr_bottom.push(819);
  arr_bottom.push(820);
  for (let i = 793; i <= 817; i += 2) {
    arr_bottom.push(i);
  }
  for (let i = 844; i <= 870; i += 2) {
    arr_bottom.push(i);
  }
  return arr_bottom;
};
//các điểm ngoại lệ
const generateArrPointException = () => {
  let arr_ex = [
    129, 279, 591, 753, 291, 603, 386, 392, 542, 548, 438, 490, 444, 496, 543,
    596, 547, 598, 335, 336, 338, 339,
  ];
  return arr_ex;
};
//default number
const default_number = new Map();
default_number.set("cid218", 5);
//
default_number.set("cid20", 10);
default_number.set("cid22", 4);
default_number.set("cid23", 6);
default_number.set("cid24", 4);
default_number.set("cid26", 4);
default_number.set("cid27", 3);
default_number.set("cid30", 9);
default_number.set("cid33", 3);
//
default_number.set("cid508", 4);
default_number.set("cid453", 5);
//
default_number.set("cid181", 3);
default_number.set("cid441", 8);
//
default_number.set("cid429", 2);
//
default_number.set("cid33", 3);
default_number.set("cid248", 9);

// them gia tri

// test arr gen hexagon
const getToHex = () => {
  let x = generateArrTop();
  let y = generateArrBottom();
  let z = generateArrPointException();
  addValueStyle();
  let mapCheckValueID = [];
  for (let i = 0; i < x.length; i++) {
    let count = x[i];
    let check;
    let checkEx;

    do {
      check = y.includes(count);
      checkEx = z.includes(count);
      mapCheckValueID.push(count);

      if (checkEx !== true) {
        let ele = document.getElementById("id" + count);
        if (ele === null) break;
        ele.style.backgroundColor = "hsl(46, 100%, 46%)";
        ele.style.visibility = "visible";
      }

      count += 52;
    } while (check !== true);
  }

  for (let index = 0; index < 444; index++) {
    maptemp.set(mapCheckValueID[index], mapValue[index]);
  }
};

// right
const default_number_right = new Map();
default_number_right.set("cid87", 11);
default_number_right.set("cid140", 11);
default_number_right.set("cid194", 9);
default_number_right.set("cid195", 8);
default_number_right.set("cid279", 7);
//
default_number_right.set("cid405", 4);
default_number_right.set("cid665", 3);

//left
const default_number_left = new Map();
default_number_left.set("cid477", 4);
default_number_left.set("cid425", 3);
default_number_left.set("cid373", 5);
default_number_left.set("cid321", 5);
//
default_number_left.set("cid167", 10);
default_number_left.set("cid168", 6);
default_number_left.set("cid118", 12);
default_number_left.set("cid67", 9);
//
default_number_left.set("cid291", "{2}");
///
const addValueStyle = () => {
  default_number.forEach((value, key) => {
    let ele = document.getElementById(key);
    ele.innerHTML = value;
    ele.style.visibility = "visible";
    ele.style.fontWeight = "bold";
    ele.style.top = "55%";
  });
  default_number_right.forEach((value, key) => {
    let ele = document.getElementById(key);
    ele.innerHTML = value;
    ele.style.visibility = "visible";
    ele.style.position = "absolute";
    ele.style.top = "65%";
    ele.style.left = "10%";
    ele.style.fontWeight = "bold";
    ele.style.transform = "translate(-50%, -50%) rotate(60deg)";
  });
  default_number_left.forEach((value, key) => {
    let ele = document.getElementById(key);
    ele.innerHTML = value;
    ele.style.visibility = "visible";
    ele.style.fontWeight = "bold";
    ele.style.position = "absolute";
    ele.style.top = "55%";
    ele.style.left = "80%";
    ele.style.transform = "translate(-50%, -50%) rotate(-60deg)";
  });
};
export { getToHex, maptemp };
