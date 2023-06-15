// 문제풀이: https://www.acmicpc.net/problem/15685

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const dx = [1, 0, -1, 0]; // 동, 북, 서, 남
const dy = [0, -1, 0, 1];

function solution() {
  const N = parseInt(input[0]);
  const curves = input.slice(1).map((line) => line.split(' ').map(Number));

  const dragonCurve = Array.from(Array(101), () => Array(101).fill(false)); // 드래곤 커브를 기록할 배열

  const generateDragonCurve = (x, y, d, g) => {
    const directions = [d]; // 현재 세대에서의 방향을 저장할 배열
    dragonCurve[y][x] = true; // 시작점 체크

    for (let i = 0; i < g; i++) {
      const len = directions.length;

      // 이전 세대의 방향을 역순으로 추가
      for (let j = len - 1; j >= 0; j--) {
        directions.push((directions[j] + 1) % 4);
      }
    }

    // 방향에 따라 좌표 이동하며 드래곤 커브 체크
    for (let i = 0; i < directions.length; i++) {
      const dir = directions[i];
      x += dx[dir];
      y += dy[dir];
      dragonCurve[y][x] = true;
    }
  };

  let count = 0; // 정사각형 개수 카운트

  for (let i = 0; i < N; i++) {
    const [x, y, d, g] = curves[i];
    generateDragonCurve(x, y, d, g);
  }

  // 정사각형 개수 세기
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      if (dragonCurve[i][j] && dragonCurve[i][j + 1] && dragonCurve[i + 1][j] && dragonCurve[i + 1][j + 1]) {
        count++;
      }
    }
  }

  return count;
}

console.log(solution());
