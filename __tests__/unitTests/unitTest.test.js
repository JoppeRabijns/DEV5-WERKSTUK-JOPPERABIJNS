const checkemail = require('../../api/helpers/checkemail');

test('test if email is valid', () => {
  expect(checkemail("joppe@rabijns.be")).toBe(true);
  expect(checkemail("jopperabijns.be")).toBeFalsy();
  expect(checkemail("joppe@rabijnsbe")).toBeFalsy();
  expect(checkemail(null)).toBeFalsy();
})
