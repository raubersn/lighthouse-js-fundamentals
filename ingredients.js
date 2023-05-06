const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0;
console.log("Ingredients from a WHILE loop:");

while (i < ingredients.length)
{
  console.log(ingredients[i]);
  i++;
}  

// Write a for loop that prints out the contents of ingredients:
console.log("\nIngredients from a FOR loop:");

for (let i = 0; i < ingredients.length; i++)
  console.log(ingredients[i]);

// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("\nIngredients in backwards");
  /*Reversing the array to keep the same loop
  ingredients = ingredients.reverse();

  for (ingredient of ingredients)
    console.log(ingredient);
*/
for (let i = ingredients.length - 1; i >= 0; i--)
  console.log(ingredients[i]);
