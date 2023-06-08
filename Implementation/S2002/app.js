// 문제풀이: https://www.acmicpc.net/problem/2002

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = parseInt(input[0]);
const inOrder = input.slice(1, N + 1);
const outOrder = input.slice(N + 1);

const carMap = new Map();

for (let i = 0; i < N; i++) {
  carMap.set(inOrder[i], i); // 차량의 실제 순서를 Map에 저장
}

let count = 0;

for (let i = 0; i < N; i++) {
  const currCar = outOrder[i];
  const currIndex = carMap.get(currCar);

  for (let j = i + 1; j < N; j++) {
    const nextCar = outOrder[j];
    const nextIndex = carMap.get(nextCar);

    if (nextIndex < currIndex) {
      count++; // 추월이 발생한 경우 count 증가
      break;
    }
  }
}

console.log(count);
