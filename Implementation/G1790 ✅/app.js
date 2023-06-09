// 문제풀이: https://www.acmicpc.net/problem/1790

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ');

const N = parseInt(input[0]);
const K = parseInt(input[1]);

function getDigitCount(num) {
  return num.toString().length;
}

function getNumberAtPosition(n, k) {
  const currentString = n.toString();
  const digit = parseInt(currentString[k - 1]);
  return digit;
}

let numberCount = 0;
let result = -1;

for (let i = 1; i <= N; i++) {
  const digitCount = getDigitCount(i);
  numberCount += digitCount;

  if (numberCount >= K) {
    result = getNumberAtPosition(i, K - (numberCount - digitCount));
    break;
  }
}

console.log(result);
