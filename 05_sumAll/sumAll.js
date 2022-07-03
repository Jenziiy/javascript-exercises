const sumAll = function(...args) {
  let sum = 0;
  args.sort();
  if (args[0] >= 0 && args[1] >= 0 && typeof args[0] && typeof args[1] == "number" ) {
    for(let i = args[0]; i <= args[1] ; i++) {
      sum += i;
  }
  } else {
    return sum = 'ERROR';
    }
return sum;
};

// Do not edit below this line
module.exports = sumAll;
