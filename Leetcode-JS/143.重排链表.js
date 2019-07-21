/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const {printNode, ListNode, PAListNode} =  require('./NodeList');

var reorderList = function(head) {
    if(head == null || head.next == null) {
        return head;
    }
    // 找中间点
    var fast = head
    var slow = head
    while(fast.next && fast.next.next) {
        fast = fast.next.next
        slow = slow.next
    }
    fast = slow.next;    // 后半部分
    slow.next = null

    // 后半部分倒叙
    var head2 = fast
    var pre = null
    while(head2) {
        var tmp = head2.next;
        head2.next = pre
        pre = head2;
        head2 = tmp
    }

    // 合并
    var l1 = head
    var l2 = pre

    while(l1&&l2) {
        var next = l1.next;
        l1.next = l2
        l2 = l2.next;
        l1.next.next = next
        l1 = next
    }

    return head
};

var example = PAListNode([1,2,3,4,5])
printNode(reorderList(example))

