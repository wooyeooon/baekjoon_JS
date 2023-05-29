// 문제: https://www.acmicpc.net/problem/2475

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

let tmp = 0;

for (let x of input) {
  tmp += x*x
}
console.log(tmp%10);