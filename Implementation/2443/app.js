// 문제: https://www.acmicpc.net/problem/2441

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');


for (let i=input; i > 0; i--) {
  console.log(' '.repeat(2*i-1) + '*'.repeat(input-i));
}


