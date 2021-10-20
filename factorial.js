// Factorial solution implemented iteratively
const factorial = (num) => {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total *= i;
  }
  return total;
};

console.log(factorial(5));
