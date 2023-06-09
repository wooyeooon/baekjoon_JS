// 문제풀이: https://www.acmicpc.net/problem/8949

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const num1 = input[0];
const num2 = input[1];
const len = Math.max(num1.length, num2.length);

let result = '';
for (let i = 0; i < len; i++) {
  const digit1 = parseInt(num1[num1.length - 1 - i]) || 0;
  const digit2 = parseInt(num2[num2.length - 1 - i]) || 0;
  const sum = digit1 + digit2;
  result = sum + result;
}

console.log(result);
