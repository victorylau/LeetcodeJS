/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
   this.next = null;
}

var addTwoNumbers = function(l1, l2) {
    var resultNode = null
    var currentNode = null
    var p = 0

    var v1 = l1
    var v2 = l2

    while((v1!=null || v2!=null )|| p > 0)  {
        var currentVal = 0
        var value1 = v1 ? v1.val : 0
        var value2 = v2 ? v2.val : 0

        console.log(value1 + " " + value2)
 
        if ((value1+value2+p)>=10) {
            currentVal = (value1+value2+p)%10
            p = 1
        } else {
            currentVal = value1+value2+p
            p = 0
        }
        console.log(p)
        if (resultNode==null) {
            resultNode = new ListNode(currentVal)
            currentNode = resultNode
        } else {
            currentNode.next = new ListNode(currentVal)
            currentNode = currentNode.next
        }

        v1 = v1 ? (v1.next ? v1.next : null) : null
        v2 = v2 ? (v2.next ? v2.next : null) : null

    } 
    return resultNode
};

var l1 = new ListNode(5)
// l1.next = new ListNode(8)
// l1.next.next = new ListNode(5)

var l2 = new ListNode(5)
// l2.next = new ListNode(0)
// l2.next.next = new ListNode(5)

console.log(addTwoNumbers(l1,l2))