// 문제풀이: https://www.acmicpc.net/problem/1292

//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(" ").map(Number);
const seq = [];

let num = 0;

while (seq.lenght < M) {
  num++;

  for (let i = 0; i < num; i++) {
    seq.push(num);
  }
}
console.log(seq.slice(N - 1, M).reduce((a, b) => a + b));

