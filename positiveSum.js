function positiveSum(arr) {
  let tmp = 0;
  
  for(let i = 0; i < arr.length; i++) {
    (arr[i] > 0) ? tmp += arr[i] : 1;
  }
  return tmp;
}

//test
console.log(positiveSum([-1,2,3,4,-5])); //9
console.log(positiveSum([-1,2,3,4,5])); //14