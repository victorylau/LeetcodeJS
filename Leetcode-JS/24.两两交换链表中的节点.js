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
// var swapPairs = function(head) {
//     var pre = new ListNode(0);
//     pre.next = head;
//     var temp = pre;

//     while(temp.next != null && temp.next.next != null) {
//         var a = temp.next;  // 1234   34
//         var b = a.next; // 234   4

//         // a.next = b.next; // 134   3
//         // b.next = a;   // 2134   43
//         // temp.next = b;    // 02134   14 
       
//         temp.next = b;    // 234   14 
//         a.next = b.next; // 134   3
//         b.next = a;   // 21234   43
        
        
        
        

//         // end.next = start; // 2134   43
//         temp = a; // 134   3
//         // printNode(pre)  // 02134 02143
//     }
//     return pre.next;
// };

var swapPairs = function(head) {
    var prev = new ListNode(0);
    prev.next = head;
    var curr = prev;
    while(curr.next != null && curr.next.next != null) {
        var start = curr.next;
        var end = curr.next.next;
        curr.next = end;
        start.next = end.next;
        end.next = start;
        curr = start;
        printNode(curr)
    }
    return prev.next
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

function printNode(head) {
    console.log('-----------')
    while(head) {
        console.log(head.val)
        head = head.next
    }
}

var example = aListNode([1,2,3,4]);
printNode(swapPairs(example))