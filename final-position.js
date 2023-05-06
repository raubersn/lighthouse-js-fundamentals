const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves));


function finalPosition(moves)
{
  let lastPosition = [0,0];

  for (let move of moves)
  {
    switch(move)
    {
      case "north":
        lastPosition[1]++;
        break;
      case "south":
        lastPosition[1]--;
        break;
      case "east":
        lastPosition[0]++;
        break;
      case "west":
        lastPosition[0]--;
        break;
    }
  }

  return(lastPosition);
}