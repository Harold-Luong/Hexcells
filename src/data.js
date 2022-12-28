const main_class = "hexagon";
const black_class = "black_node";
const blue_class = "blue_node";

const hidden_class = "hexanone";
const status_check_click = false;
const main_content_class = "hexagontent";
const visible_v_class = "visble_v_class";
const hidden_v_class = "hidden_v_class";
const rotate_left_class = "df-num-left";
const rotate_right_class = "df-num-right";
const rotate_straight_class = "df-num";
const totalHexagon = 613;
//slice and fortmat id
const handleFortmatId = (id) => {
  return parseInt(id.slice(1));
};

const blue_node_default = new Map();
blue_node_default.set(357, 4);
blue_node_default.set(126, 3);
blue_node_default.set(294, 2);
blue_node_default.set(306, 8);
//set black node
const black_node_default = new Map();
black_node_default.set(318, 5);
//show hexagon
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
// ô trống bên trong hexa
const hex_none = [
  192, 204, 408, 420, 522, 90, 235, 236, 273, 309, 345, 381, 380, 415, 413, 376,
  375, 339, 303, 267, 232, 233,
];
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
//blue
const arr_result_blue = () => {
  let result_blue = [183, 255, 363, 399, 507]; //1
  result_blue.push(148, 400, 508); //2
  result_blue.push(221, 329, 473, 581); //3
  result_blue.push(150, 402); //4
  result_blue.push(295, 439, 547); //5
  result_blue.push(80, 152, 368);
  result_blue.push(117, 225, 261, 441, 513);
  result_blue.push(46, 82, 118, 190, 226, 298, 514, 550);
  result_blue.push(83, 119, 155, 227, 299, 407);
  result_blue.push(48, 84, 120, 156, 480);
  result_blue.push(49, 85, 121, 157, 229, 301, 337, 373, 445, 589);
  result_blue.push(50, 86, 302, 338, 554);
  result_blue.push(87, 123, 447, 519);
  result_blue.push(52, 88, 160, 268, 412, 556);
  result_blue.push(305, 377, 485, 557);
  result_blue.push(234, 270, 450);
  result_blue.push(343, 379, 523, 595);
  result_blue.push(92, 200, 272);
  result_blue.push(93, 453, 489, 561, 597);
  result_blue.push(58, 94, 202, 490);
  result_blue.push(59, 95, 131, 167, 203, 383, 455, 527, 563);
  result_blue.push(240, 276, 348, 384, 492);
  result_blue.push(169, 313, 349, 385, 592, 601, 529);
  result_blue.push(98, 206, 422);
  result_blue.push(99, 135, 243, 351, 567, 603);
  result_blue.push(208, 280, 352, 460, 532);
  result_blue.push(317, 353);
  result_blue.push(138, 282, 354, 426);
  result_blue.push(211, 319, 535);
  result_blue.push(176, 212, 392, 464);
  result_blue.push(213, 249, 321, 357, 429, 465, 501, 537, 573);
  return result_blue;
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
      //gen từ dong trên thẳng xướng dòng dưới, đụng dòng dưới thì dừng,
      //gán check = true nếu có
      check = y.includes(count);
    }
  }
  return arr;
};
//map giá trị cấc ô hex vào id của chúng
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

//list hexagon of hexcells
const objHex = {
  id: null,
  main_class: main_class,
  black_class: null,
  blue_class: null,
  buzz_class: null,
  hidden_class: null,
  visible_class: null,
  status_check_click: status_check_click,
  hexagontent: {
    id_content: null,
    content: null,
    main_content_class: main_content_class,
    visible_v_class: null,
    hidden_v_class: null,
    rotate_straight_class: null,
    rotate_left_class: null,
    rotate_right_class: null,
  },
};
const renderObjectHexcells = () => {
  let arr = [];
  let arrGen = mapALL();

  for (let i = 1; i < totalHexagon; i++) {
    //check hex visible
    //kiểm tra các id nếu có trong mảng arGen (là các ô mà vàng) và id không nằm trong danh sách trống
    if (arrGen.has(i) && !hex_none.includes(i)) {
      if (black_node_default.has(i)) {
        arr.push({
          ...objHex,
          id: "i" + i,
          black_class: black_class,
          hexagontent: {
            id_content: "c" + i,
            main_content_class: main_content_class,
            hidden_v_class: hidden_v_class,
            content: arrGen.get(i),
          },
        });
      } else if (blue_node_default.has(i)) {
        arr.push({
          ...objHex,
          id: "i" + i,
          blue_class: blue_class,
          hexagontent: {
            id_content: "c" + i,
            main_content_class: main_content_class,
            hidden_v_class: hidden_v_class,
            content: arrGen.get(i),
          },
        });
      } else {
        arr.push({
          ...objHex,
          id: "i" + i,
          hexagontent: {
            id_content: "c" + i,
            main_content_class: main_content_class,
            hidden_v_class: hidden_v_class,
            content: arrGen.get(i),
          },
        });
      }
    }
    //hex none
    else {
      if (default_number_left.has(i)) {
        arr.push({
          ...objHex,
          id: "i" + i,
          hidden_class: hidden_class,
          hexagontent: {
            id_content: "c" + i,
            main_content_class: main_content_class,
            visible_v_class: visible_v_class,
            content: default_number_left.get(i),
            rotate_left_class: rotate_left_class,
          },
        });
      } else if (default_number_right.has(i)) {
        arr.push({
          ...objHex,
          id_content: "i" + i,
          hidden_class: hidden_class,
          hexagontent: {
            id: "c" + i,
            main_content_class: main_content_class,
            visible_v_class: visible_v_class,
            content: default_number_right.get(i),
            rotate_right_class: rotate_right_class,
          },
        });
      } else if (default_number_top.has(i)) {
        arr.push({
          ...objHex,
          id: "i" + i,
          hidden_class: hidden_class,
          hexagontent: {
            id_content: "c" + i,
            main_content_class: main_content_class,
            visible_v_class: visible_v_class,
            content: default_number_top.get(i),
            rotate_straight_class: rotate_straight_class,
          },
        });
      } else {
        arr.push({
          ...objHex,
          id: "i" + i,
          hidden_class: hidden_class,
          hexagontent: {
            id_content: "c" + i,
            main_content_class: main_content_class,
          },
        });
      }
    }
  }
  return arr;
};
export { renderObjectHexcells, handleFortmatId, arr_result_blue };
