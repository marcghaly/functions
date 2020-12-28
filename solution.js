function solution(str){
  let strn = []; 

  for(let i = 0; i < str.length; i+= 2 ){
      let tmp = ( typeof str[i+1] !== 'undefined') ? str[i] + str[i+1] : str[i] + '_';
      strn.push(tmp);
  }

  return strn;
}

console.log(solution("abcdef"));// ["ab", "cd", "ef"])
console.log(solution("abcdefg"));// ["ab", "cd", "ef", "g_"]