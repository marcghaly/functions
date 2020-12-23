function abbrevName(name){
    let ind = name.indexOf(' ') + 1; 
    return name[0] + '.' + name[ind];
}
console.log(abbrevName("Sam Harris"))//, "S.H");
console.log(abbrevName("Patrick Feenan"))//, "P.F");
console.log(abbrevName("Evan Cole"))//, "E.C")
console.log(abbrevName("P Favuzzi"))//, "P.F")
console.log(abbrevName("David Mendieta"))//, "D.M");