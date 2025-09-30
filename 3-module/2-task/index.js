function filterRange(arr, a, b) {
  // ваш код...
    const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
     if (element >= a && element <= b) {
      filteredArr.push(element);
    }
  }
  return filteredArr;
}
