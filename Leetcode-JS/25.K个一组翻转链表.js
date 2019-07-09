/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    var cur = head
    var count = 0
    while (cur && count != k) {
        cur = cur.next;
        count++;
    }
    if (count == k) {
        cur = reverseKGroup(cur, k);
        while (count) {
            var temp = head.next;
            head.next = cur;
            cur = head;
            head = temp;
            count--;
        }
        head = cur
    }
    return head
};

var reverseList = function(head) {
    var prev = null;
    var curr = head;
    while(curr) {
        var temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    return prev;
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

var example = aListNode([1,2,3,4,5]);
console.log(reverseKGroup(example,3));

function printNode(head) {
    console.log('-----------')
    while(head) {
    console.log(head.val)
    head = head.next
    }
}