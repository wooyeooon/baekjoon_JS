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