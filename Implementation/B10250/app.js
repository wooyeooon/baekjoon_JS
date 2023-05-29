// 문제: https://www.acmicpc.net/problem/10250

const fs = require("fs");
const [n, ...arr] = (process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `2
6 12 10
30 50 72`
)
  .trim()
  .split("\n");

  console.log([n, ...arr]);

let nArrNumber = Number(n);
let newArr = arr.map((e) => e.split(" "));
let nAnswer = "";

for (let i = 0; i < nArrNumber; i++) {
  let H = newArr[i][0],
    N = newArr[i][2];

  let answerH = N % H;
  if (answerH === 0) {
    answerH = H;
  }

  let answerW = Math.ceil(N / H);
  answerW < 10 ? (answerW = String(0) + answerW) : answerW;

  nAnswer += `${answerH}${answerW}` + "\n";
}

console.log(nAnswer);

// 이번에는 문제를 차분히 읽게되는 유형인 것 같은데 결국 로직은 복잡한게 없었다. 
// 손님들은 방의 층수가 높더라도 엘리베이터와 가까운방을 더 선호한다는 조건대로면 층수가 다 찰때까지 계속 01호실로 보내고 
// 01호실로 모든 층수를 채워야 비로소 02호에 손님을 보내게된다. 즉 층수가 배수의 숫자가 되는 것이다. 
// N번째 손님에서 N은 입력되어온 층수로 나누고 나머지를 구하는 대상이 된다. 나눠서 나오는 값은 호수번호가 되며 나누고난 다음의 나머지 값은 층수가 된다. 
// 그리고 조건문으로 나눠서 나온 소수값을 올림 처리한 후 10이하 값의 방은 0을 붙이면 출력조건에 만족하게 된다. 
// 그리고 딱 나눠져서 나머지가 0의 값이 나오면 H의 값 그대로 출력값으로 쓰는 로직도 빼먹으면 안된다.

// 문제는 무난히 풀린 것 치고는 의외로 "각 층의 방 수"값을 활용없이 답을 구할 수 있었다.
// (1 ≤ H, W ≤ 99, 1 ≤ N ≤ H × W)의 조건을 보듯이 아마도 입력창에서 손님수가 호텔의 방 수를 넘지 않아서 W의 값을 쓰지 않아도 된 게 아니였을까하느 추측을 한다. 
// 그래서 그런지 다른 사람들의 답안도 궁금해진다.