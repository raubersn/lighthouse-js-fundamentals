function lastIndexOf(myArray, myValue)
{
  let lastIndex = -1;

  for (let i = myArray.length - 1; i >= 0; i--)
  {
    if (myArray[i] === myValue)
    {
      lastIndex = i;
      break;
    }
  }

  return(lastIndex);
}


// console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
// console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
// console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
// console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
// console.log(lastIndexOf([], 3), "=?", -1);