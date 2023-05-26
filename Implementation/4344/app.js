// 문제: https://www.acmicpc.net/problem/1110

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filePath).toString().split('\n');

let testCases = Number(input[0]);

for (let t = 1; t <= testCases; t++) { // 각각의 테스트 케이스를 확인
    let data = input[t].split(' ').map(Number);
    let n = data[0]; // 첫 번째 수는 데이터의 개수
    let summary = 0; // n개의 점수에 대하여 평균 계산

        for (let i = 1; i <= n; i++) {
            summary += data[i];
    }
    let average = summary / n;
    let cnt = 0; // 점수가 평균을 넘는 학생 수 계산
        for (let i = 1; i <= n; i++)
        if (data[i] > average) cnt += 1;
  // 점수가 편균을 넘는 학생의 비율을 소수점 아래 셋째 자리까지 출력
  console.log(`${(cnt / n * 100).toFixed(3)}%`);
}

/*
const arrayLength = +input[0];
consst inputArray = [];
for (let i = 1; i <= arrayLength; i++) {
    const arr = input[i].split(' ');
    inputArray.push({
        N: +arr[0],
        arr: arr.slice(1).map((item) => item),
    });
}

function solution(C, inputArray) {
    for (let i = 0; i < C.length; i++) {
        const item = inputArray[i];
        let average = 0;
        for (let j = 0; j < item.N; j++) {
            average += item.arr[i];
    }
    average /= item.N;

    let cnt = 0;
    for (let j = 0; j < item.N; j++) {
        if (average < item.arr[i]) {
            cnt++;
        }
    }

    let answer = cnt / item.N;
    console.log((answer *  100).toFixed(3) + '%');
}
}
*/