/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
const {printNode, ListNode, PAListNode} =  require('./NodeList');

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// var foundMidNode = function(head) {
//     var tmp = null;
//     var slow = head;
//     var fast = head;
//     while(fast&&fast.next) {
//         tmp = slow
//         fast = fast.next.next
//         slow = slow.next
//     }
//     if(tmp) { tmp.next = null; }
//     return slow
// };

var foundMidNode = function(head) {
    var slow = head;
    var fast = head;
    while(fast.next&&fast.next.next) {
        fast = fast.next.next
        slow = slow.next
    }
    var mid;
    if(slow.next) {
        mid = slow.next
        slow.next = null
    } else {
        mid = slow
    }
    return mid
};


var sortedListToBST = function(head) {
    if(head==null) return null;
    var mid = foundMidNode(head)
    printNode(mid)
    printNode(head)
    var node = new TreeNode(mid.val)
    if(head==mid) return node
    node.left = sortedListToBST(head)
    node.right = sortedListToBST(mid.next)
    return node
};

var example = PAListNode([0,1,2,3,4]);
console.log(sortedListToBST(example))