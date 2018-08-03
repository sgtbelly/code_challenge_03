function insertDash(num) {
    var numInStr = String(num);
    var numOutStr = numInStr[0], ii;
  
    for (ii = 1; ii < numInStr.length; ii++) {
      if (numInStr[ii-1] % 2 !== 0 && numInStr[ii] % 2 !== 0) {
        numOutStr += '-';
      }
  
      numOutStr += numInStr[ii];
    }
  
    return numOutStr;
  }