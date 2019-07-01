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
var swapPairs = function(head) {
    var pre = new ListNode(0);
    pre.next = head;
    var temp = pre;

    printNode(pre)

    while(temp.next != null && temp.next.next != null) {
        var start = temp.next;  // 1234   34
        var end = temp.next.next; // 234   4

        temp.next = end;    // 234   14
        start.next = end.next; // 134   3

        end.next = start; // 2134   43
        temp = start; // 134   3
        // printNode(pre)  // 02134 02143
    }
    return pre.next;
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

var example = aListNode([1,2,3,4]);
swapPairs(example)