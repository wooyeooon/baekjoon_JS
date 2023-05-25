// 문졔: https://www.acmicpc.net/problem/1330

const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split(' ').map(val=> +val)

const [a, b] = input;

if(a>b) {
  console.log('>')
}
if(a<b) {
  console.log('<')
}
if(a === b){
  console.log('==')
}