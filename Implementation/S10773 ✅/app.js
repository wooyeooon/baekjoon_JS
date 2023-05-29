// 문제풀이: https://www.acmicpc.net/problem/10773

//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs
.readFileSync(filePath)
.toString()
.trim()
.split('\n')
.slice(1)
.map(Number);

const solution = input => {
  const stack = [];
  input.forEach(el => el !== 0 ? stack.push(el) : stack.pop());
  return stack.reduce((a,b)=>a+b,0)
}
console.log(solution(input))