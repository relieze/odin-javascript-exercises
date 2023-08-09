const palindromes = function (word) {
  let newWord = word.toLowerCase().split("").filter((c) => c != "!" && c != "." && c != " " && c != ",");
  return newWord.slice().reverse().join("") === newWord.join("");
};

// Do not edit below this line
module.exports = palindromes;
