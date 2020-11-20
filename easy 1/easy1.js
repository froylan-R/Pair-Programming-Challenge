function OddAndEven(numbers) {
    let odd = [];
    let even = [];

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        even.push(numbers[i]);
      } else {
        odd.push(numbers[i]);
      }
    }

    const returnObj= {
      odd,
      even,
    };

    return returnObj;
  }

  console.log(OddAndEven([2,4,7,11,15,16]));