// 문제: https://www.acmicpc.net/problem/10808

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

const r1 = +input[0];
let s = +input[1];


console.log((s*2)-r1);