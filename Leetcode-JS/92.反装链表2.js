/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */

// 第一次解法（错误）

// var reverseBetween = function(head, m, n) {
//     var curr = head;
//     var pre = null;
//     var count = 1; 

//     while(n>count) {
//         curr = curr.next;
//         count++;
//     }
//     var res = new ListNode(0);
//     res.next = head;

//     pre = curr
//     curr = res;
//     count = 0;

//     printNode(pre)

//     while(curr.next) {
//         var temp = curr.next;
//         if (count>=m&&count<=n) {
//             curr.next = pre;
//             pre = temp;
//         }
//         curr = temp;
//         count++;
//     }
//     return res.next
// };

// 头尾交换
var reverseBetween = function(head, m, n) {
    var result = new ListNode(0);
    result.next = head;
    var pre = result;
    var count = 1;

    while(count < m) {
        pre = pre.next;
        count++;
    }

    var start = pre.next;
    var tail = start.next;

    while(count<n) {
        start.next = tail.next;
        
        printNode(tail)

        tail.next = pre.next;
        pre.next = tail;
        tail = start.next;
        count++;
    }

    return result.next;
}

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
printNode(reverseBetween(example,2,4));

function printNode(head) {
    console.log('-----------')
    while(head) {
        console.log(head.val)
        head = head.next
    }
}