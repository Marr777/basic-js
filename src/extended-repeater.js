const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const repeatTimes = options.hasOwnProperty('repeatTimes') ? options.repeatTimes : 1;
  const separator = options.hasOwnProperty('separator') ? options.separator : '+';
  const addition = options.hasOwnProperty('addition') ? options.addition : '';
  const additionRepeatTimes = options.hasOwnProperty('additionRepeatTimes') ? options.additionRepeatTimes : 1;
  const additionSeparator = options.hasOwnProperty('additionSeparator') ? options.additionSeparator : '|';

  let repeatedAddition = '';
  if (addition !== '') {
    repeatedAddition = new Array(additionRepeatTimes).fill(String(addition)).join(additionSeparator);
  }

  return new Array(repeatTimes).fill(String(str) + repeatedAddition).join(separator);
}


console.log(repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }))
module.exports = {
  repeater
};
