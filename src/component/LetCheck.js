// gắn chiều ngang
let mapHex = new Map();
//70 72 74 76 78 80 82 84
//71-85
// đỉnh trên
mapHex.set(70, 85);
//kề đỉnh dưới
mapHex.set(790, 820);
//đỉnh dưới
mapHex.set(844, 870);
// cánh ngang trái, bước nhảy 52
mapHex.set(270, 790);
// cánh ngang phải, bước nhảy 52
mapHex.set(300, 820);
///
//các điểm ngoại lệ
let arr_ex = [
  129, 291, 603, 753, 591, 279, 338, 339, 392, 444, 496, 548, 547, 598, 596,
  543, 542, 490, 438, 386, 335, 336,
];
//, 270, 300, 790, 820, 844, 870
let arr_hex_get = [70, 84];

const getToHex = () => {
  let count = 0;
  for (let i = 0; i < arr_hex_get.length; i++) {
    for (let j = arr_hex_get[i]; j <= arr_hex_get[i + 1]; j++) {
      document.getElementById("id" + j).style.backgroundColor = "red";
    }
  }
};

export { getToHex };
