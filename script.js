const letterCombinations = (digits) => {
  if (digits.length === 0) {
    return [];
  }
  
  const digitToLetters = {
    '0': '0',
    '1': '1',
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };
  
  const backtrack = (index, combination) => {
    if (index === digits.length) {
      result.push(combination);
      return;
    }
    
    const letters = digitToLetters[digits[index]];
    
    for (let i = 0; i < letters.length; i++) {
      backtrack(index + 1, combination + letters[i]);
    }
  };
  
  const result = [];
  backtrack(0, '');
  return result.sort();
};

module.exports = letterCombinations;
