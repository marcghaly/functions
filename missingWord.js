function missingWord(nums, str) {
  let letters = [];
  let test = str.replace(/\s/g,'');
  nums.sort(function(a, b){
    return a-b;
  });

  for(let i = 0; i < nums.length; i++){
    (typeof test[nums[i]] !== 'undefined' ) ? letters.push(test[nums[i]].toLowerCase()) : 0;
    }
  
  let newstr = (letters.length >= 3) ? letters.join('') : "No mission today";
  return newstr;
}


// TESTING
console.log(missingWord([5, 0, 3], "I love you"));// "ivy")
console.log(missingWord([29, 31, 8], "The quick brown fox jumps over the lazy dog"));// "bay")
console.log(missingWord([12, 4, 6], "Good Morning"));// "No mission today")
