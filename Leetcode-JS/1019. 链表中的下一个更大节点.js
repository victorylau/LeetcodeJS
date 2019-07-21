/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
const {PAListNode, ListNode, printNode} = require('./NodeList');

var nextLargerNodes = function(head) {
    var tmp = head
    var res = new Array()
    var i = 0;
    var j = 0;
    while(tmp) {
        var tmpVal = tmp.val
        var temp = tmp.next
        var next = temp
        i++;
        while(next) {
            if(next.val > tmpVal) {
                res.push(next.val)
                j++
                next = null;
            }
            else {
                next = next.next
            }
        }
        if(i!=j) {
            j = i
            res.push(0)
        }
        tmp = temp
    }
    return res
};

var example = PAListNode([2,7,4,3,5]
    )
console.log(nextLargerNodes(example))