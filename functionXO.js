function XO(str) {
    let ctx = 0;
    let cto = 0;
    str = str.toLowerCase();
  
    for (let i = 0; i < str.length; i++){
      (str[i] == 'x') ? ctx += 1 : 1;
      (str[i] == 'o') ? cto += 1 : 1;
    }
    
    return (ctx == cto) ? true : false;
  }


//Test
console.log(XO('xo')); //True
console.log(XO("xxOo")); //True
console.log(XO("xxxm")); //False
console.log(XO("Oo")); //False
console.log(XO("ooom"));//False