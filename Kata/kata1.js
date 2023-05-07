const sumLargestNumbers = function(data) {
  let top1 = 0;
  let top2 = 0;

  for(num of data)
  {
    if (num >= top1)
    {
      top2 = top1;
      top1 = num;
    }
  }

  return (top1 + top2);
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));