/**
Write a function:

function solution(A, K);
that, given an array A consisting of N integers and an integer K, returns the array A rotated K times.

For example, given
    A = [3, 8, 9, 7, 6]
    K = 3
the function should return [9, 7, 6, 3, 8]. Three rotations were made:
    [3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]
    [6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]
    [7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]
 */

function solution(A, K) {
    if (A.length === 0 || A.length === 1) {
        return A;
    };

    for (let i = 0; i < K; i++) {
        let last = A.pop();
        A.unshift(last);
    };

    return A;
};

