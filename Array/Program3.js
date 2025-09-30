// Find one pair of numbers whose sum equals target.
// Input - Array: [8, 7, 2, 5, 3, 1]
// Target: 10
// Output - [8, 2]

const arr = [8, 7, 2, 5, 3, 1];
let sum = 0;
let target = 10;
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    sum = arr[i] + arr[j];
    if (target == sum) {
      console.log("pairs = " + arr[i] + " and " + arr[j]);
      break;
    }
  }
  if (sum == target) {
    break;
  }
  sum = 0;
}
