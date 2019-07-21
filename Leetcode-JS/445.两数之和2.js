/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const {ListNode, PAListNode, printNode} = require('./NodeList');

var addTwoNumbers = function(l1, l2) {
    if(l1==null && l2 == null) return null;
    var p1 = reverseNode(l1)
    var p2 = reverseNode(l2)
    var res = new ListNode(0);
    var tmp = res
    var flag = 0;
    while(p1||p2||flag>0) {
        var val1 = p1 ? p1.val: 0;
        var val2 = p2 ? p2.val: 0;
        var pl = val1+val2+flag;
        if(pl >= 10) {
            pl -= 10;
            flag = 1;
        } else {
            flag = 0;
        }
        tmp.next = new ListNode(pl)
        tmp = tmp.next
        p1 = p1? p1.next: null;
        p2 = p2? p2.next: null;
    }
    return reverseNode(res.next)
};

var reverseNode = function(head) {
    var tmp = head;
    var pre = null;
    while(tmp) {
        var temp = tmp.next;
        tmp.next = pre
        pre = tmp
        tmp = temp;
    }
    return pre;
}

var p1 = PAListNode([1,1,1])
var p2 = PAListNode([9,9,9])
printNode(addTwoNumbers(p1,p2))
