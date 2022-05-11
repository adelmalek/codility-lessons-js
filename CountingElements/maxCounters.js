/**
Write a function:

function solution(N, A);
that, given an integer N and a non-empty array A consisting of M integers, 
returns a sequence of integers representing the values of the counters.
Result array should be returned as an array of integers.

For example, given:
    A[0] = 3
    A[1] = 4
    A[2] = 4
    A[3] = 6
    A[4] = 1
    A[5] = 4
    A[6] = 4
the function should return [3, 2, 2, 4, 2].
*/

function solution(N, A) {
    const M = A.length;
    const counters = new Array(N).fill(0);

    let currentMax = 0;
    let lastMax = 0;

    for (let i = 0; i < M; i++) {
        const current = A[i];
        const counter = counters[current-1];

        if (current <= N) {
            if (counter < lastMax) {
                counters[current-1] = lastMax + 1;
            } else {
                counters[current-1] = counter + 1;
            }

            if (counters[current-1] > currentMax) {
                currentMax = counters[current-1];
            } 
        } else {
                lastMax = currentMax;
            }
    };

    for (let j = 0; j < N; j++) {
        if (counters[j] < lastMax) {
            counters[j] = lastMax;
        }
    };

    return counters;
};

