// 문제풀이: https://www.acmicpc.net/problem/9093

//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');


// 스택을 활용한 풀이
const len = input.shift();
for (let i=0; i < len; i++) {
    let answer = '';
    const stack = [];
    
    input[i].split(" ").forEach(word => {
        for (let j=0; j < word.length; j++) {
            stack.push(word[j]);
        }
        for (let j=0; j < word.length; j++) {
            answer += stack.pop();
        }
        answer += ' ';
    });
    
    console.log(answer);
}


// const len = inputs.shift();
// const result = [];

// for (let i=0; i < len; i++) {
//   inputs[i].split(" ").forEach(word => result.push(word.split("").reverse().join("")));
// }

// console.log(result.join("\n"));
