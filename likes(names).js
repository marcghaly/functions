function likes(names) {
  let likes = names.length;
  
  if (likes == 0)
    return "no one likes this";
  else if (likes == 1)
    return `${names[0]} likes this`;
  else if (likes == 2)
    return `${names[0]} and ${names[1]} like this`;
  else if (likes == 3)
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  else
    return `${names[0]}, ${names[1]} and ${likes - 2} others like this`;
}

//Test 

console.log(likes([]));//, 'no one likes this'
console.log(likes(['Peter']));//, 'Peter likes this'
console.log(likes(['Jacob', 'Alex']));//, 'Jacob and Alex like this'
console.log(likes(['Max', 'John', 'Mark']));//, 'Max, John and Mark like this'
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));//, 'Alex, Jacob and 2 others like this'