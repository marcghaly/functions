function dirReduc(arr){
    const result = []
    for(let i = 0; i < arr.length; i++) {
      let condition_one = (arr[i] === "NORTH" && arr[i + 1] === "SOUTH" || arr[i] === "SOUTH" && arr[i + 1] === "NORTH" || arr[i] === "EAST" && arr[i + 1] === "WEST" || arr[i] === "WEST" && arr[i + 1] === "EAST");
      let condition_two = (result[result.length - 1] === "NORTH" && arr[i] === "SOUTH" || result[result.length - 1] === "SOUTH" && arr[i] === "NORTH" || result[result.length - 1] === "EAST" && arr[i] === "WEST" || result[result.length - 1] === "WEST" && arr[i] === "EAST");
      
      condition_one ? i++ : (condition_two ? result.pop() : result.push(arr[i]));
  }
  return result;
}

data = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]; // ["WEST"]

//test
console.log(dirReduc(data));