const input = [11, 9, 1111, 99, 11111, 999];

// function stringSumm(string) {
//     return string.split('').reduce((acc, item) => acc + +item, 0);
// }


// function sortBySumm(arrayOfNumbers) {
//     return arrayOfNumbers.sort((prev, next) => {
//         const prevSumm = stringSumm(String(prev));
//         const nextSumm = stringSumm(String(next));

//         if (prevSumm === nextSumm) {
//             return 0;
//         }

//         return prevSumm < nextSumm ? -1 : 1;
//     })
// }
// console.log(sortBySumm(input));

const trace = (elemnt, ...comments) => { console.log(elemnt, ...comments); return elemnt }

const sortBySum =
  (collection) =>
    [...collection].sort(
      (a, b) =>
        String(a).split('').reduce((acc, x) => Number(acc) + Number(x))
        - String(b).split('').reduce((acc, x) => Number(acc) + Number(x))
    )

console.log(sortBySum(input))
