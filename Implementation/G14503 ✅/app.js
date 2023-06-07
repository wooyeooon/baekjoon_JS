// 문제풀이: https://www.acmicpc.net/problem/14503

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const [r, c, d] = input[1].split(' ').map(Number);
const map = [];
const visited = [];

for (let i = 0; i < N; i++) {
  map.push(input[i + 2].split(' ').map(Number));
  visited.push(Array(M).fill(false));
}

const dr = [-1, 0, 1, 0]; // 북, 동, 남, 서
const dc = [0, 1, 0, -1];

function clean(r, c, d) {
  let count = 1;
  visited[r][c] = true;

  while (true) {
    let rotated = false;
    let curDir = d;

    for (let i = 0; i < 4; i++) {
      curDir = (curDir + 3) % 4; // 현재 방향에서 왼쪽으로 회전

      const nr = r + dr[curDir];
      const nc = c + dc[curDir];

      if (nr >= 0 && nr < N && nc >= 0 && nc < M && map[nr][nc] === 0 && !visited[nr][nc]) {
        count++;
        visited[nr][nc] = true;
        r = nr;
        c = nc;
        d = curDir;
        rotated = true;
        break;
      }
    }

    if (!rotated) {
      const backDir = (d + 2) % 4; // 현재 방향에서 후진

      const nr = r + dr[backDir];
      const nc = c + dc[backDir];

      if (nr >= 0 && nr < N && nc >= 0 && nc < M && map[nr][nc] === 0) {
        r = nr;
        c = nc;
      } else {
        break; // 후진도 할 수 없으면 종료
      }
    }
  }

  return count;
}

const answer = clean(r, c, d);
console.log(answer);
