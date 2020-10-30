//12) Write a function that returns the mean of an array of numbers

//Write a function that returns the largest integer n where n*n is still less than 12,000. (Hint 1, use a while loop). (Hint 2, you don't need an argument).

//is palindrome

//Write a function that takes an array of numbers as an input, and checks to see if the array is sorted in non-decreasing order. (i.e. each element in the array is less than or equal to the next element.)

function checkNonDecreasing(array) {
  if (!Array.isArray(array)) return undefined;
  if (array.length === 0) return undefined;
  for (let i = 0; i < array.length - 1; i++) {
    if (typeof array[i] != 'number' || typeof array[i + 1] != 'number')
      return undefined;
    if (array[i] > array[i + 1]) return false;
  }
  return true;
}

function isPalindrome(word) {
  const trimmedWord = word.replace(/\s/g, '').toLowerCase();
  return trimmedWord === trimmedWord.split('').reverse().join('');
}

module.exports = { isPalindrome, checkNonDecreasing };
