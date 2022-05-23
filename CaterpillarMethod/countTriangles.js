/**
Write a function:

function solution(A);
that, given an array A consisting of N integers, returns the number of triangular triplets in this array.

For example, given array A such that:
A[0] = 10 A[1] = 2 A[2] = 5 A[3] = 1 A[4] = 8 A[5] = 12
the function should return 4.
*/

function solution(A) {
    let N = A.length;
    let result = 0;

    A.sort( (a, b) => a - b);

    for (let i = 0; i < N; i++) {
        let x = i + 2;
        for (let j = i+1; j < N; j++) {
            while (x < N && A[i] + A[j] > A[x] ) {
                x += 1
            }
            result += x - j - 1;
        }
    };

    return result;
};
