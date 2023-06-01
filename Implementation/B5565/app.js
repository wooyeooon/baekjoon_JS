// 문제풀이: https://www.acmicpc.net/problem/5565

//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const TestCase = input[0];
let arr = [...input].map(Number);
let sum = arr.reduce((a, b)=> a + b,) - TestCase

console.log(TestCase - sum);