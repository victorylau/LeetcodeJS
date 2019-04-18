/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length<=1) return s.length;
    
    var ptr = 0;
    var max = 1;
    for(let i = 1; i < s.length; i++) {
        var index = s.indexOf(s.charAt(i),ptr);
        console.log(index)
        if(index < i) {ptr = index + 1;}
        max = Math.max(max,i-ptr+1);
    }
    return max;
};

console.log(lengthOfLongestSubstring("abcabc"))