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
var middleNode = function(head) {
    var fast = head
    var slow = head
    while(fast.next && fast.next.next) {
        fast = fast.next.next
        slow = slow.next
    }
    var mid = slow.next
    slow.next = null
    return mid
};