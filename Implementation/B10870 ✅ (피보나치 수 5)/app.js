// 문제풀이: https://www.acmicpc.net/problem/10870

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

solution(input);

function solution(N) {
  let answer;
  let fibo = [];
  fibo[0] = 0;
  fibo[1] = 1;
  fibo[2] = 1;
  if (N < 3) answer = fibo[N];
  else {
    for (let i = 2; i <= N; i++) {
      fibo[i] = fibo[i - 2] + fibo[i - 1];
    }
    answer = fibo[N];
  }
  console.log(answer);
}