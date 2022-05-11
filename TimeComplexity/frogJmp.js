/**
Write a function:

function solution(X, Y, D);
that, given three integers X, Y and D, returns the minimal number of jumps 
from position X to a position equal to or greater than Y.

For example, given:
  X = 10
  Y = 85
  D = 30
the function should return 3, because the frog will be positioned as follows:
after the first jump, at position 10 + 30 = 40
after the second jump, at position 10 + 30 + 30 = 70
after the third jump, at position 10 + 30 + 30 + 30 = 100
*/

 function solution(X, Y, D) {
    if (X === Y) {
        return 0;
    } else if (D >= (Y-X)) {
        return 1;
    } else {
        var jumps = parseInt( (Y-X) / D);
        jumps += ( (Y-X)%D > 0) ? 1 : 0;
        
        return jumps;
    }
};
