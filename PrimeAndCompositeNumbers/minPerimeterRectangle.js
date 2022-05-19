/**
Write a function:

function solution(N);
that, given an integer N, returns the minimal perimeter of any rectangle whose area is exactly equal to N.

For example, given an integer N = 30, the function should return 22, as explained above.
*/

function solution(N) {
    let minPer = Number.MAX_SAFE_INTEGER;

    for (let i = 1; i*i <= N; i++) {
        if (N%i === 0) {
            let side = N / i;
            let per = 2 * (side + i);
            if (per < minPer) {
                minPer = per;
            }
        }
    };

    return minPer;
};
