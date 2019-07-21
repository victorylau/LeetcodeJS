/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */

const {PAListNode, ListNode, printNode} = require('./NodeList');

var splitListToParts = function(root, k) {
    var p = root
    var count = 0;
    var res = new Array()
    while(p) {
        count++;
        p = p.next
    }
    
    var div = parseInt(count / k);
    var der = count % k;
    p = root
    while(p) {
        res.push(p)
        var t = div+(der>0? 1 : 0)-1
        der--;
        for(var i = 0; i < t; i++) {
            p = p.next
        }
        if(p==null) {continue}
        var tmp = p.next
        p.next = null
        p = tmp
        
    }
    while(res.length<k) {
        res.push(null)
    }
    return res
};

var example = PAListNode([1,2,3,4])
console.log(splitListToParts(example, 5))