/**
 * @param {string} s
 * @return {string}
 */
// var longestPalindrome = function(s) {
//     var p = { 0: {} };
//     var result = [0, 0];

//     // 初始化
//     for (var i = 0; i < s.length; i++) {
//         p[i] == undefined ? p[i] = {} : p[i + 1] = {};
//         // console.log(p[i],p[i+1])
//         p[i][i] = true;
//         p[i + 1][i] = true; // 这一步很关键，只是用于初始化
//     }

   

//     for (var i = 1; i < s.length; i++) {
//         for (var j = 0; j < s.length - i; j++) {
//             p[j][j + i] = p[j + 1][j + i - 1] && (s[j] === s[j + i]);
//             p[j][j + i] && i > result[0] ? (result[0] = i, result[1] = j) : (null);
//         }
//     }
//     console.log(result)
//     // return s.substr(result[1], result[0] + 1);
// };

var longestPalindrome = function(s) {
    let n = s.length
    var ans = ""
    for(var i = 0; i < n; i++) {
        var l = i; var r = i;
        while(l>0 && r<n-1 && s[l-1]==s[r+1]) {
            l--;
             r++;
        }
        console.log("l:" + l + " " + "r:"  + r)
        if (r-l+1>ans.length) {
            ans = s.sub(l, r-l+1)
            console.log(i + ":" + ans)
        }
    }

    for(var i = 0; i<n-1;i++) {
        if(s[i] == s[i+1]) {
            var l = i; r = i + 1;
            while(l>0 && r < n - 1 && s[l-1] == s[r+1]) {
                l--; r++;
            }
            if(r-l+1>ans.length) {
                ans=s.sub(l, r-l+1)
            }
        }
    }
    return ans;
}

console.log(longestPalindrome("bababd"))