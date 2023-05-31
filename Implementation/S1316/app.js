// 문제풀이: https://www.acmicpc.net/problem/1316

//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let cnt = input[0];

for (let i=0; i<=parseInt(input[0]); i++) {
  let letter =[];
  for (word of input[i]){
    if(letter.includes(word)) {
      if(letter[letter.length - 1] !== word) {
        cnt --;
        break;
      }
    } else {
      letter.push(word);
    }
  }
}
console.log(cnt);