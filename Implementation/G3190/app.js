// 문제풀이: https://www.acmicpc.net/problem/3190

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input.shift());
const board = Array.from(Array(N), () => Array(N).fill(0));

const K = parseInt(input.shift());
for (let i = 0; i < K; i++) {
  const [row, col] = input.shift().split(' ').map(Number);
  board[row - 1][col - 1] = 1; // 사과 위치 표시
}

const L = parseInt(input.shift());
const moves = [];
for (let i = 0; i < L; i++) {
  const [time, direction] = input.shift().split(' ');
  moves.push([parseInt(time), direction]);
}

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

function simulate() {
  let dir = 0; // 초기 방향 (동쪽)
  let time = 0; // 초기 시간
  let row = 0; // 초기 위치
  let col = 0;
  let snake = [[0, 0]]; // 뱀의 위치를 저장하는 배열
  let idx = 0; // 현재까지 진행한 방향 전환 명령의 인덱스

  while (true) {
    time++; // 1초 증가
    row += dx[dir]; // 현재 방향으로 이동
    col += dy[dir];

    if (row < 0 || row >= N || col < 0 || col >= N) {
      // 벽에 부딪힌 경우 게임 종료
      break;
    }

    if (snake.some((pos) => pos[0] === row && pos[1] === col)) {
      // 뱀의 몸과 부딪힌 경우 게임 종료
      break;
    }

    snake.push([row, col]); // 뱀의 위치 갱신

    if (board[row][col] === 1) {
      // 사과를 먹은 경우
      board[row][col] = 0; // 사과 제거
    } else {
      // 사과를 먹지 않은 경우
      snake.shift(); // 꼬리 줄이기
    }

    if (idx < L && time === moves[idx][0]) {
      // 방향 전환 명령이 있는 경우
      if (moves[idx][1] === 'D') {
        dir = (dir + 1) % 4; // 오른쪽으로 90도 회전
      } else {
        dir = (dir + 3) % 4; // 왼쪽으로 90도 회전
      }
      idx++;
    }
  }

  return time;
}

const result = simulate();
console.log(result);
