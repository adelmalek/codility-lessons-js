/**
Write a function:

function solution(A, B);
that, given two arrays A and B consisting of N integers, 
returns the size of a non-overlapping set containing a maximal number of segments.

For example, given arrays A, B shown above, the function should return 3.
*/

function solution(A, B) {
    if (A.length === 0) {
        return 0;
    }

    let end = B[0];
    let segments = 1;

    for (let i = 1; i < A.length; i++) {
        if (A[i] > end) {
            segments++;
            end = B[i];
        }
    };

    return segments;
};
