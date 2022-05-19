/**
Write a function:

function solution(A);
that, given an array A consisting of N integers, returns the number of triangular triplets in this array.

For example, given array A such that:
A[0] = 10 A[1] = 2 A[2] = 5 A[3] = 1 A[4] = 8 A[5] = 12
the function should return 4.
*/

function solution(A) {
    A.sort( (a, b) => a - b);
    let sumOfTriplets = 0;

    for (let i = 0; i < A.length-2; i++) {
        let plus = i + 1;
        let lessThan = i + 2;

        while (plus < A.length - 1) {
            if (lessThan < A.length && A[i] + A[plus] > A[lessThan]) {
                lessThan++
            } else {
                plus++;
                sumOfTriplets += lessThan - plus
            }
        }
    };

    return sumOfTriplets;
};
