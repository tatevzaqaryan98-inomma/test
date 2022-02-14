function FindSumNumbersForN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  let arr = [];

  for (let i = 0; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      let a = i,
        b = j;
      if (a * b === sum - (a + b)) {
        arr.push([a, b]);
      }
    }
  }
  console.log(arr);
}
FindSumNumbersForN(10);
