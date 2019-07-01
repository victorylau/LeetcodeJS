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

 // 迭代
// var reverseList = function(head) {
//     var prev = null;
//     var curr = head;
//     while(curr) {
//         var temp = curr.next;
//         curr.next = prev;
//         prev = curr;
//         curr = temp;
//         console.log(curr)
//     }
//     return prev;
// };

// 递归
var reverseList = function(head) {
    if(head == null || head.next == null) return head;
    var p = reverseList(head.next);
    head.next = head;
    console.log(head);
    head.next.next = null;
    return p;
};

function ListNode(val) {
         this.val = val;
         this.next = null;
};

function aListNode(arr) {
    var listNode = new ListNode(0);
    var curr = listNode;
    for(var i = 0; i < arr.length; i++) {
        var object = arr[i];
        curr.next = new ListNode(object);
        curr = curr.next;
    }
    return listNode.next;
};

var example = aListNode([1,2,3]);
console.log(reverseList(example));