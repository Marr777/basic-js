const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(arr) {
  let cats = 0;
  for (let i = 0; i < arr.length; i++) {
    let found = arr[i].filter((el) => el === '^^');
    console.log(found)
    if(found) cats += found.length;
  }
  return cats;
}

console.log(countCats([ [0, '^^', '^^'], [0, '^^', 2], ['^^', 1, 2] ]))

module.exports = {
  countCats
};
