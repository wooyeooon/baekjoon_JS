// 문제풀이: https://www.acmicpc.net/problem/1034

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const lamps = [];
for (let i = 1; i <= N; i++) {
  lamps.push(input[i].split('').map(Number));
}
const K = Number(input[N + 1]);

let answer = 0;
for (let i = 0; i < N; i++) {
  let zeroCount = 0;
  for (let j = 0; j < M; j++) {
    if (lamps[i][j] === 0) {
      zeroCount++;
    }
  }

  // i번째 행의 0 개수가 K보다 크거나 K와의 차이가 짝수인 경우에만 가능
  if (zeroCount <= K && zeroCount % 2 === K % 2) {
    let count = 0;
    for (let k = 0; k < N; k++) {
      // k번째 행과 i번째 행이 동일하면 카운트 증가
      if (lamps[k].join('') === lamps[i].join('')) {
        count++;
      }
    }
    // 최대 개수 업데이트
    answer = Math.max(answer, count);
  }
}

console.log(answer);
