/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

const {printNode, ListNode, PAListNode} =  require('./NodeList');

var deleteNode = function(node) {
   node.val = node.node.val;
   node.next = node.next.next;
};