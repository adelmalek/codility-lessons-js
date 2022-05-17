/**
Write a function,

function solution(A);
that, given an array A consisting of N integers containing daily prices of a stock share 
for a period of N consecutive days, returns the maximum possible profit 
from one transaction during this period. 
The function should return 0 if it was impossible to gain any profit.

For example, given array A consisting of six elements such that:
A[0] = 23171 A[1] = 21011 A[2] = 21123 A[3] = 21366 A[4] = 21013 A[5] = 21367
the function should return 356.
*/

function solution(A) {
    let profit = 0;
    let price = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < A.length; i++) {
        price = Math.min(price, A[i]);
        profit = Math.max(profit, A[i] - price);
    };

    return profit;
};
