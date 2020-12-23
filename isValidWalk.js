function isValidWalk(walk) {
    let countlat = 0;
    let countlong = 0;
    let res = false;
    
    if (walk.length == 10){
          for(let i = 0; i < walk.length; i++) {
          (walk[i] == 'n') ? countlat += 1 : 1;
          (walk[i] == 's') ? countlat -= 1 : 1;
          (walk[i] == 'e') ? countlong += 1 : 1;
          (walk[i] == 'w') ? countlong -= 1 : 1;
          }
      res = (countlat == 0 && countlong == 0) ? true : false;
      }
      return res;
  }

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));// should return true
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));//, 'should return false');
console.log(isValidWalk(['w']));//, 'should return false');
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']));//, 'should return false');