// 문제: https://www.acmicpc.net/problem/8958

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const arrayLength = input[0];
const items = input.slice(1);

solution(arrayLength, items);

function solution(arrayLength, items) {
  for (let i=0; i<arrayLength; i++) {
    const OXList = items[i];
    let oCnt = 0;
    let score = 0;
    for (let j=0; j<OXList.length; j++) {
      const OorX = OXList[j];
      if(OorX === 'O') {
        oCnt++;
        score += oCnt;
      } else {
        oCnt =0;
      }
    }
  console.log(score);
  }
}