const fibonacci = function(positionOfNumber) {
  let previousNumber = 0;
  let nextNumber = 1; 

  if ( positionOfNumber == 0) { return 0 } 
    else if (positionOfNumber < 0) { return 'OOPS'};

    for(let i = 1; i < positionOfNumber; i++){  
      const glassHalfEmpty = nextNumber;
      nextNumber = previousNumber + nextNumber
      previousNumber = glassHalfEmpty;
    }

  return nextNumber;
};

// Do not edit below this line
module.exports = fibonacci;
