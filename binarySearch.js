// Linear Search, O(n)
const linearSearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
};

// console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 7));

// Binary Search, O(logn)
const binarySearch = (arr, val) => {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    let currEl = arr[mid];

    if (arr[mid] < val) {
      min = mid + 1;
    } else if (arr[mid] > val) {
      max = mid - 1;
    } else {
      return mid;
    }
  }
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
