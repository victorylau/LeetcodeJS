/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const {printNode, ListNode, PAListNode} =  require('./NodeList');

var getIntersectionNode = function(headA, headB) {
    if(headA == null || headB == null) return null;
    var pA = headA
    var pB = headB
    while(pA != pB) {
        pA = pA == null ? headB : pA.next;
        pB = pB == null ? headA : pB.next;
    }
    return pA;
};

printNode(getIntersectionNode(PAListNode([1,4,5,7]), PAListNode([2,3,4,5,7])))