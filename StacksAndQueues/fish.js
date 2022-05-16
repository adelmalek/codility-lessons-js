/**
Write a function:

function solution(A, B);
that, given two non-empty arrays A and B consisting of N integers, returns the number of fish that will stay alive.

For example, given the arrays shown above, the function should return 2.
*/

function solution(A, B) {
    const alive = [];
    let count = 0;

    for (let i = 0; i < A.length; i++) {
        if (B[i] === 1) {
            alive.push(A[i]);
        } else {
            if (alive.length === 0) {
                count++;
            } else {
                while (alive.length && alive[alive.length-1] < A[i]) {
                    alive.pop();
                }

                if (alive.length === 0) {
                    count++;
                }
            }
        }
    };

    return alive.length + count;
};
