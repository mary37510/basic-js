 module.exports =  function createDreamTeam(arr) {
  if (Array.isArray(arr)){
    let myArr = [];
    for (let i = 0; i<arr.length; i++) {
      if (typeof(arr[i]) === 'string'){
        myArr.push(arr[i].trim().charAt(0).toUpperCase());
      } /* else {
        return false;
      } */
    } 
    return myArr.sort().join('');
  } else {
    return false; 
  }
};
