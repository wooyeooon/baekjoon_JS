// 문제풀이: https://www.acmicpc.net/problem/2566

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

function solution(input){
  const matrix = input.split('\n').map(x => x.split(' ').map(x => +x))
  const column = matrix.length
  const row = matrix[0].length

  let newArr = []
  for(let c=0; c<column; c++){
      let bigIdx = 0;
      let bigNum = matrix[c].reduce(
          (pre, cur, idx) =>{
              pre < cur ? bigIdx = idx : bigIdx
              return pre < cur ? cur : pre
          }
      )
      newArr.push([bigNum, c+1 ,bigIdx+1])
  }
  const result = newArr.reduce(
      (pre, cur) =>{
          return pre[0] > cur[0] ? pre : cur
      }
  )
  console.log(result[0])
  console.log(result[1], result[2])
}

solution(input)