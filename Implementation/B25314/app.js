// 문제풀이: https://www.acmicpc.net/problem/25314

//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

for (let i = 0; i < input / 4; i++) {
  console.log("long")
  if (i == input/4 -1) console.log('int')
}