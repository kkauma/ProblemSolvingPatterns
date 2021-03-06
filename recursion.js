// countDown function that uses recursion
const countDown = (num) => {
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
};

countDown(7);

// countDown function implemented iteratively
const countDown2 = (num) => {
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
  console.log("All done!");
};

countDown2(10);
