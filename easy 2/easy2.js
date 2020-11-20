function isPrime(num) {

    if (num === 2) {
      return true;
    } else if (num > 1) {
      for (var i = 2; i < num; i++) {
  
        if (num % i !== 0) {
          return true;
        } else if (num === i * i) {
          return false
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  
  }
    function sortPrime(primeArray) {
      let prime = [];
      let notPrime= [];
  
      for (let number of primeArray) {
        if(isPrime(number)){
          prime.push(number);
          
        }else {
          notPrime.push(number);
        }
      } 

      const returnObject = {
        notPrime,
        prime,
      };
  
      return returnObject;
    }
    console.log(sortPrime([69,420, 3, 7]));