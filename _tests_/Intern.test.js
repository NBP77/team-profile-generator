const Intern = require("../lib/Intern");

test("Gets school via constructor", () => {
  const testValue = "Temple";
  const e = new Intern("Sam", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Sam", 1, "test@test.com", "Temple");
  expect(e.getRole()).toBe(testValue);
});

test("Gets school via getSchool()", () => {
  const testValue = "Temple";
  const e = new Intern("Sam", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});