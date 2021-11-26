/**
 * Checks if email is valid
 * @param {String} email
 * @returns True if email is valid, false if not valid
 */
function validateEmail(email) {
  let re = /\S+@\S+\.\S+/;
  return re.test(email);
}

module.exports = validateEmail;