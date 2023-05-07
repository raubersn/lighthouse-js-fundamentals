const numberOfVowels = function(data) {
  let count = 0;

  for (letter of data)
  {
    switch (letter)
    {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        count++;
    }
  }

  return (count);
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));