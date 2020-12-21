function findOdd(A) {
  let i;
  let dict = {};
  let odd;
  
  for (i=0; i < A.length; i++) {
    let num = A[i];
    dict[num] = dict[num] ? dict[num] + 1 : 1;  
  }
  
  for (let j = 0; j < Object.keys(dict).length; j++){
      if (!(Object.values(dict)[j] % 2 == 0))
          odd = Object.keys(dict)[j];
    }
  odd = parseInt(odd, 10); 
  return odd;
}

//test
//console.log(findOdd([1, 1, 5, 2, 2, 5, 7, 5, 7]));