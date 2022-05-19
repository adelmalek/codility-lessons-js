/**
Write a function:

function solution(N, M);
that, given two positive integers N and M, returns the number of chocolates that you will eat.

For example, given integers N = 10 and M = 4. the function should return 5.
*/

function solution(N, M) {
    if (N === 1) {
        return 1
    }

    if (M === 1) {
        return N
    }

    return N / choco(N, M);
};

function choco(a, b) {
    if (a % b === 0) {
        return b
    } else {
        return choco(b, a % b)
    }
};

