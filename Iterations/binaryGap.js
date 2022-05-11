/**
Write a function:

function solution(N);
that, given a positive integer N, returns the length of its longest binary gap. 
The function should return 0 if N doesn't contain a binary gap.

For example, given N = 1041 the function should return 5, 
because N has binary representation 10000010001 and 
so its longest binary gap is of length 5. 
Given N = 32 the function should return 0, because N has binary representation '100000' and 
thus no binary gaps.
 */

function solution(N) {
    if (N < 0) {
        return 0
    };

    const binary = N.toString(2);
    let currentGap = 0;
    let biggestGap = 0;

    for (let i = 1; i < binary.length; i++) {
        if (binary[i] === '0') {
            if (binary[i-1] === '0') {
                currentGap += 1
            } else {
                currentGap = 1
            }
        }

        if (binary[i] === '1' && binary[i-1] === '0') {
            if (biggestGap < currentGap) {
                biggestGap = currentGap
            }
        }
    };

    return biggestGap;
};
