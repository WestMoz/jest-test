const { isPalindrome, checkNonDecreasing } = require('../index');

describe('Palindrome function', () => {
  test('racecar is a palindrome should be true', () => {
    expect(isPalindrome('racecar')).toEqual(true);
  });
  test('popcorn is a palindrome should be false', () => {
    expect(isPalindrome('popcorn')).toEqual(false);
  });
  test('kayak is a palindrome should be true', () => {
    expect(isPalindrome('kayak')).toEqual(true);
  });
  test('do geese see god is a palindrome should be true', () => {
    expect(isPalindrome('do geese see god')).toEqual(true);
  });
  test('Do geese see god is a palindrome should be true', () => {
    expect(isPalindrome('Do geese see god')).toEqual(true);
  });
});

describe('Non Decreasing Function', () => {
  test('[1,2,2,4] is sorted in non decreasing', () => {
    expect(checkNonDecreasing([1, 2, 2, 4])).toEqual(true);
  });
  test('[1,2,6,4] is sorted in non decreasing', () => {
    expect(checkNonDecreasing([1, 2, 6, 4])).toEqual(false);
  });
  test('[1,6,10,12] is sorted in non decreasing', () => {
    expect(checkNonDecreasing([1, 6, 10, 12])).toEqual(true);
  });
  test('[2,2,2,2] is sorted in non decreasing', () => {
    expect(checkNonDecreasing([2, 2, 2, 2])).toEqual(true);
  });
  test('["hello",2,2,2] is sorted in non decreasing', () => {
    expect(checkNonDecreasing(['hello', 2, 2, 2])).toEqual(undefined);
  });
  test('[undefined,2,2,2] is sorted in non decreasing', () => {
    expect(checkNonDecreasing([undefined, 2, 2, 2])).toEqual(undefined);
  });
  test('[true,2,2,2] is sorted in non decreasing', () => {
    expect(checkNonDecreasing([true, 2, 2, 2])).toEqual(undefined);
  });
  test('[true,2,2,"hello"] is sorted in non decreasing', () => {
    expect(checkNonDecreasing([true, 2, 2, 'hello'])).toEqual(undefined);
  });
  test('[] is sorted in non decreasing', () => {
    expect(checkNonDecreasing([])).toEqual(undefined);
  });
  test('[{},2] is sorted in non decreasing', () => {
    expect(checkNonDecreasing([{}, 2])).toEqual(undefined);
  });
  test('{} is sorted in non decreasing', () => {
    expect(checkNonDecreasing({})).toEqual(undefined);
  });
  test('2 is sorted in non decreasing', () => {
    expect(checkNonDecreasing(2)).toEqual(undefined);
  });
});
