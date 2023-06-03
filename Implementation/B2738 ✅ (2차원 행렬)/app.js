// 문제풀이: https://www.acmicpc.net/problem/2738

//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const testCaseNum = input[0];
const testCase = input.slice(1);

function solution(testCaseNum, testCase){
    const [column, row] = testCaseNum.split(' ');

    const fir_matrix = testCase.slice(0,column);
    const sec_matrix = testCase.slice(column);
    console.log(fir_matrix);

    let newMatrix = []
    for(let i=0; i<column; i++){
        let newRow = []
        for(let j=0; j<row; j++){
            const new_element = +fir_matrix[i].split(' ')[j] + +sec_matrix[i].split(' ')[j]
            newRow.push(new_element)
        }
        newMatrix.push(newRow)
    }
    
    for(let i=0; i<newMatrix.length; i++){
        console.log(newMatrix[i].join(' '))
    }
}

solution(testCaseNum, testCase)