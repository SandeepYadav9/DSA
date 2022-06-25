//Bubble Sorts

 // Time complexcity = B-O(n^2)

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {          // loop for n-1 iteration count 
    for (let j = 0; j < arr.length - 1 - i; j++) {    // first iteration one element sorted 
      if (arr[j] > arr[j + 1]) {
        // Swiping of two number
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
var arr = [7, 8, 3, 1, 2];
//bubbleSort(arr);
console.log(bubbleSort(arr));


//Selection Sort
// Time complexcity of B-O(n^2);

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) { // n iteration count loop
    let smalest = i;  // 
    for (let j = i + 1; j < arr.length; j++) { // 
      if (arr[smalest] > arr[j]) {
        smalest = j;
      }
    }
    // Swiping 
    let temp = arr[smalest];
    arr[smalest] = arr[i];
    arr[i] = temp;
  }
  return arr;
}
let arr=[7, 8, 3, 1, 2]
console.log(selectionSort(arr));



// inserson Sort
/*  
  [7,|       8,5,3,2,1]
 sortedArr , unSortedArr

  */

// Time complexcity of B-O(n);

function insersonSort(arr) {
  for (let i = 1; i < arr.length; i++) {  // n iteration for unsorted arr
    let currentElement = arr[i]; // unsorted first element
    let j = i - 1;  // sortedArr index 
    while (j >= 0 && currentElement < arr[j]) {  // Compaire 
      arr[j + 1] = arr[j];
      j--; // Making place for sortdArr
    }
    arr[j + 1] = currentElement; 
  }
  return arr;
}
let arr = [7, 8, 3, 1, 2];
console.log(insersonSort(arr));

