// 문제: https://www.acmicpc.net/problem/11576

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

// 정리
let alphabet = new Array(26).fill(-1);


// 풀이
for (let i=0; i<input.length; i++) {
    let ascii = input[i].charCodeAt(0)-97; // 소문자이므로 -97
    if (alphabet[ascii]==-1) { // 처음 등장하는 위치
        alphabet[ascii] = i;
    }
}

let answer = "";
for (let i=0; i<alphabet.length; i++) {
    answer += alphabet[i] + " ";
}

console.log(answer);
