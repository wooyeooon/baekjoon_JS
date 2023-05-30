// 문제풀이: // 문제풀이: https://www.acmicpc.net/problem/2587

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

let arr = input.sort((a,b)=> a-b);
let avg = arr.reduce((a,b)=>a+b);

console.log(avg / input.length);
console.log(arr[2]);