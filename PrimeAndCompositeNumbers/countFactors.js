/**
Write a function:

function solution(N);
that, given a positive integer N, returns the number of its factors.

For example, given N = 24, the function should return 8, because 24 has 8 factors, 
namely 1, 2, 3, 4, 6, 8, 12, 24. There are no other factors of 24.
*/

function solution(N) {
    let fact = 0;
    let limit = parseInt(Math.sqrt(N));

    for (let i = 1; i <= limit; i++) {
        if (N%i === 0) {
            fact++;
            if (N/i !== i) {
                fact++
            }
        }
    };

    return fact;
};
