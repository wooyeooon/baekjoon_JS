// 문제: https://www.acmicpc.net/problem/10807

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const TestCase = input[0];
const num = input[2];
let arr = input[1].split(' ');
let cnt = 0;

for (let x of arr) {
  if (x === num) cnt ++;
}
console.log(cnt);