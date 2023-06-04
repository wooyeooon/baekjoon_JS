// 문제풀이: https://www.acmicpc.net/problem/10988

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

function solution(s){
  let answer="1";
  s=s.toLowerCase().replace(/[^a-z]/g, '');
  if(s.split('').reverse().join('')!==s) return "0";
  return answer;
}
console.log(solution(input));
