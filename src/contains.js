// ô trống bên trong hexa
const hex_none = [
  192, 204, 408, 420, 522, 90, 235, 236, 273, 309, 345, 381, 380, 415, 413, 376,
  375, 339, 303, 267, 232, 233,
];
const map_hex_none = new Map();
for (let index = 0; index < hex_none.length; index++) {
  map_hex_none.set(hex_none[index], index);
}
//khoi tao obj
const objHex = {
  id: "",
  main_class: "hexagon",
  style_color: " ",
  class_hex_none: "",
  status_check_click: false,

  hexagontent: {
    id_content: "",
    class_content: "hexagontent",
    style_visibility: "",
    content: "",
  },
};
//set blue node
const blue_node_default = new Map();
blue_node_default.set(357, 4);
blue_node_default.set(126, 3);
blue_node_default.set(294, 2);
blue_node_default.set(306, 8);
//set black node
const black_node_default = new Map();
black_node_default.set(318, 5);
//gen canh tren
const generateArrTop = () => {
  // cạnh trên
  let arr_top = [];
  for (let i = 47; i <= 61; i++) {
    arr_top.push(i);
  }
  // đường chéo trai
  let idNum = 47;
  for (let index = 0; index < 8; index++) {
    if (index % 2 === 0) {
      idNum -= 1;
    } else {
      idNum += 35;
    }
    arr_top.push(idNum);
  }
  // đường chéo phai
  let idNums = 61;
  for (let index = 0; index < 8; index++) {
    if (index % 2 === 0) {
      idNums += 1;
    } else {
      idNums += 37;
    }
    arr_top.push(idNums);
  }
  return arr_top;
};
//gen canh duoi
const generateArrBottom = () => {
  // arr đáy
  let arr_bottom = [];
  arr_bottom.push(543);
  arr_bottom.push(573);
  for (let i = 544; i <= 572; i += 2) {
    arr_bottom.push(i);
  }
  for (let i = 581; i <= 607; i += 2) {
    arr_bottom.push(i);
  }
  return arr_bottom;
};
//gen toan bộ hexcells
const genHexCells = () => {
  let arr = [];
  let x = generateArrTop();
  let y = generateArrBottom();

  for (let i = 0; i < x.length; i++) {
    let count = x[i];
    let check = false;

    arr.push(count);

    while (check !== true) {
      count += 36;
      arr.push(count);
      check = y.includes(count);
    }
  }
  return arr;
};
// gia trị của các ô hex
const genArrValue = () => {
  let mapValue = [];
  mapValue.push("?", 12, 13, 12, "?", "", "-3-", "", 2, 2, "", "?", 1, 2, 2, 1); //9
  mapValue.push(11, "", "", 10, "", 2, 2, 3, 2, 2, "", 2, "", 1, "?"); //10
  mapValue.push(
    "",
    "",
    14,
    10,
    3,
    "",
    "-2-",
    "",
    5,
    6,
    "-2-",
    4,
    "-2-",
    "?",
    "{2}",
    ""
  ); //11
  mapValue.push("", 12, 4, 1, 1, 1, 2, "", "", 2, "-2-", "-2-", 1, 2, ""); //12
  mapValue.push("?", "", 9, 2, 1, 0, "", "", "", "", 2, "", 2, 5, 3, "?"); //13
  mapValue.push("", 7, 3, "", 1, "", "", "?", "?", "", "", 3, 2, 3, ""); //14
  mapValue.push(
    "?",
    "?",
    "?",
    "?",
    "?",
    "",
    "?",
    6,
    "?",
    "",
    "",
    "?",
    6,
    "?",
    5,
    2
  ); //15
  mapValue.push("?", "", 3, 1, 1, 6, "", 8, "", "?", 1, "", 3, "", "?"); //16
  mapValue.push(
    0,
    1,
    "?",
    "?",
    "?",
    "",
    "?",
    "?",
    "",
    "",
    "",
    "?",
    "?",
    6,
    "-2-",
    ""
  ); //17
  mapValue.push(2, 4, 1, 1, "", "", "", "?", "?", "", 1, 2, 2, "-2-", 3); //18
  mapValue.push(2, "", 3, "?", 2, 2, "", "", "", "", 1, "", 6, "-3-", "", ""); //19
  mapValue.push("", 7, "{3}", "?", 4, 1, 0, 0, 1, 1, 2, 4, "", 4, 3); //20
  mapValue.push("", 6, "", 6, "", 3, 2, 1, 2, "", 3, 7, 4, 7, "", 1); //21
  mapValue.push(2, 2, "-3-", "-3-", "", "", "", 4, "", "", "", "?", "", 4, 2); //22
  mapValue.push("?", 1, "?", 6, "?", 2, 3, 6, 7, 7, 3, "?", "{2}", "", 2, 4); //23

  mapValue.push("", "", "", "?", "", "", 3, 2, 3, 2, 2, "?", 2, 3, ""); //8
  mapValue.push("?", 8, "?", 3, 5, "", "?", "?", 2, 2, "", "?", "", 3, 1); //7
  mapValue.push("", "?", "", "-2-", "{2}", 2, "?", 1, "", 3, 2, "?", 2, 1); //6
  mapValue.push("?", 2, 2, "?", 1, "", "?", 1, 3, 4, 1, "?", "", 1); //5
  mapValue.push(1, "", 2, 1, "?", 2, "?", 1, 4, 3, 1, "?", 2); //4
  mapValue.push(2, 3, 4, "?", "?", "", 1, "-2-", 3, "", 2, "?", ""); //3
  mapValue.push("", 3, 2, 1, "?", 2, 3, 4, 2, 3, "", "?"); //2
  mapValue.push(3, 2, 2, 1, 1, 3, "", 2, 1, "", 2); //1

  mapValue.push(2, 3, "?", "?", "", "?", 1, 3, 3, "-2-", 3, "?", "?", "?", 3); //24
  mapValue.push("", "", "?", 3, 3, "?", 2, 7, 2, 1, "-2-", "?", 2, "", 3); //25
  mapValue.push(2, "?", 1, "", 3, 7, 5, 5, 1, 1, "", "?", "", 3); //26
  mapValue.push("?", 1, 1, 1, 3, "", "", 3, "?", 2, 1, "?", 1, 0); //27
  mapValue.push("", "-2-", 1, 1, "", 5, "", 2, 4, "?", 1, "?", 0); //28
  mapValue.push(3, "", 2, 2, "", 2, 2, 2, 2, 2, "", "?", 0); //29
  mapValue.push("", "", 2, "-2-", "?", 2, "", 4, "", 4, 3, "?"); //30
  mapValue.push("", "", 2, "", 4, "?", "", "", "", "", ""); //31
  return mapValue;
};
//add value va id vao map
const mapALL = () => {
  let mapArr = new Map();
  const arrayID = genHexCells();
  const arrayValue = genArrValue();

  for (let i = 0; i < arrayID.length; i++) {
    let ii = arrayID[i];
    mapArr.set(ii, arrayValue[i]);
  }
  return mapArr;
};
//so o hex dc qui dinh

const default_number_right = new Map();
default_number_right.set(64, 11);
default_number_right.set(101, 11);
default_number_right.set(139, 9);
default_number_right.set(140, 8);
default_number_right.set(286, 4);
default_number_right.set(466, 3);
default_number_right.set(192, 7);

//left
const default_number_left = new Map();
default_number_left.set(204, "{2}");
default_number_left.set(218, 5);
default_number_left.set(254, 5);
default_number_left.set(290, 3);
default_number_left.set(326, 4);
default_number_left.set(112, 10);
default_number_left.set(113, 6);
default_number_left.set(79, 12);
default_number_left.set(44, 9);

// top
const default_number_top = new Map();
default_number_top.set(147, 5);
default_number_top.set(13, 10);
default_number_top.set(15, 4);
default_number_top.set(16, 6);
default_number_top.set(17, 4);
default_number_top.set(19, 4);
default_number_top.set(20, 3);
default_number_top.set(23, 9);
default_number_top.set(26, 3);
default_number_top.set(177, 9);

export {
  blue_node_default,
  black_node_default,
  hex_none,
  objHex,
  map_hex_none,
  mapALL,
  default_number_top,
  default_number_left,
  default_number_right,
};