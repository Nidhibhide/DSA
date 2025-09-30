// Find the maximum difference arr[j] - arr[i] where j > i.
// [2, 3, 10, 6, 4, 8, 1]
// 8   // 10 - 2

const arr=[2, 3, 10, 6, 4, 8, 1];
const resultArray=[];
for(let i=0;i<arr.length;i++)
{
    for(let j=i+1;j<arr.length;j++)
    {
        if(j>i)
        {
            resultArray.push(arr[j]-arr[i]);
        }
    }
}
resultArray.sort();
console.log(resultArray[resultArray.length-1]);
