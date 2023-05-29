// 문제: https://www.acmicpc.net/problem/10817

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

input = input.sort((a, b) => b - a);

console.log(input[1]);