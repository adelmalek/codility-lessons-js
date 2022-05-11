/**
Write a function:

function solution(X, A);
that, given a non-empty array A consisting of N integers and integer X, 
returns the earliest time when the frog can jump to the other side of the river.
If the frog is never able to jump to the other side of the river, the function should return −1.

For example, given X = 5 and array A such that:
  A[0] = 1
  A[1] = 3
  A[2] = 1
  A[3] = 4
  A[4] = 2
  A[5] = 3
  A[6] = 5
  A[7] = 4
the function should return 6, as explained above.
*/

function solution(X, A) {
  const N = A.length;
  const map = {};
  let count = 0;

  for (let i = 0; i < X; i++) {
    map[i + 1] = false;
  }

  for (let i = 0; i < N; i++) {
    if (!map[A[i]]) {
      map[A[i]] = true;

      count++;
    }

    if (count === X) {
      return i;
    }
  }

  return -1;
};

/**
function solution(X, A) {
  if (A.length <= 0) {
      return -1
  }

  let result = A
      .map( (num, index) => A[index] === X? index : null)
      .filter(index => typeof index === 'number');
  
  return Number(result);
}
 */
