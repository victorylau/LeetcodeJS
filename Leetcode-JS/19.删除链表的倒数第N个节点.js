
const {printNode, ListNode, PAListNode} =  require('./NodeList');

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// var removeNthFromEnd = function(head, n) {
//     var temp = new ListNode(0);
//     temp.next = head;
//     var curr = head;
//     var count = 0;
//     while(curr) {
//         curr = curr.next;
//         count++;
//     }
//     curr = temp;
//     count = count - n;

//     while(count>0) {
//         count--;
//         curr = curr.next;
//     }

//     // printNode(head);

//     curr.next = curr.next.next;

//     // printNode(head);

//     return head;
// };

var removeNthFromEnd = function(head, n) {
    var dummy = new ListNode(0);
    dummy.next = head;
    var first = dummy;
    var second = dummy;
    var i = 1;
    for(; i <= n+1; i++) {
        first = first.next;
    }
    while(first) {
        first = first.next;
        second = second.next;
    }
    second.next = second.next.next;
    return dummy.next;
};

var example = PAListNode([1,2,3,4,5])
printNode(removeNthFromEnd(example, 2))