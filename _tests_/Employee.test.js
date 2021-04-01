const Employee = require("../lib/Employee");

test("Can make employee", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Can make names", () => {
  const name = "Nick";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can make id", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.id).toBe(testValue);
});

test("Can make id", () => {
  const testValue = "test@test.com";
  const e = new Employee("Bill", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => {
  const testValue = "Nick";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
  const testValue = 100;
  const e = new Employee("Sam", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Employee("Sam", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Nick", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});