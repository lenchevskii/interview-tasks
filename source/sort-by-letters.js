const letters = {
  'a': 20,
  'x': 1,
  'l': 18
}
['x', 'l', 'a']



const keys = Object.keys(letters);
const inverted = {};
for (let key = 0; key < keys.length; key++) {
    inverted[letters[keys[key]]] = keys[key];
}

const res = Object.keys(inverted).sort().map(value => {
    return inverted[value];
})

console.log(res);
