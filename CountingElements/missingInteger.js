/**
Write a function:

function solution(A);
that, given an array A of N integers, 
returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
Given A = [1, 2, 3], the function should return 4.
Given A = [−1, −3], the function should return 1.
*/

function solution(A) {
    let N = A.length;
    let map = {};

    for (let i = 0; i < N; i++) {
        if (!map[A[i]]) {
            map[A[i]] = true;
        }
    };

    for (let j = 1; j < 100000; j++) {
        if (!map[j]) {
            return j;
        }
    };
};