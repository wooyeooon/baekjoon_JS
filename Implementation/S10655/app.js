// 문제풀이: https://www.acmicpc.net/problem/10655

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const points = [];
for (let i = 1; i <= N; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  points.push({ x, y });
}

let totalDistance = 0;
for (let i = 0; i < N - 1; i++) {
  const { x: x1, y: y1 } = points[i];
  const { x: x2, y: y2 } = points[i + 1];
  totalDistance += Math.abs(x2 - x1) + Math.abs(y2 - y1);
}

let maxSavedDistance = 0;
for (let i = 1; i < N - 1; i++) {
  const { x: x1, y: y1 } = points[i - 1];
  const { x: x2, y: y2 } = points[i];
  const { x: x3, y: y3 } = points[i + 1];
  const savedDistance = Math.abs(x2 - x1) + Math.abs(y2 - y1) + Math.abs(x3 - x2) + Math.abs(y3 - y2) - Math.abs(x3 - x1) - Math.abs(y3 - y1);
  maxSavedDistance = Math.max(maxSavedDistance, savedDistance);
}

console.log(totalDistance - maxSavedDistance);
