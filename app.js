function insertDash(num) {
    var inStr = String(num);
    var outStr = inStr[0], ii;
  
    for (ii = 1; ii < inStr.length; ii++) {
      if (inStr[ii-1] % 2 !== 0 && inStr[ii] % 2 !== 0) {
        outStr += '-';
      }
  
      outStr += inStr[ii];
    }
  
    return outStr;
  }