// 문제풀이: https://www.acmicpc.net/problem/1009

//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

// N1: 컴퓨터 개수
// N2: 처리해야될 데이터 개수
// 1번 데이터는 1번 컴퓨터, 2번 데이터는 2번 컴퓨터, 3번 데이터는 3번 컴퓨터 ...

let N = input.shift();

const result = input.map(v => {
  const [a, b] = v.split(' ');  

  let pow = 1;

  for (let j = 0; j < b; j++) {
    pow = (pow * a) % 10;
  }
    
  return pow === 0 ? 10 : pow;
});  

console.log(result.join("\n"));
