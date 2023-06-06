// 문제풀이: https://www.acmicpc.net/problem/1004

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const testCase = parseInt(input[0]);
let answer = '';

let lineIndex = 1;
for (let t = 0; t < testCase; t++) {
  const [startX, startY, endX, endY] = input[lineIndex++].split(' ').map(Number);
  const planetCount = parseInt(input[lineIndex++]);
  let count = 0;

  for (let i = 0; i < planetCount; i++) {
    const [planetX, planetY, planetR] = input[lineIndex++].split(' ').map(Number);
    const startDist = getDistance(startX, startY, planetX, planetY);
    const endDist = getDistance(endX, endY, planetX, planetY);

    if ((startDist < planetR && endDist > planetR) || (startDist > planetR && endDist < planetR)) {
      count++;
    }
  }

  answer += count + '\n';
}

console.log(answer.trim());

function getDistance(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}
