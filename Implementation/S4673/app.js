// 문제풀이: https://www.acmicpc.net/problem/4673

solution();

function d(num) {
  let sum = 0;
  const strNum = String(num);;
  for(let i = 0; i < strNum.length; i++) {
    sum += +strNum[i];
  }
  return num + sum;
}

function solution() {
  const arr = Array(10001).fill(0);
  for(let i=1; i<=10000; i++) {
    const ans = d(i);
    if(ans <= 10000) {
      arr[ans]++;
    }
  }
  for (let i=1; i<=10001; i++) {
    if(arr[i] === 0) {
      console.log(i);
    }
  }
}