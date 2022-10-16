const {findLCM} = require("../app.js")
test("LCM of 10 and 15 is 30", () => {
    expect(findLCM([10, 15])).toBe(30);
});

test("LCM should produce error when data is not natural number", () => {
    expect(findLCM([10, 'a'])).toBe(false);
});

test("Data for LCM must be at least of length 2", () => {
    expect(findLCM([10])).toBe(false);
});