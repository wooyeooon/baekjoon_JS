// 문제풀이: https://www.acmicpc.net/problem/10813

//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [bagNum, testNum] = input[0].split(' ').map(x=>+x);
const testCases = input.slice(1);

function solution(bagNum, testNum, testCases){
    //가방 생성
    const bags = [];
    for(let i=0;i<bagNum;i++){
        bags.push(i+1);
    }
    //공 바꾸기 시작
    for(let i=0; i<testNum; i++){
        let [first, second] = testCases[i].split(' ').map(x => +x);
        let copyBag = [...bags]
        bags[first-1] = copyBag[second-1];
        bags[second-1] = copyBag[first-1]
    }
    console.log(bags.join(' '));
}
solution(bagNum, testNum, testCases);