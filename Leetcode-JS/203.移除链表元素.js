/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

const {printNode, ListNode, PAListNode} =  require('./NodeList');

var removeElements = function(head, val) {
    var res = new ListNode(0)
    res.next = head;
    var pre = res;
    var cur = head;
    while(cur) {
        if(cur.val == val ) { 
            pre.next = cur.next;
        } else {
            pre = pre.next;
        }
        cur = cur.next;
    }
    return res.next;
};

printNode(removeElements(PAListNode([1,2,6,3,4,5,6]), 6))