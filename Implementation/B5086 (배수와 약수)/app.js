// 문제풀이: https://www.acmicpc.net/problem/25206

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');


for (let i = 0; i < input.length; i++) {
  const [n1, n2] = input[i].split(" ").map(Number);

  if (n1 === 0 && n2 === 0) break;
  else if (n2 % n1 === 0) console.log("factor");
  else if (n1 % n2 === 0) console.log("multiple");
  else console.log("neither");
}