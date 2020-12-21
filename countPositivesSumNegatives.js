function countPositivesSumNegatives(input) {
  let ctpos = 0;
  let sumneg = 0;
  
  for (let i = 0; i < input.length; i++) {
    (input[i] > 0) ? ctpos += 1 : 1;
    (input[i] < 0) ? sumneg += input[i] : 1;
  }
  
  
  return [ctpos, sumneg];
}

testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];

//test 1st value is postivecount 2nd value is 
console.log(countPositivesSumNegatives(testData)); //[8, -50] result