// 문제: https://www.acmicpc.net/problem/10817

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');


for (let i=0; i < input.length; i += 10) {
    console.log(input.substr(i, 10));
}