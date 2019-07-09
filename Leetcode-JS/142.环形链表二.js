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

var getIntersect = function(head) {
    if (head == null) return null; 
    var fast = head.next;
    var slow = head;
    while(fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast == slow) return slow;
    }
    return null;
}

var detectCycle = function(head) {
    var intersect = getIntersect(head);
    if (intersect == null) return null; 
    var cur = head;
    while (intersect != cur) {
        intersect = intersect.next;
        cur = cur.next;
    }
    return cur;
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

function aCycleListNode(arr, cycleIndex) {
    var listNode = new ListNode(0);
    var curr = listNode;
    var cycleObject = null;
    for(var i = 0; i < arr.length; i++) {
        var object = arr[i];
        curr.next = new ListNode(object);

        if (cycleIndex == i) {
            cycleObject = curr.next;
        }
        curr = curr.next;
        if (i ==  arr.length-1) {
            curr.next = cycleObject;
        }
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

var example = aCycleListNode([3,2,0,-4], 1);
console.log(detectCycle(example))