// 문제풀이: https://www.acmicpc.net/problem/1235

const fs = require('fs');
// 입력 받기
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(input[0]);
const names = input.slice(1);

function solution(names) {
  const length = names[0].length;

  for (let i = 1; i <= length; i++) {
    const suffixes = new Set();

    for (let j = 0; j < names.length; j++) {
      const suffix = names[j].slice(-i);
      suffixes.add(suffix);
    }

    if (suffixes.size === names.length) {
      return i;
    }
  }

  return length;
}


// 문제 해결 및 결과 출력
console.log(solution(names));
