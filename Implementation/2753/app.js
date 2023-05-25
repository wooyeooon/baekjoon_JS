// 문제: https://www.acmicpc.net/problem/2753

const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');

const year = parseInt(input);


if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
  console.log(1);
} else {
  console.log(0);
}


