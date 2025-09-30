// Que - Find the second largest element in the array.
//Input - [12, 35, 1, 10, 34, 1]
//Output - 34
const arr = [12, 35, 1, 10, 34, 1];
for(let i=0;i<arr.length;i++)
{
    for(let j=i+1;j<arr.length;j++)
    {
        if(arr[i]>arr[j])
        {
            temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
}
console.log(arr[arr.length-2]);