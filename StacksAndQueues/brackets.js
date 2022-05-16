/**
Write a function:

function solution(S);
that, given a string S consisting of N characters, returns 1 if S is properly nested and 0 otherwise.

For example, given S = "{[()()]}", the function should return 1 and 
given S = "([)()]", the function should return 0.
*/

function solution(S) {
    const CHARACTERS = {
        "{" : "}",
        "[" : "]",
        "(" : ")"
    };

    const KEYS = Object.keys(CHARACTERS);

    const brackets = [];

    for (let i = 0; i < S.length; i++) {
        let char = S[i];
        if (KEYS.includes(char)) {
            brackets.push(char)
        } else if (CHARACTERS[brackets.pop()] !== char) {
            return 0;
        }
    };

    if (brackets.length !== 0) {
        return 0;
    };

    return 1;
};
