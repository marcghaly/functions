function digitize(n) {
  let rev = [];
  let num = n.toString();
  
  for (let i = num.length - 1 ; i >= 0; i--){
    rev.push(parseInt(num[i]));  
  }
  return rev;
}

//testing
console.log(digitize(35231));//,[1,3,2,5,3])