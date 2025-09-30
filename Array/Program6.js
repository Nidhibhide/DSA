// Count how many pairs (i, j) exist such that i < j and arr[i] > arr[j].
// [2, 4, 1, 3, 5]
// 3   // Pairs: (2,1), (4,1), (4,3)

const arr=[2, 4, 1, 3, 5];
let count=0;
for(let i=0;i<arr.length;i++)
{
    for(let j=i+1;j<arr.length;j++)
    {
        if(i<j && arr[i]>arr[j])
        {
            count++;
        }
    }
}
console.log(count);