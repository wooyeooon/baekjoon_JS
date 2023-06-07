// 문제풀이: https://www.acmicpc.net/problem/20053

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = parseInt(input[0]);

for (let i = 1; i <= T; i++) {
  const numbers = input[i * 2].split(' ').map(Number);
  console.log(Math.min(...numbers), Math.max(...numbers));
}



