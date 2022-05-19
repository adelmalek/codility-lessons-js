/**
Write a function:

function solution(M, A);
that, given an integer M and a non-empty array A consisting of N integers, returns the number of distinct slices.
If the number of distinct slices is greater than 1,000,000,000, the function should return 1,000,000,000.

For example, given integer M = 6 and array A such that:
A[0] = 3 A[1] = 4 A[2] = 5 A[3] = 5 A[4] = 2
the function should return 9, as explained above.
*/

function solution(M, A) {
    let last = new Array(M).fill(-1);

    let count = 0;
    let start = 0;

    for (let i = 0; i < A.length; i++) {
        if (last[A[i]]+1 > start) {
            start = last[A[i]] + 1;
        }

        last[A[i]] = i;
        count += (i - start + 1);

        if (count > 1000000000) {
            break;
        }
    }

    return count > 1000000000 ? 1000000000 : count;
};
