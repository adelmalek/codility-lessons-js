/**
Write a function:

function solution(A);
that, given an array A, returns the value of the missing element.

For example, given array A such that:
  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.
*/

  function solution(A) {
    let len = A.length;
    let naturalNum = (len+1)*(len+2)/2;
    let sum = 0;

    for (let i = 0; i < len; i++) {
        sum += A[i]
    };

    let missing = naturalNum - sum;
    return missing;
};


