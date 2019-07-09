/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (head == null) return false; 
    if (head.next == null) return false;
    var fast = head.next;
    var slow = head;
    while(fast == slow) {
        if (fast == null || fast.next == null) return false;
        fast = fast.next.next;
        slow = slow.next;
    }
    return true;
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

function printNode(head) {
    console.log('-----------')
    while(head) {
        console.log(head.val)
        head = head.next
    }
}

var example = aListNode([1]);
console.log(hasCycle(example))