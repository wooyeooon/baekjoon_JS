// 문제풀이: https://www.acmicpc.net/problem/5597

//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n').map(Number);

const solution = input => {
  let odd = []
  input.forEach(el => {
    if(el % 2 === 1){
      odd.push(el)
    }
  })
  return odd.length === 0 ? 
    -1 : odd.reduce((a,b)=>a+b,0) + '\n' + Math.min(...odd)
}

console.log(solution(input))