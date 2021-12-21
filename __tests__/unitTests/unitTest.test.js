const checkemail = require("../../api/helpers/checkemail");
const capitalizeFirstLetter = require("../../api/helpers/capitalizeFirstLetter");

test("test if email is valid", () => {
  expect(checkemail("joppe@rabijns.be")).toBe(true);
  expect(checkemail("jopperabijns.be")).toBeFalsy();
  expect(checkemail("joppe@rabijnsbe")).toBeFalsy();
  expect(checkemail(null)).toBeFalsy();
});

test("test if it capitalizes first letter", () => {
  expect(capitalizeFirstLetter("pelt")).toBe("Pelt");
  expect(capitalizeFirstLetter("Pelt")).toBe("Pelt");
});
