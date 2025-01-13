

  function factorialIterative(num) {
    if (num < 0) return "Factorial is not defined for negative numbers";
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }
  
  console.log(factorialIterative(10));