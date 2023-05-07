const conditionalSum = function(values, condition) {
  let remainder;
  let totalSum = 0;

  switch (condition)
  {
    case "even":
      remainder = 0;
      break;

    case "odd":
      remainder = 1;
      break;
      
    default:
      return (0);
  }

  for (num of values)
    if (num % 2 === remainder)
      totalSum += num;

  return(totalSum);
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));