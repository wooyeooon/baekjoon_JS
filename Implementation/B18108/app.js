// 문제: https://www.acmicpc.net/problem/18108

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');


let curyear = input;
let year = '543';

console.log(input - year);

