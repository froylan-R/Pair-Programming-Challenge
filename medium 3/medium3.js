function gdcTwoNumbers(a, b) {
    var R;
    while ((a % b) > 0)  {
      R = a % b;
      a = b;
      b = R;
    }
    return b;
  }
  
  console.log(gdcTwoNumbers(600,420));