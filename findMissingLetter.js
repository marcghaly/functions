function findMissingLetter(array)
{
  let missing = '';
  
  for (let i = array.length - 1; i > 0; i--){
    let diff = array[i].charCodeAt(0) - array[i-1].charCodeAt(0);
    (diff == 2) ? missing = array[i].charCodeAt(0) - 1 : 1;
  }
  return String.fromCharCode(missing);
}

console.log(findMissingLetter(['a','b','c','d','f'])); // e
console.log(findMissingLetter(['O','Q','R','S'])); // P