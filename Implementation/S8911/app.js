// 문제풀이: https://www.acmicpc.net/problem/8911

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const dx = [0, 1, 0, -1]; // 동, 남, 서, 북
const dy = [1, 0, -1, 0];

function getMinArea(commands) {
  let minX = 0;
  let maxX = 0;
  let minY = 0;
  let maxY = 0;

  let x = 0;
  let y = 0;
  let dir = 0;

  for (let i = 0; i < commands.length; i++) {
    const command = commands[i];

    if (command === 'F') {
      x += dx[dir];
      y += dy[dir];
    } else if (command === 'B') {
      x -= dx[dir];
      y -= dy[dir];
    } else if (command === 'L') {
      dir = (dir + 3) % 4; // 왼쪽으로 90도 회전
    } else if (command === 'R') {
      dir = (dir + 1) % 4; // 오른쪽으로 90도 회전
    }

    minX = Math.min(minX, x);
    maxX = Math.max(maxX, x);
    minY = Math.min(minY, y);
    maxY = Math.max(maxY, y);
  }

  const width = maxX - minX;
  const height = maxY - minY;
  const area = width * height;

  return area;
}

const T = parseInt(input[0]);

for (let i = 1; i <= T; i++) {
  const commands = input[i].split('');
  const minArea = getMinArea(commands);
  console.log(minArea);
}
