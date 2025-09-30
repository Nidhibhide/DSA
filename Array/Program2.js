// Find an element that appears more than n/2 times.
// Input - [3, 3, 4, 2, 4, 4, 2, 4, 4]
// Output - 4

const arr = [3, 3, 4, 2, 4, 4, 2, 4, 4];
const dummyArray = [];
dummyArray.push(arr[0]);
let majorityElement = Math.round(arr.length / 2);
let count = 0,
  k = 0;

for (let i = 1; i < arr.length; i++) {
  for (let j = 0; j < dummyArray.length; j++) {
    if (arr[i] == dummyArray[j]) {
      break;
    } else {
      k++;
    }
  }
  if (k == dummyArray.length) {
    dummyArray.push(arr[i]);
  }
  k = 0;
}

function func() {
  for (let i = 0; i < dummyArray.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (dummyArray[i] == arr[j]) {
        count++;
      }
    }
    if (count == majorityElement) {
      return dummyArray[i];
    }
    count = 0;
  }
}
let result = func();
