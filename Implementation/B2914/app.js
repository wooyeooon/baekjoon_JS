// 문제풀이: https://www.acmicpc.net/problem/2914

//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

// A: 저작권이 있는 멜로디의 개수
// A: 앨범에 수록된 곡의 개수
// I: 올림한 평균 값

console.log(input[0] * (input[1] - 1) + 1);

// 내가 이해한 방향으로 설명을 해보겠다.
// 예제 입력1을 봤을 때, A = 38, I = 24이다.
// 평균값에서 올림을 해서 만들어진 값인 I는 사실 23.1일 수도 23.9일 수도 24일 수도 있다. 그래도 올림해야하기 때문에 I는 24가 된다.
// 키포인트는 '적어도 몇 곡이 있는지'를 찾는 것이기 때문에, 가능한 최소값을 구해야한다.
// 평균값이 딱 23일 때(874)  < 가능한 최소값  <= 평균값이 딱 24일 때(912)라는 범위가 설정된다~~
// 평균값이 딱 23일 때에는 올림을 할 필요가 없 기 때 문 에 38 * 23 = 874가 된다.
// 평균값이 23.000000..........1 인 경우에도(23에서 코.딱.지만큼 더 크더라도) 올림을 해서 24가 되기 때문에 -
// 평균값이 딱~! 23일때 나오는 값인 874에 딱~! +1만 했을 때가 가능한 최소값일 수 밖에 없게 되는 것이다~!
