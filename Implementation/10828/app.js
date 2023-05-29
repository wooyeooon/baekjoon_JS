// 문제: https://www.acmicpc.net/problem/10828


const fs = require('fs');
const root = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...commands] = fs.readFileSync(root, 'utf8').toString().trim()
.split('\n');

console.log(solution(n, commands));

function solution(n, commands){
    const stack = [];
    let currentIndex = 0; 
    let answer = '';

    for(let i = 0; i < +n; i++){
        const [command, num] = commands[i].split(' ');
        let result = '';
        switch(command){
            case 'push':
                stack[currentIndex] = num;
                currentIndex += 1;
                break;
            case 'pop':
                if(currentIndex === 0) {
                    result = -1;
                    answer += result + ' ';
                }
                if(currentIndex > 0) {
                    currentIndex -= 1;
                    result = stack.splice(-1);
                    answer += result + ' ';
                
                }
                break;
            case 'size':
                result = currentIndex;
                answer += result + ' ';
                break;
            case 'empty':
                result = currentIndex === 0 ? 1 : 0;
                answer += result + ' ';
                break;
            case 'top':
                result = currentIndex === 0 ? -1 : stack[currentIndex - 1];
                answer += result + ' ';
                break;
        }}
    return answer.split(' ').join('\n');
}
