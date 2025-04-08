const { add } = require('./calculator');

test('returns 0 for empty string', () => {
    expect(add("")).toBe(0);
});
test('returns number for single number', () => {
    expect(add("3")).toBe(3);

});
test('returns sum for two numbers', () => {
    expect(add("1,2")).toBe(3);

});