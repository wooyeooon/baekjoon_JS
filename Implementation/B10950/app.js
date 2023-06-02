// 문제: https://www.acmicpc.net/problem/10950

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const T = input[0];

for (var i = 0; i < T; i++) {
  const Num2 = input[i+1];
  let arr = Num2.split(" ");
  let A = parseInt(arr[0]);
  let B = parseInt(arr[1]);

  console.log(A+B);
}
