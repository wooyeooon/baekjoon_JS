// 문제풀이: https://www.acmicpc.net/problem/2941

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

function solution(input){
  let result = input;
  const croatia = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
  for(let i=0; i<croatia.length; i++){
      const divided = result.split(croatia[i])
      if(divided.length > 1){
          result = divided.join('@');
      }
  }
  console.log(result.length)
}
solution(input);

