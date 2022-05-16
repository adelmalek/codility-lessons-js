/**
Write a function:

function solution(A);
that, given an array A consisting of N integers, 
returns 1 if there exists a triangular triplet for this array and returns 0 otherwise.

For example, given array A such that:
A[0] = 10 A[1] = 2 A[2] = 5 A[3] = 1 A[4] = 8 A[5] = 20
the function should return 1. 
Given array A such that:
A[0] = 10 A[1] = 50 A[2] = 5 A[3] = 1
the function should return 0.
*/

function solution(A) {
    const triangle = (P, Q, R) => {
        return P + Q > R && Q + R > P && R + P > Q;
    };

    A.sort( (a, b) => b - a);

    for (let i = 2; i < A.length; i++) {
        if (triangle(A[i-2], A[i-1], A[i])) {
            return 1;
        }
    };

    return 0;
};
