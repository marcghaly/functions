function dirReduc(arr){
  let len = arr.length;
  let stack = [];

  for (let i = 0; i < len; i++){
    if (!(arr[i] == "NORTH" && arr[i+1] == "SOUTH") || (arr[i] == "SOUTH" && arr[i+1] == "NORTH") || (arr[i] == "WEST" && arr[i+1] == "EAST") || (arr[i] == "EAST" && arr[i+1] == "WEST"))
      stack[i] = arr.shift();
  }
  console.log(arr);
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])); // WEST