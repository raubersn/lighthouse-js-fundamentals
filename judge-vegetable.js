function judgeVegetable(vegetables, metric) 
{
  let topScoreIndex = 0;
  
  for (let i = 0; i < vegetables.length; i++)
    if (vegetables[i][metric] > vegetables[topScoreIndex][metric])
      topScoreIndex = i;

  return(vegetables[topScoreIndex].submitter);
}

// const vegetables = [
//   {
//     submitter: 'Old Man Franklin',
//     redness: 10,
//     plumpness: 5
//   },
//   {
//     submitter: 'Sally Tomato-Grower',
//     redness: 2,
//     plumpness: 8
//   },
//   {
//     submitter: 'Hamid Hamidson',
//     redness: 4,
//     plumpness: 3
//   }
// ]

// const metric = 'redness'

// console.log(judgeVegetable(vegetables, metric));


// let vegetables = [
//   {
//     submitter: 'Old Man Franklin',
//     redness: 10,
//     plumpness: 5
//   },
//   {
//     submitter: 'Sally Tomato-Grower',
//     redness: 2,
//     plumpness: 8
//   },
//   {
//     submitter: 'Hamid Hamidson',
//     redness: 4,
//     plumpness: 3
//   }
// ]
// let metric = 'redness'

// console.log(judgeVegetable(vegetables, metric), "=?", 'Old Man Franklin');

// vegetables = [
//   {
//     submitter: 'A',
//     d: 5,
//   },
//   {
//     submitter: 'B',
//     d: 10,
//   },
//   {
//     submitter: 'C',
//     d: 25,
//   }
// ]
// metric = 'd'

// console.log(judgeVegetable(vegetables, metric), "=?", 'C');