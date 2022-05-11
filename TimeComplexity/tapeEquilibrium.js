/**
Write a function:

function solution(A);
that, given a non-empty array A of N integers, returns the minimal difference that can be achieved.

For example, given:
  A[0] = 3
  A[1] = 1
  A[2] = 2
  A[3] = 4
  A[4] = 3
the function should return 1, as explained above.
*/

function solution(A) {

    if (A.length <= 1) {
        return 0
    }

    if (A.length === 2) {
        return Math.abs(A[0] - A[1])
    }

    let rightSide = A.reduce( (acc, next) => acc + next, 0);
    let leftSide = 0;
    let minAbs = Math.abs(rightSide - leftSide);

    for (let i = 0; i < A.length; i++) {
        leftSide += A[i];
        rightSide -= A[i];

        let difference = Math.abs(leftSide - rightSide);

        if (difference < minAbs) {
            minAbs = difference
        }
    };

    return minAbs;
};


