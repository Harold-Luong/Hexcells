const arrHidden = (top, bottom, range) => {
  var arr = [];
  for (let index = top; index <= bottom; index += range) {
    arr.push(index);
  }
  return arr;
};
const hex_bottom_none = arrHidden(482, 512, 2);
const hex_left_none = arrHidden(0, 544, 32);
const hex_inside_none = [
  48, 175, 174, 205, 237, 269, 301, 302, 335, 337, 306, 307, 275, 243, 211, 178,
  177, 432, 150, 342, 138, 330,
];
const hex_insideLeft_none = [
  1, 2, 3, 4, 5, 6, 7, 33, 34, 35, 36, 37, 65, 66, 67, 97, 481,
];
const hex_insideRight_none = [
  25, 26, 27, 28, 29, 30, 31, 59, 60, 61, 62, 63, 93, 94, 95, 127, 511,
];
const hex_none = [
  ...hex_left_none,
  ...hex_bottom_none,
  ...hex_inside_none,
  ...hex_insideLeft_none,
  ...hex_insideRight_none,
];
const arr_hex_hidden = [
  { id: 252, value: "5" },
  { id: 9, value: "?" },
  { id: 39, value: "?" },
  { id: 69, value: "?" },
  { id: 68, value: "1" },
  { id: 99, value: "2" },

  { id: 70, value: "?" },
  { id: 101, value: "2" },
  { id: 131, value: "3" },
  { id: 130, value: "3" },
  { id: 161, value: "2" },

  { id: 13, value: "?" },
  { id: 103, value: "?" },
  { id: 133, value: "2" },
  { id: 132, value: "2" },
  { id: 162, value: "2" },

  { id: 15, value: "?" },
  { id: 104, value: "?" },
  { id: 135, value: "3" },
  { id: 134, value: "-2-" },
  { id: 165, value: "?" },
  { id: 164, value: "1" },
  { id: 195, value: "?" },
  { id: 194, value: "1" },
  { id: 225, value: "1" },

  { id: 17, value: "0" },
  { id: 16, value: "?" },
  { id: 47, value: "?" },
  { id: 76, value: "4" },
  { id: 137, value: "?" },
  { id: 166, value: "{2}" },
  { id: 197, value: "1" },
  { id: 196, value: "?" },
  { id: 227, value: "?" },
  { id: 226, value: "?" },
  { id: 257, value: "1" },

  { id: 19, value: "2" },
  { id: 18, value: "2" },
  { id: 49, value: "1" },
  { id: 79, value: "?" },
  { id: 78, value: "3" },
  { id: 109, value: "2" },
  { id: 108, value: "1" },
  { id: 139, value: "3" },
  { id: 198, value: "2" },
  { id: 258, value: "2" },

  { id: 81, value: "?" },
  { id: 111, value: "?" },
  { id: 141, value: "1" },
  { id: 140, value: "1" },
  { id: 170, value: "2" },
  { id: 201, value: "-3-" },
  { id: 200, value: "3" },
  { id: 231, value: "?" },
  { id: 230, value: "?" },
  { id: 261, value: "?" },
  { id: 260, value: "?" },
  { id: 291, value: "1" },
  { id: 290, value: "3" },

  { id: 23, value: "?" },
  { id: 22, value: "2" },
  { id: 83, value: "3" },
  { id: 82, value: "1" },
  { id: 113, value: "?" },
  { id: 112, value: "1" },
  { id: 143, value: "?" },
  { id: 142, value: "1" },
  { id: 173, value: "0" },
  { id: 172, value: "1" },
  { id: 203, value: "-2-" },
  { id: 202, value: "2" },
  { id: 232, value: "2" },
  { id: 263, value: "?" },
  { id: 262, value: "1" },
  { id: 293, value: "1" },
  { id: 292, value: "1" },
  { id: 323, value: "-2-" },
  { id: 353, value: "2" },

  { id: 24, value: "2" },
  { id: 55, value: "1" },
  { id: 54, value: "2" },
  { id: 84, value: "{3}" },
  { id: 115, value: "?" },
  { id: 114, value: "1" },
  { id: 145, value: "?" },
  { id: 144, value: "1" },
  { id: 204, value: "2" },
  { id: 234, value: "3" },
  { id: 265, value: "2" },
  { id: 295, value: "2" },
  { id: 325, value: "3" },
  { id: 355, value: "3" },
  { id: 354, value: "2" },
  { id: 385, value: "1" },

  { id: 87, value: "?" },
  { id: 86, value: "-3-" },
  { id: 116, value: "?" },
  { id: 147, value: "2" },
  { id: 207, value: "?" },
  { id: 266, value: "2" },
  { id: 297, value: "2" },
  { id: 296, value: "2" },
  { id: 327, value: "2" },
  { id: 326, value: "3" },
  { id: 356, value: "3" },
  { id: 386, value: "3" },

  { id: 58, value: "2" },
  { id: 88, value: "?" },
  { id: 118, value: "-3-" },
  { id: 179, value: "2" },
  { id: 209, value: "?" },
  { id: 238, value: "?" },
  { id: 298, value: "2" },
  { id: 328, value: "2" },
  { id: 358, value: "2" },
  { id: 389, value: "1" },
  { id: 388, value: "2" },
  { id: 419, value: "2" },
  { id: 449, value: "2" },

  { id: 91, value: "?" },
  { id: 90, value: "?" },
  { id: 121, value: "?" },
  { id: 120, value: "?" },
  { id: 151, value: "?" },
  { id: 181, value: "3" },
  { id: 180, value: "1" },
  { id: 241, value: "?" },
  { id: 271, value: "?" },
  { id: 270, value: "?" },

  { id: 300, value: "2" },
  { id: 331, value: "-2-" },
  { id: 361, value: "?" },
  { id: 360, value: "?" },
  { id: 391, value: "?" },
  { id: 390, value: "?" },
  { id: 421, value: "?" },
  { id: 420, value: "?" },
  { id: 451, value: "?" },
  { id: 450, value: "?" },

  { id: 123, value: "1" },
  { id: 122, value: "1" },
  { id: 153, value: "3" },
  { id: 183, value: "2" },
  { id: 213, value: "2" },
  { id: 212, value: "0" },
  { id: 242, value: "?" },
  { id: 333, value: "2" },
  { id: 332, value: "-2-" },
  { id: 362, value: "2" },
  { id: 393, value: "2" },
  { id: 392, value: "2" },
  { id: 422, value: "2" },
  { id: 452, value: "2" },

  { id: 125, value: "3" },
  { id: 124, value: "-2-" },
  { id: 155, value: "1" },
  { id: 184, value: "?" },
  { id: 215, value: "3" },
  { id: 245, value: "1" },
  { id: 244, value: "0" },
  { id: 274, value: "?" },
  { id: 304, value: "?" },
  { id: 364, value: "-2-" },
  { id: 395, value: "-2-" },
  { id: 425, value: "2" },
  { id: 455, value: "3" },
  { id: 454, value: "1" },
  { id: 485, value: "1" },

  { id: 156, value: "1" },
  { id: 187, value: "1" },
  { id: 186, value: "3" },
  { id: 217, value: "?" },
  { id: 216, value: "1" },
  { id: 246, value: "4" },
  { id: 277, value: "2" },
  { id: 276, value: "1" },
  { id: 336, value: "1" },
  { id: 367, value: "?" },
  { id: 366, value: "3" },
  { id: 397, value: "2" },
  { id: 396, value: "1" },
  { id: 427, value: "?" },
  { id: 426, value: "1" },
  { id: 457, value: "2" },
  { id: 487, value: "1" },

  { id: 189, value: "2" },
  { id: 188, value: "1" },
  { id: 219, value: "3" },
  { id: 249, value: "2" },
  { id: 248, value: "3" },
  { id: 308, value: "1" },
  { id: 339, value: "1" },
  { id: 338, value: "1" },
  { id: 369, value: "?" },
  { id: 398, value: "2" },
  { id: 428, value: "2" },
  { id: 459, value: "{2}" },
  { id: 458, value: "?" },
  { id: 489, value: "1" },

  { id: 190, value: "2" },
  { id: 221, value: "2" },
  { id: 250, value: "5" },
  { id: 280, value: "3" },
  { id: 341, value: "3" },
  { id: 340, value: "2" },
  { id: 370, value: "2" },
  { id: 401, value: "?" },
  { id: 400, value: "3" },
  { id: 431, value: "?" },
  { id: 430, value: "3" },
  { id: 461, value: "3" },

  { id: 223, value: "2" },
  { id: 222, value: "-2-" },
  { id: 313, value: "2" },
  { id: 312, value: "-2-" },
  { id: 343, value: "3" },
  { id: 372, value: "4" },
  { id: 402, value: "2" },
  { id: 493, value: "?" },

  { id: 254, value: "?" },
  { id: 285, value: "2" },
  { id: 315, value: "3" },
  { id: 314, value: "1" },
  { id: 345, value: "1" },
  { id: 375, value: "?" },
  { id: 374, value: "?" },
  { id: 405, value: "4" },
  { id: 435, value: "-3-" },
  { id: 434, value: "-2-" },
  { id: 465, value: "-2-" },
  { id: 464, value: "?" },
  { id: 495, value: "2" },

  { id: 286, value: "2" },
  { id: 317, value: "2" },
  { id: 316, value: "2" },
  { id: 347, value: "?" },
  { id: 346, value: "1" },
  { id: 377, value: "-2-" },
  { id: 376, value: "?" },
  { id: 407, value: "{2}" },
  { id: 436, value: "4" },
  { id: 466, value: "3" },

  { id: 319, value: "?" },
  { id: 349, value: "2" },
  { id: 379, value: "2" },
  { id: 409, value: "?" },
  { id: 408, value: "?" },
  { id: 438, value: "4" },
  { id: 468, value: "3" },

  { id: 350, value: "4" },
  { id: 381, value: "2" },
  { id: 380, value: "?" },
  { id: 411, value: "1" },
  { id: 410, value: "?" },
  { id: 441, value: "2" },
  { id: 440, value: "?" },
  { id: 471, value: "2" },
  { id: 470, value: "2" },
  { id: 501, value: "1" },

  { id: 413, value: "2" },
  { id: 412, value: "1" },
  { id: 443, value: "?" },
  { id: 472, value: "3" },

  { id: 414, value: "4" },
  { id: 444, value: "?" },
  { id: 475, value: "1" },
  { id: 474, value: "3" },

  { id: 446, value: "3" },
  { id: 477, value: "?" },
  { id: 476, value: "0" },
  { id: 507, value: "0" },

  { id: 478, value: "?" },
  { id: 509, value: "0" },
];
const map_arr_hex_hidden = new Map(
  arr_hex_hidden.map((obj) => {
    return [obj.id, obj.value];
  })
);
const map_hex_none = new Map();
for (let index = 1; index < hex_none.length; index++) {
  map_hex_none.set(hex_none[index], index);
}
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
//set blue node
const blue_node_default = new Map();
blue_node_default.set(287, 4);
blue_node_default.set(228, 2);
blue_node_default.set(80, 3);
blue_node_default.set(240, 8);
//set black node
const black_node_default = new Map();
black_node_default.set(252, 5);

//default number
const default_number = new Map();
default_number.set("c11", 10);
default_number.set("c13", 4);
default_number.set("c14", 6);
default_number.set("c15", 4);
default_number.set("c17", 4);
default_number.set("c18", 3);
default_number.set("c21", 9);
default_number.set("c24", 3);
default_number.set("c159", 9);
default_number.set("c129", 5);

const default_number_right = new Map();
default_number_right.set("c58", 11);
default_number_right.set("c91", 11);
default_number_right.set("c125", 9);
default_number_right.set("c126", 8);
default_number_right.set("c256", 4);
default_number_right.set("c170", 7);

export {
  default_number,
  blue_node_default,
  black_node_default,
  arr_hex_hidden,
  hex_none,
  objHex,
  map_hex_none,
  map_arr_hex_hidden,
  default_number_right,
};
