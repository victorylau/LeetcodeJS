module.exports = {
    ListNode,
    PAListNode,
    printNode,
};

function ListNode(val) {
    this.val = val;
    this.next = null;
};

 function PAListNode(arr) {
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
};