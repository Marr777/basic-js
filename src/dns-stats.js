const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

const filterDomains = (arr, str) => arr.filter((el) => el.includes(str));

function getDNSStats(domains) {
  const comDomains = filterDomains(domains, 'com').length;
  const epamDomains = filterDomains(domains, 'epam').length;
  const infoDomains = filterDomains(domains, 'info').length;

  const result = {};

  if(comDomains) result['.com'] = comDomains;
  if (epamDomains) result ['.com.epam'] = epamDomains;
  if(infoDomains) result['.com.epam.info'] = infoDomains;

  return result;
}

console.log(getDNSStats(['code.yandex.ru', 'music.yandex.ru', 'yandex.ru']));
module.exports = {
  getDNSStats
};
