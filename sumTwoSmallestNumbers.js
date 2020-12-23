function sumTwoSmallestNumbers(numbers) {  
    let min = numbers[0];
    
    for(let i = numbers.length - 1; i >= 0; i--){
        let value = numbers[i];
        min = (value < min) ? value : min; 
        min == numbers[i] ? numbers.splice(i,1) : 1;
    }
    
    let min_sec = numbers[0];
    
    for(let i = numbers.length - 1; i >= 0; i--){
      let value = numbers[i];
      min_sec = (value < min_sec) ? value : min_sec; 
      min_sec == numbers[i] ? numbers.splice(i,1) : 1;
    }
    return (min + min_sec);
  }
//test
console.log(sumTwoSmallestNumbers([5, 1, 3, 19, 22])) // res 13