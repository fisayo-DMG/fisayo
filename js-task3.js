function divisible(num, arg) {
  return num % arg === 0
}

function func(num) {
  if (num < 2 ) {
    return [num]
  }
  const arr = [];
  for (let i = 1; i <= num; i++){
    if (divisible(i, 2) && divisible(i, 3) && divisible(i, 5)){
      arr.push("yu-gi-oh")
    } else if (divisible(i, 2) && divisible(i, 3)) {
      arr.push("yu-gi")
    } else if (divisible(i, 2) && divisible(i, 5)) {
      arr.push("yu-oh")
    } else if (divisible(i, 3) && divisible(i, 5)) {
      arr.push("gi-oh")
    } else if (divisible(i, 2)) {
      arr.push("yu")
    } else if (divisible(i, 3)) {
      arr.push("gi")
    } else if (divisible(i, 5)) {
      arr.push("oh")
    } else {
      arr.push(i)
    }
  }
  return arr;
}

console.log(func(10));
