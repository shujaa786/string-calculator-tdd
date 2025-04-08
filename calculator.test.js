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
test('returns sum for multiple numbers', () => {
    expect(add("1,2,3,4")).toBe(10);
});
test('handles newlines as delimiters', () => {
    expect(add("1\n2,3")).toBe(6);
});