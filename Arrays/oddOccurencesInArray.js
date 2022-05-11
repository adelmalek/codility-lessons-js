/**
Write a function:

function solution(A);
that, given an array A consisting of N integers, 
returns the value of the unpaired element.

For example, given array A such that:
  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9
the function should return 7.
*/

function solution(A) {

const map = {};

    for (let i = 0; i < A.length; i++) {
        if (map[A[i]]) {
        delete map[A[i]];
        } else {
        map[A[i]] = true;
        }
    }

    return Number(Object.keys(map)[0]);
};

/**

function solution(A) {
    let map = {};

    for (let a of A) {
        map[a] = typeof map[a] === ’number’ ? map[a]+1 : 1
    };

    for (let key in map) {
        if (map[key] === 1) {
            return key
        }
    };
};

 */

 