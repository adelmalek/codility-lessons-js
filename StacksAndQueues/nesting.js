/**
Write a function:

function solution(S);
that, given a string S consisting of N characters, returns 1 if string S is properly nested and 0 otherwise.

For example, given S = "(()(())())", the function should return 1 and 
given S = "())", the function should return 0.
*/

function solution(S) {
    const brackets = [];

    for (let i = 0; i < S.length; i++) {
        const char = S[i];

        if (char === "(") {
            brackets.push(")");
        } else {
            if (brackets.length === 0) {
                return 0;
            } else {
                brackets.pop()
            }
        }
    };

    if (brackets.length !== 0) {
        return 0;
    };

    return 1;
};
