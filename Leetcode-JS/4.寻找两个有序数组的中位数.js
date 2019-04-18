/** 
 * 快排
*/

// var quicksort = function(nums) {
//     if (nums.length <= 1) { return nums; }
//     var pivotIndex = Math.floor(nums.length/2)
//     var pivot = nums[pivotIndex]
//     var leftNumbers = []
//     var rightNumbers = []

//     for (var i = 0; i < nums.length; i++) {
//         if (nums[i] < pivot) {
//             leftNumbers.push(nums[i])
//         } else {
//             rightNumbers.push(nums[i])
//         }
//     }
//     var newArr = quicksort(leftNumbers).concat([pivot], quicksort(rightNumbers));
//         return newArr;
// }

var quickSort = function(arr) {

        　　
    if (arr.length <= 1) { return arr; }

    　　
    var pivotIndex = Math.floor(arr.length / 2);

    　　
    var pivot = arr.splice(pivotIndex, 1)[0];

    　　
    var left = [];

    　　
    var right = [];

    　　
    for (var i = 0; i < arr.length; i++) {

        　　　　 if (arr[i] < pivot) {

            　　　　　　 left.push(arr[i]);

            　　　　 } else {

            　　　　　　 right.push(arr[i]);

            　　　　 }

        　　 }
    var newArr = quickSort(left).concat([pivot], quickSort(right));
    return newArr;

};

console.log(quickSort([6,3,2,8]))