// 문제: https://www.acmicpc.net/problem/11576

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

// 정리
const [a, b] = input[0].split(' ').map((num) => Number(num));
const arr = input[2].split(' ').map((num) => Number(num));

// 풀이
function solution(a, b, arr) {
  const answer = [];
  let tenNum = 0;
  arr.forEach((num, i) => {
    tenNum += a ** (arr.length - 1 - i) * num;
  });
  while (tenNum > 0) {
    answer.push(tenNum % b);
    tenNum = Math.floor(tenNum / b);
  }
  answer.reverse();
  return answer.join(' ');
}
console.log(solution(a, b, arr));
