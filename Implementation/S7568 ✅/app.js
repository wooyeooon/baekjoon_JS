// 문제풀이: https://www.acmicpc.net/problem/7568

//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  [n, ...person] = input;
  let count = [];

  for (let i=0; i<n; i++) {
    let rank = 0;
    for (let j=0; j<n; j++) {
      if (i === j) continue;
      [aWeight, aTall] = person[i].split(' ');
      [bWeight, bTall] = person[j].split(' ');

      if (+aWeight < +bWeight && +aTall < +bTall)
      rank += 1;
    }
    count.push(rank + 1);
  }
  return count.join(' ');
}

console.log(solution(input));



