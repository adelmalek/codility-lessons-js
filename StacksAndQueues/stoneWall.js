/**
Write a function:

function solution(H);
that, given an array H of N positive integers specifying the height of the wall, 
returns the minimum number of blocks needed to build it.

For example, given array H containing N = 9 integers:
H[0] = 8 H[1] = 8 H[2] = 5 H[3] = 7 H[4] = 9 H[5] = 8 H[6] = 7 H[7] = 4 H[8] = 8
the function should return 7. 
The figure shows one possible arrangement of seven blocks.
*/

function solution(H) {
    let blocks = 0;
    let w = [];

    for (let i = 0; i < H.length; i++) {
        while (w.length && w[w.length-1] > H[i]) {
            w.pop();
        }

        if (w.length === 0 || w[w.length-1] < H[i]) {
            w.push(H[i]);
            blocks++;
        }
    };

    return blocks;
};
