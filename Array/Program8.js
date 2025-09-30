// Find the maximum sum of a subarray with size k.
// Array: [2, 1, 5, 1, 3, 2]
// K = 3
// 9   // Subarray: [5,1,3]

const arr = [2, 1, 5, 1, 3, 2];
const resultArray = [];
let i,
  j,
  k = 3,
  sum = 0;
for (i = 0; i <= arr.length - k; i++) {
  for (j = i; j < i + k; j++) {
    sum = sum + arr[j];
  }
  resultArray.push(sum);
  sum = 0;
}

resultArray.sort();
