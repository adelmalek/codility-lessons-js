/**
Write a function:

function solution(A);
that, given a non-empty array A of N integers, returns the number of pairs of passing cars.
The function should return −1 if the number of pairs of passing cars exceeds 1,000,000,000.

For example, given:
A[0] = 0 A[1] = 1 A[2] = 0 A[3] = 1 A[4] = 1
the function should return 5.
*/

function solution(A) {
    const N = A.length;
    const ones = [0];

    for (let i = 0; i < N; i++) {
        ones.push(ones[i]);

        if (A[i] === 1) {
        ones[i + 1]++;
        }
    };

    let passingCount = 0;

    for (let i = 0; i < N; i++) {
        if (A[i] === 0) {
        passingCount += ones[N] - ones[i + 1];

            if (passingCount > 1000000000) {
                return -1;
            }
        }
    };

    return passingCount;
};

