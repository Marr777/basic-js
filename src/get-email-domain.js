const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const arr = email.split('');
  const atIndex = arr.lastIndexOf('@');
  return arr.slice(atIndex + 1).join('');
}

console.log(getEmailDomain('prettyandsimple@example.com'));

module.exports = {
  getEmailDomain
};
