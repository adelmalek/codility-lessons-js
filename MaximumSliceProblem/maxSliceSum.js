/**
Write a function:

function solution(A);
that, given an array A consisting of N integers, returns the maximum sum of any slice of A.

For example, given array A such that:
A[0] = 3 A[1] = 2 A[2] = -6 A[3] = 4 A[4] = 0
the function should return 5 because:
(3, 4) is a slice of A that has sum 4,
(2, 2) is a slice of A that has sum −6,
(0, 1) is a slice of A that has sum 5,
no other slice of A has sum greater than (0, 1).
*/

function solution(A) {
    let sliceMax = Number.MIN_SAFE_INTEGER;
    let sumMax = 0;

    for (let m = 0; m < A.length; m++) {
        sumMax = Math.max(sumMax + A[m], A[m]);
        sliceMax = Math.max(sliceMax, sumMax);
    };

    return sliceMax;
};

