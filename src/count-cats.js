module.exports = function countCats(arr) {
  let count = 0; 
  let myArr = [];
  for (let a = 0; a<arr.length; a++) {
    myArr = arr[a];
    for (let b = 0; b < myArr.length; b++) {
      if (myArr[b] !== '^^') {
        count = count+0;
      } else {
        count++;
      }
    }
  }
  return count;
};
