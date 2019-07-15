/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    var tmp = new ListNode(0);
    var tmp1 =  new ListNode(0);
    var lessNode = tmp;
    var moreNode = tmp1;
    while(head) {
        if(head.val >= x) {
            moreNode.next = head
            moreNode = moreNode.next;
        } else {
            lessNode.next = head;
            lessNode = lessNode.next;
        }
        head = head.next;
    }
    lessNode.next = tmp1.next
    moreNode.next = null;
    return tmp.next;
};