// 문제풀이: https://www.acmicpc.net/problem/1051

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const board = [];
for (let i = 1; i <= N; i++) {
  board.push(input[i].split('').map(Number));
}

let maxLen = 1; // 정사각형의 최소 길이는 1
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    for (let len = 1; len < Math.min(N, M); len++) {
      // (i, j)에서 시작하는 len x len 정사각형이 가능한지 확인
      if (i + len < N && j + len < M) {
        if (
          board[i][j] === board[i + len][j] && // 왼쪽 위
          board[i][j] === board[i][j + len] && // 오른쪽 위
          board[i][j] === board[i + len][j + len] // 오른쪽 아래
        ) {
          maxLen = Math.max(maxLen, len + 1); // 정사각형의 길이 갱신
        }
      }
    }
  }
}

console.log(maxLen * maxLen); // 최대 정사각형의 넓이 출력
