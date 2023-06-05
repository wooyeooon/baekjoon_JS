// 문제풀이: https://www.acmicpc.net/problem/9506

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  const n = parseInt(line);
  if (n === -1) {
    rl.close();
    return;
  }

  const divisors = findDivisors(n);
  const sum = divisors.reduce((acc, cur) => acc + cur, 0);

  if (sum === n) {
    console.log(`${n} = ${divisors.join(' + ')}`);
  } else {
    console.log(`${n} is NOT perfect.`);
  }
});

function findDivisors(n) {
  const divisors = [];
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      divisors.push(i);
    }
  }
  return divisors;
}