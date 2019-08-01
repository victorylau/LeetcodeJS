/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    var f = new Array()
    f[0] = 1
    f[1] = 1
    for(var i = 1; i < n; i++) {
        f[i+1] = 2 * (2*i+1) / (i+2) * f[i]
    }
    return f[n]
};

console.log(numTrees(5))