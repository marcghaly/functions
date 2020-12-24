function fortune(f0, p, c0, n, i) {
    //f0 deposit year 1
    //p interest rate constant
    //c0 amount to withdraw any time in the year
    //n  number of years
    //i inflation percent constant
    //f1 = 100000 + 0.01*100000 - 2000 = 99000;  c1 = c0 + c0*0.01 = 2020 (with inflation of previous year)
      let c = [];
      let f = [];
      f.push(f0);
      c.push(c0);
      p /= 100;
      i /= 100;
      
      for (let j = 0; j < n; j++) {
        let tmpc = (c0 * i) + c0;
        let tmpi = p * f[j];
        let tmpf = f[j] + (p * f[j]) - tmpc;
        f.splice(j+1, 1, tmpf);
      }
    
        return (f[f.length-1]) > 0 ? true : false;
    }
//Testing
console.log(fortune(100000, 1, 2000, 15, 1))//, true);
console.log(fortune(100000, 1, 9185, 12, 1))//, false);
console.log(fortune(100000000, 1, 100000, 50, 1))//, true);
console.log(fortune(100000000, 1.5, 10000000, 50, 1))//, false);
console.log(fortune(100000000, 5, 1000000, 50, 1))//, true);
