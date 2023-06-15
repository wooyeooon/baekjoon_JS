// 문제풀이: https://www.acmicpc.net/problem/2476

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function getMaxPrize(a, b, c) {
  if (a === b && b === c) {
    return 10000 + a * 1000;
  } else if (a === b || a === c) {
    return 1000 + a * 100;
  } else if (b === c) {
    return 1000 + b * 100;
  } else {
    return Math.max(a, b, c) * 100;
  }
}

function solution() {
  const n = parseInt(input[0]);
  let maxPrize = 0;

  for (let i = 1; i <= n; i++) {
    const [a, b, c] = input[i].split(' ').map(Number);
    const prize = getMaxPrize(a, b, c);
    maxPrize = Math.max(maxPrize, prize);
  }

  return maxPrize;
}

console.log(solution());
