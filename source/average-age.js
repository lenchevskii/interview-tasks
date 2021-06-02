const users = {
  ana: {
    gender: 'female',
    age: 20,
  },
  dmitry: {
    gender: 'male',
    age: 30,
  },
  jake: {
    gender: 'male',
    age: 45,
  },
};

// const getAverageMaleAge = (users) => {
//     const arrKyes = Object.keys(users);
//     // [ana, dmitry, jake]
//     const result = []
//     arrKyes.map((el, index) => {
//         if(users[el].gender === 'male') {
//             result.push(users[el].age)
//         }
//     })

//     if(result.length) {
//         const summ = result.reduce((acc, el) => acc + el);
//         return  summ / result.length

//     } else {
//         return 0;
//     }

// }; //37.5

// console.log(getAverageMaleAge({}));

const getAverageMaleAge =
  (users) =>
    Object.values(users).reduce((acc, x) => x.gender == 'male' ? acc + x.age : acc, 0)
    / Object.values(users).filter(x => x.gender === 'male').length

console.log(getAverageMaleAge(users))

// const users = {
//   ana: {
//     gender: 'female',
//     age: 20,
//   },
//   dmitry: {
//     gender: 'male',
//     age: 30,
//   },
//   jake: {
//     gender: 'male',
//     age: 45,
//   },
// };

//convert to array
//interate through array
//filter gender
//find sum (age)
const sumAll = obj => {
  let convertToArray = Object.values(obj)

  if (convertToArray.length !== 0) {
    let onlyMale = convertToArray.filter(i => i.gender === 'male');
    let goThrough = onlyMale.map(a => a.age)
    let finalSum = goThrough.reduce((a, b) => a + b)
    return finalSum / goThrough.length
  } else {
    return 0
  }

}

// sumAll({})
