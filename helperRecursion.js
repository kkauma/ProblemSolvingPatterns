// Helper Method Recursion
const collectOddValues = (arr) => {
  let result = [];

  const helper = (helperInput) => {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  };
  helper(arr);
  return result;
};

console.log(collectOddValues([3, 45, 6, 8, 0, 12, 35, 77, 7]));
