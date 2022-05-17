/**
Write a function:

function solution(A);
that, given a non-empty array A consisting of N integers, returns the number of equi leaders.

For example, given:
A[0] = 4 A[1] = 3 A[2] = 4 A[3] = 4 A[4] = 4 A[5] = 2
the function should return 2.
*/

function solution(A) {
    let stack = [];
    for (let i = 0; i < A.length; i++) {
        if (stack.length === 0 || stack[stack.length-1] === A[i]) {
            stack.push(A[i])
        } else {
            stack.pop()
        }
    };

    let leader = stack.pop();
    let countLeader = A.filter(a => a === leader).length;

    let equi = 0;
    let left = 0;
    let right = countLeader;
    for (let i = 0; i < A.length; i++) {
        if (A[i] === leader) {
            left++;
            right--;
        }

        if (left >= Math.floor( (i+1) / 2) + 1 && right >= Math.floor( (A.length - 1 - i) / 2) + 1 ) {
            equi++
        }
    };

    return equi;
};
