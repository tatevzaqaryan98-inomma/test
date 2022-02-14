function Fibonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  let previous = 0,
    current = 1;
  for (let i = 2; i <= n; i++) {
    let newCurrent = previous + current;
    previous = current;
    current = newCurrent;
  }
  console.log(previous);
}

Fibonacci(2);
