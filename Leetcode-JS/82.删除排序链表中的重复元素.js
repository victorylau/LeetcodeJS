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

// var deleteDuplicates = function(head) {
//     if (head == null) return null;
//     printNode(head)
//     if (head.next && head.val == head.next.val) {
//         while (head.next && head.val == head.next.val) {
//             head = head.next
//         }
//         return deleteDuplicates(head.next)
//     } 
//     else {
//         head.next = deleteDuplicates(head.next)
//     }
//     return head
// };

var deleteDuplicates = function(head) {
    if (head == null || head.next == null) return head;
    var dummy = new ListNode(-1);
    dummy.next = head;
    var slow = dummy;
    var fast = dummy.next;
    while(fast) {
        while(fast.next && fast.val == fast.next.val) {
            fast = fast.next
        }

        

        if (slow.next == fast) {
            slow = fast;
        }
        else {
            slow.next = fast;
        }
        fast = fast.next


        printNode(dummy)

    }
    return dummy.next;
};

var example = PAListNode([4,1,1,1,2,2,2,2,3]);
printNode(deleteDuplicates(example))