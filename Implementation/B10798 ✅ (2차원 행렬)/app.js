// 문제풀이: https://www.acmicpc.net/problem/10798

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(x => x.trim());

function solution(input){
    let rows = []
    for(let i=0; i<input.length; i++){
        rows.push(input[i].length)
    }
    let largestNum = 0;
    for(let i=0; i<rows.length; i++){
        if(rows[i] > largestNum){
            largestNum = rows[i];
        }
    }

    let result = [];    
    for(let i=0; i<largestNum; i++){
        for(let j=0; j<input.length; j++){
            result.push(input[j][i])
        }
    }
    console.log(result.join(''))
};  

solution(input);