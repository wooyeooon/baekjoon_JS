const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input.push(line);
}).on('close', ()=>{
    const n = input.shift();
    let max = 0;
    for(let i = 0; i < n; i++){
        input[i] = input[i].split('');
    }
    // 가로 교체
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n-1; j++){
            let tmp = input[i][j];
            input[i][j] = input[i][j+1];
            input[i][j+1] = tmp;
            horizontal();
            vertical();
            // 복원
            input[i][j + 1] = input[i][j];
            input[i][j] = tmp;
        }
    }
    // 세로 교체
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n-1; j++){
            let tmp = input[j][i];
            input[j][i] = input[j+1][i];
            input[j+1][i] = tmp;
            horizontal();
            vertical();
            // 복원
            input[j+1][i] = input[j][i];
            input[j][i] = tmp;
        }
    }
    // 가로 확인
    function horizontal(){
        for(let i = 0; i < n; i++){
            let cnt = 1;
            for(let j = 0; j < n - 1; j++){
                if(input[i][j] === input[i][j+1]){  //현재값과 다음값이 같으면 cnt ++
                    cnt++;
                } else{
                    if(max < cnt){                  //현재값과 다음값이 다를 경우 
                        max = cnt;
                    }
                    cnt = 1;                        //반복문이 끝나지 않았을경우를 위해 1로 다시 초기화
                }
            }
            if(max < cnt){                  // 한줄이 모두 같은경우
                max = cnt;
            }
        }
    }
    // 세로 확인
    function vertical(){
        for(let i = 0; i < n; i++){
            let cnt = 1;
            for(let j = 0; j < n-1; j++){
                if(input[j][i] === input[j+1][i]){
                    cnt++;
                } else{
                    if(max < cnt){
                        max = cnt;
                    }
                    cnt = 1;
                }
            }
            if(max < cnt){
                max = cnt;
            }
        }
    }
    console.log(max);
    process.exit();
});
