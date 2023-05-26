// 문제: https://www.acmicpc.net/problem/3052

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const items = input.map(items => +items);

solution(items);

function solution(items) {
  const answer = Array(42).fill(0);
  for (let i = 0; i < 10; i++) {
    const nowChar = +items[i] % 42;
    answer[nowChar]++;
  }
  let cnt = 0;
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] !== 0){
      cnt++;
    }
  }
  console.log(cnt);
}