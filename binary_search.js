const array = [4, 6, 2, 7, 543, 2, 3, 83, 23, 13, 1, 14];

const arraySorted = array.sort((a, b) => a - b);

console.log({ arraySorted });

function binary_search(arr, value) {
  let high = arr.length - 1;
  let low = 0;
  let mid = 0;

  while (low <= high) {
    mid = Math.floor((high + low) / 2);
    console.log({ mid, high, low });

    // if value is true return this value
    if (arr[mid] === value) {
      return arr[mid];
    } else if (value > arr[mid]) {
      // move the low
      low = mid + 1;
    } else {
      // move the high
      high = mid - 1;
    }
  }
  return -1;
}

const result = binary_search(arraySorted, 1);

console.log({ result });
