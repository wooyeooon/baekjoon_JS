// 문제풀이: https://www.acmicpc.net/problem/2444

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

function solution(input){
  const length = 2*input-1 // 줄 길이
  for(let i=1;i<=(length-1)/2+1;i++){
      console.log(' '.repeat(input-i)+'*'.repeat(i+(i-1)))
  }
  for(let i=1;i<=(length-1)/2;i++){
      console.log(' '.repeat(i)+'*'.repeat(length-(2*i)))
  }
}
solution(+input);