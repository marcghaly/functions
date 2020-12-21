var summation = function (num) {
  let n = 0;
  
  for (let i = 1; i<=num; i++){
    n += i;
  }

  return n; 
}

//test
console.log(summation(1)) // 1
console.log(summation(8)) // 36