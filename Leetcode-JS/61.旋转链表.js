/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

const {printNode, ListNode, PAListNode} =  require('./NodeList');

var rotateRight = function(head, k) {
    if(head == null || head.next == null) { return head; }
    if(k == 0) { return head; }
    var curr = head;
    var n = 1;
    while(curr.next) {
        curr = curr.next;
        n++;
    }
    curr.next = head;
    var newTail = head;
    var count = 0;
    while(n-k%n-1 > count) {
        newTail = newTail.next;
        count++;
    }
    var res = newTail.next;
    newTail.next = null;
    return res
};

var example = PAListNode([1,2]);
printNode(rotateRight(example, 1));