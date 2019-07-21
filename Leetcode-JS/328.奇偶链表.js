/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const {ListNode, PAListNode, printNode} = require('./NodeList');

var oddEvenList = function(head) {
    if(head==null) return null;
    var front = head;
    var res = front;
    var next= head.next;
    var  nextHead = next;
    while(next&&next.next) {
        res.next = next.next;
        res = res.next
        next.next = res.next;
        next = next.next;
    }
    printNode(front)
    res.next = nextHead
    return head
};

var example = PAListNode([1,2,3,4,5]);
printNode(oddEvenList(example))