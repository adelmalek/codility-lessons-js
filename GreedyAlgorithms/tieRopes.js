/**
Write a function:

function solution(K, A);
that, given an integer K and a non-empty array A of N integers, 
returns the maximum number of ropes of length greater than or equal to K that can be created.

For example, given K = 4 and array A such that:
A[0] = 1 A[1] = 2 A[2] = 3 A[3] = 4 A[4] = 1 A[5] = 1 A[6] = 3
the function should return 3.
*/

function solution(K, A) {
    let ropes = 0;
    let currentSum = 0;

    for (let i = 0; i < A.length; i++) {
        currentSum += A[i];

        if (currentSum >= K) {
            currentSum = 0;
            ropes++;
        }
    };

    return ropes;
};
