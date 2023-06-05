// 문제풀이: https://www.acmicpc.net/problem/2501

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();


const [n, k] = input.split(' ').map(Number);
const divisor = findKthDivisor(n, k);

function findKthDivisor(n, k) {
  const divisors = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      divisors.push(i);
    }
  }
  return k <= divisors.length ? divisors[k - 1] : 0;
}

console.log(divisor);