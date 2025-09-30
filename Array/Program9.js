// Rearrange so that positive and negative numbers alternate. Maintain order of appearance as much as possible.
// Input - [1, 2, 3, -4, -1, 4]
// Output - [1, -4, 2, -1, 3, 4]

const arr = [1, 2, 3, -4, -1, 4];
let k = 0,
  last;
for (let i = 0; i < arr.length; i++) {
  if (i % 2 == 1 && arr[i] > 0) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < 0) {
        k = j;
        break;
      }
    }
    if (k < 0) {
      last = arr[k];
      for (let j = k; j >= i; j--) {
        arr[j] = arr[j - 1];
      }
      arr[i] = last;
    }
  }
}
console.log(arr);
