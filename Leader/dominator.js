/**
Write a function

function solution(A);
that, given an array A consisting of N integers, 
returns index of any element of array A in which the dominator of A occurs. 
The function should return −1 if array A does not have a dominator.

For example, given array A such that
A[0] = 3 A[1] = 4 A[2] = 3 A[3] = 2 A[4] = 3 A[5] = -1 A[6] = 3 A[7] = 3
the function may return 0, 2, 4, 6 or 7.
*/

function solution(A) {
    let countedNums = A.reduce( (nums, num) => {
        if (num in nums) {
            nums[num]++
        } else {
            nums[num] = 1
        }
        return nums
    }, {});

    let index = parseInt(Object.keys(countedNums).reduce( (a, b) => countedNums[a] > countedNums[b] ? a : b));

    let indexes = [];
    for (let i = 0; i < A.length; i++) {
        if (A[i] === index) {
            indexes.push(i)
        }
    };

    if (A.length <= 1) {
        return -1
    };

    if (indexes.length > Math.floor(A.length / 2)) {
        for (index of indexes) {
            return index
        }
    } else {
        return -1
    };
};
