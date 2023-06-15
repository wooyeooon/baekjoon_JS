// 문제풀이: https://www.acmicpc.net/problem/3085

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function getMaxCandies(board) {
  const n = board.length;
  let maxCandies = 1;

  // 행 방향으로 인접한 사탕 개수 확인
  for (let i = 0; i < n; i++) {
    let count = 1;
    for (let j = 1; j < n; j++) {
      if (board[i][j] === board[i][j - 1]) {
        count++;
      } else {
        maxCandies = Math.max(maxCandies, count);
        count = 1;
      }
    }
    maxCandies = Math.max(maxCandies, count);
  }

  // 열 방향으로 인접한 사탕 개수 확인
  for (let j = 0; j < n; j++) {
    let count = 1;
    for (let i = 1; i < n; i++) {
      if (board[i][j] === board[i - 1][j]) {
        count++;
      } else {
        maxCandies = Math.max(maxCandies, count);
        count = 1;
      }
    }
    maxCandies = Math.max(maxCandies, count);
  }

  return maxCandies;
}

function solution() {
  const n = parseInt(input[0]);
  const board = input.slice(1).map((line) => line.split(''));

  let maxCandies = 1;

  // 사탕의 위치를 바꿔가며 최대 사탕 개수 확인
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      // 가로로 인접한 두 사탕의 위치를 바꿈
      if (board[i][j] !== board[i][j + 1]) {
        const temp = board[i][j];
        board[i][j] = board[i][j + 1];
        board[i][j + 1] = temp;

        maxCandies = Math.max(maxCandies, getMaxCandies(board));

        // 원래 위치로 되돌림
        board[i][j + 1] = board[i][j];
        board[i][j] = temp;
      }

      // 세로로 인접한 두 사탕의 위치를 바꿈
      if (board[j][i] !== board[j + 1][i]) {
        const temp = board[j][i];
        board[j][i] = board[j + 1][i];
        board[j + 1][i] = temp;

        maxCandies = Math.max(maxCandies, getMaxCandies(board));

        // 원래 위치로 되돌림
        board[j + 1][i] = board[j][i];
        board[j][i] = temp;
      }
    }
  }

  return maxCandies;
}

console.log(solution());
