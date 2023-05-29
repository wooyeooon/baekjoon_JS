// 문제: https://www.acmicpc.net/problem/2442

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');


for (let i=1; i <= input; i++) {
  console.log(' '.repeat(input-i) + '*'.repeat(2*i-1));
}


