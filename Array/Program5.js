// Rotate the array to the right by k steps. Do not use reverse() or other array methods.
// Input - Array: [1, 2, 3, 4, 5, 6, 7]
// K = 3
// Output - [5, 6, 7, 1, 2, 3, 4]

const arr = [1, 2, 3, 4, 5, 6, 7];

let k = 3,
  last;
for (let j = 1; j <= k; j++) {
  last = arr[arr.length - 1];

  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = last;
  console.log("result array =  " + arr);
}
