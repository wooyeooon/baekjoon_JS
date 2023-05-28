// 문제풀이: https://www.acmicpc.net/problem/14502

let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let [N, M] = input.shift().split(' ').map(Number);
let map = input.map(v => v.split(' ').map(Number));
let queue = [];
let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];
let answer = 0;

function DFS(count){
    if(count === 3){//벽 3개 설치하면 바이러스 퍼뜨리고 빈 영역 세기
        let map2 = map.map(v => v.slice());

        for(let i = 0; i < N; i++){
            for(let j = 0; j< M; j++){
                if(map2[i][j] === 2){
                    queue.push([i, j]);
                }
            }
        }
        
        while(queue.length > 0){
            let [cr, cc] = queue.shift();
            for(let i = 0; i < 4; i++){
                let nr = cr + dx[i];
                let nc = cc + dy[i];
                if(nr >= 0 && nr < N && nc >= 0 && nc < M 
                    && map2[nr][nc] === 0){
                    map2[nr][nc] = 2;
                    queue.push([nr, nc]);
                }
            }
        }
        let empty = 0;
        for(let i = 0; i < N; i++){
            for(let j = 0; j < M; j++){
                if(map2[i][j] === 0){
                    empty++;
                }
            }
        }
        answer = Math.max(answer, empty);
        return;
    }
    else{ // 브루트포스로 임의의 벽 3개 설치하기
        for(let i = 0; i < N; i++){
            for(let j = 0; j < M; j++){
                if(map[i][j] === 0){
                    map[i][j] = 1;
                    DFS(count+1);
                    map[i][j] = 0;
                }
            }
        }
    }
}

DFS(0);
console.log(answer);