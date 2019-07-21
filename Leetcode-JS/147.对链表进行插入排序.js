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

var insertionSortList = function(head) {
    var res = new ListNode(0)
    while(head) {
        var cur = res;
        printNode(cur)
        var next = head.next;
        while(cur.next && (head.val>cur.next.val)) {
            cur = cur.next;
        }
        head.next = cur.next

        

        cur.next = head
        head = next
    }
    return res.next;
};

var example = PAListNode([2,1,4,3]);
printNode(insertionSortList(example))