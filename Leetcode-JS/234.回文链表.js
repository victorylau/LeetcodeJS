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

const {ListNode, PAListNode, printNode} = require('./NodeList');

var isPalindrome = function(head) {
    if(head == null || head.next == null) return true;
    
    var fast = head.next
    var slow = head
    var pre, prapre = null;
    while(fast && fast.next) {
        pre = slow
        fast = fast.next.next;
        slow = slow.next;
        pre.next = prapre
        prapre = pre
    }

    var p2 = slow.next
    slow.next = pre
    var p1 = fast == null ? slow.next: slow

    

    while(p1) {
        if(p1.val != p2.val) return false;
        p1 = p1.next;
        p2 = p2.next;
    }
    return true

    printNode(pre)
    printNode(prapre)

    // var pre = null
    // while(end) {
    //     var tmp = end.next;
    //     end.next = pre;
    //     pre = end;
    //     end = tmp
    // }

    // printNode(pre)
    // printNode(front)

    // while(pre&&front) {
    //     if(pre.val != front.val) return false;
    //     pre = pre.next
    //     front = front.next;
    // }
    // if(pre||front) return false
    // return true
};

// var isPalindrome = function(head) {
//     var fast = head
//     var slow = head
//     while(fast.next && fast.next.next) {
//         fast = fast.next.next;
//         slow = slow.next;
//     }
//     var mid = slow.next;
//     slow.next = null;

// }

var example = PAListNode([1,2,3,4,3,2,1]);
console.log(isPalindrome(example))