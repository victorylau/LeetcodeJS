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

const {printNode, ListNode, PAListNode} =  require('./NodeList');

var sortList = function(head) {
    if(head == null || head.next == null) {
        return head;
    }
    var fast = head;
    var slow = head;
    while(fast.next != null && fast.next.next != null) {
        fast = fast.next.next;
        slow = slow.next
    }
    var mid = slow.next;
    slow.next = null;

    printNode(head)

    var left = sortList(head)
    var right = sortList(mid)
    var h = new ListNode(0);
    var res = h;
    while(left && right) {
        if (left.val < right.val) {
            h.next = left;
            left = left.next;
        } else {
            h.next = right;
            right = right.next
        }
        h = h.next
    }
    h.next = left ? left : right;
    return res.next;
};

var example = PAListNode([-1,5,3,4,0]);
printNode(sortList(example))