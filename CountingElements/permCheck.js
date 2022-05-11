/**
Write a function:

function solution(A);
that, given an array A, returns 1 if array A is a permutation and 0 if it is not.

For example, given array A such that:
    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
the function should return 1.

Given array A such that:
    A[0] = 4
    A[1] = 1
    A[2] = 3
the function should return 0.
*/

function solution(A) {
    let len = A.length;
    let newA = new Array(len).fill(false);

    for (let i = 0; i < len; i++) {
        if (!newA[A[i]-1]) {
            newA[A[i]-1] = true;
        } else {
            return 0;
        }
    };

    for (let j = 0; j < len; j++) {
        if (!newA[j]) {
            return 0;
        }
    };

    return 1;
};

