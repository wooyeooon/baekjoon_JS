// 문제풀이: https://www.acmicpc.net/problem/14890

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function checkSlope(arr, L) {
  const n = arr.length;
  const visited = Array.from({ length: n }, () => false);

  for (let i = 0; i < n - 1; i++) {
    if (arr[i] === arr[i + 1]) continue; // 높이가 같으면 건너뜀

    const diff = Math.abs(arr[i] - arr[i + 1]);
    if (diff !== 1) return false; // 높이 차이가 1이 아니면 실패

    if (arr[i] > arr[i + 1]) {
      // 왼쪽 경사로 설치
      for (let j = i + 1; j <= i + L; j++) {
        if (j >= n || arr[i + 1] !== arr[j] || visited[j]) return false; // 경사로를 설치할 수 없는 경우
        visited[j] = true;
      }
    } else {
      // 오른쪽 경사로 설치
      for (let j = i; j > i - L; j--) {
        if (j < 0 || arr[i] !== arr[j] || visited[j]) return false; // 경사로를 설치할 수 없는 경우
        visited[j] = true;
      }
    }
  }

  return true; // 모든 조건을 만족하면 성공
}

function solution(n, L, map) {
  let answer = 0;

  for (let i = 0; i < n; i++) {
    if (checkSlope(map[i], L)) answer++; // 가로 방향 검사
  }

  for (let i = 0; i < n; i++) {
    const arr = [];
    for (let j = 0; j < n; j++) {
      arr.push(map[j][i]); // 세로 방향을 가로 방향으로 변환
    }
    if (checkSlope(arr, L)) answer++; // 세로 방향 검사
  }

  return answer;
}

const [n, L] = input[0].split(' ').map(Number);
const map = input.slice(1).map((row) => row.split(' ').map(Number));

console.log(solution(n, L, map));
