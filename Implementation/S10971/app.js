// 문제풀이: https://www.acmicpc.net/problem/10971

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const graph = [];
for (let i = 1; i <= N; i++) {
  graph.push(input[i].split(' ').map(Number));
}

const INF = 1e9; // 무한을 의미하는 값
const visited = Array(N).fill(false); // 방문 여부를 저장하는 배열
let minCost = INF; // 최소 비용을 저장할 변수

// 외판원 순회 함수
function tsp(node, cost, count) {
  if (count === N && graph[node][0] > 0) {
    // 모든 도시를 방문한 경우
    minCost = Math.min(minCost, cost + graph[node][0]);
    return;
  }

  for (let i = 0; i < N; i++) {
    if (!visited[i] && graph[node][i] > 0) {
      visited[i] = true;
      tsp(i, cost + graph[node][i], count + 1);
      visited[i] = false;
    }
  }
}

visited[0] = true; // 시작 도시는 방문했다고 표시
tsp(0, 0, 1); // 0번 도시부터 시작

console.log(minCost === INF ? -1 : minCost);
