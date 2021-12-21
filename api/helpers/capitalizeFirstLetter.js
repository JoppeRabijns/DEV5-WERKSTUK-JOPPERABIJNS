//https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
/**
 * Make first letter a capital letter
 * @param {String} city_name
 * @returns city_name with capitalized first letter
 */
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = capitalizeFirstLetter;
