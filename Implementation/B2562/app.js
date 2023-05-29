// 문제: https://www.acmicpc.net/problem/2562

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const items = input.map(items => +items);

solution(items);

function solution(items) {
  let max = 0;
  let maxIdx = 0;

  for (let i = 0; i < items.length; i++) {
    item = items[i];
    if (max < item) {
      max = item;
      maxIdx = i;
    }
  }
  console.log(max);
  console.log(maxIdx + 1);
}