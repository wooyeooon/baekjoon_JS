// 문제풀이: https://www.acmicpc.net/problem/4396

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const map = input.slice(1, N + 1).map((row) => row.split(''));
const clickMap = input.slice(N + 1).map((row) => row.split(''));

const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
const dy = [-1, 0, 1, -1, 1, -1, 0, 1];

let gameOver = false;

// 클릭한 지점이 지뢰인지 확인하는 함수
const isMine = (x, y) => {
  if (map[x][y] === '*') return true;
  return false;
};

// 주변 지뢰 개수를 세는 함수
const countMines = (x, y) => {
  let count = 0;
  for (let i = 0; i < 8; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx >= 0 && nx < N && ny >= 0 && ny < N && isMine(nx, ny)) {
      count++;
    }
  }
  return count;
};

// 클릭한 지점을 확인하는 함수
const click = (x, y) => {
  if (isMine(x, y)) {
    gameOver = true;
    return;
  }
  const count = countMines(x, y);
  clickMap[x][y] = count.toString();
};

// 게임 진행
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (clickMap[i][j] === 'x') {
      click(i, j);
    }
  }
}

// 게임 결과 출력
if (gameOver) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (map[i][j] === '*') {
        clickMap[i][j] = '*';
      }
    }
  }
}

for (let i = 0; i < N; i++) {
  console.log(clickMap[i].join(''));
}
