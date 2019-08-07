function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function PATreeNode(arr) {
    var root = new TreeNode(arr[0])
    var left, right = null
    for(var i = 1; i < arr.length; i++) {
        var val = arr[i]
        root.left = new TreeNode(val)
        left = root.left
    }
}