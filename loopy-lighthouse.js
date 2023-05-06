/*
  We will be writing a program that prints the numbers from 100 to 200 to the console, with three exceptions:

  If the number is a multiple of 3, print the string "Loopy" instead of the number.
  If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
  If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number.
*/
let replacement = "";

//for (let i = 1; i < 22; i++) Testing statement
for (let i = 100; i < 201; i++)
{
  if (i % 3 === 0) replacement += "Loopy";
  if (i % 4 === 0) replacement += "Lighthouse";

  if (replacement.length > 0)
  {
    console.log(replacement);
    replacement = "";
  }
  else
    console.log(i);
}