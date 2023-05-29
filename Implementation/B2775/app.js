// 문제: https://www.acmicpc.net/problem/2775

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const iter = Number(input[0]);

// 0층의 i호에는 i명이 산다
// floor층의 room호에 살기 위한 인원 조건은
// (floor-1)층의 1호부터 room호까지의 인원을 합한 인원만큼 살아야한다는 것이다.
// 1층 3호에 살려면, 0층 1,2,3호 인원을 합친 인원이 필요하므로
// 1+2+3 = 6명이 1층 3호에 살기 위한 조건이 된다.

for(let i = 1; i < iter+1; i++){
  const floor = Number(input[2*i - 1]);
  const room = Number(input[2*i]);
  
  // 층, 호수에 대한 인원수 정보를 저장하기 위한 2차원 배열 생성
  // eachFloor[floor][room]
  // 0으로 채워짐
  // Array(1)로 하면 0층 데이터만 넣을 수 있으므로
  // floor층까지의 데이터를 다루고자 한다면 Array(floor + 1) 사용
  // room은 1호부터 시작하므로 Array(room)을 사용해도 문제 없음
  const eachFloor = Array.from(Array(floor + 1), () => Array(room).fill(0));
  
  // 필요한 호실까지 0층 데이터 생성
  for (let i = 1; i <= room; i++) {
    eachFloor[0][i] = i;
  }
  
  // 1 ~ floor층
  // floor층 room호에는 (floor-1층 room호 + floor층 room-1호)만큼 산다
  for (let i = 1; i <= floor; i++) {
    for (let j = 1; j <= room; j++) {
      eachFloor[i][j] = eachFloor[i - 1][j] + eachFloor[i][j-1];
    }
  }
  
  // floor층 room호 필요 인원수 출력
  console.log(eachFloor[floor][room]);
}