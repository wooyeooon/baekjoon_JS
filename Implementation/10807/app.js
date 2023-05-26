const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filePath).toString().split('\n');

const N = input[0].map((val)=> +val);
const arr = [].input[1].split(' ');
let V = input[2];
let cnt = 0;

