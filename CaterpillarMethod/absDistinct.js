/**
Write a function:

function solution(A);
that, given a non-empty array A consisting of N numbers, returns absolute distinct count of array A.

For example, given array A such that:
A[0] = -5 A[1] = -3 A[2] = -1 A[3] = 0 A[4] = 3 A[5] = 6
the function should return 5.
*/

function solution(A) {
    let absDist = new Set();

    for (let i = 0; i < A.length; i++) {
        absDist.add(Math.abs(A[i]));
    };

    return absDist.size;
};
