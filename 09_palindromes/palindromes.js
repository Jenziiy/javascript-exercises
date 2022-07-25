const palindromes = function (input) {
let normalString = input.toLowerCase().replace(/[^a-z]/g, "");
return normalString.split("").reverse().join("") == normalString;
};

// Do not edit below this line
module.exports = palindromes;
