const arr = [10, 7, 44, 29, 5, 3, 101];

function aboveTen(arr){
  let sum = 0;
  for (const numb of arr) {
    numb > 10 ? sum += numb : null;
  }
  return sum;
}

console.log(aboveTen(arr))


const arr2 = [{b: 3}, {b: 2}, {b: 1}];

console.log(arr2.reverse());