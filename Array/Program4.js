// Move all zeros in the array to the end without using built-in methods like sort or filter.
// Input - [0, 1, 0, 3, 12]
// Output - [1, 3, 12, 0, 0]

const arr = [0, 1, 0, 3, 12];
let first;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == 0) {
    first = arr[i];
    for (let j = i; j < arr.length - 1; j++) {
      arr[j] = arr[j + 1];
    }
    arr[arr.length - 1] = first;
  }
}

console.log(arr);
