/*
let arr=[6, 3, 9, 5, 2, 8] 
        low              high
        i=-1 , low-1  // making space
       lost is pivot 
       
*/
function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;  // 
    for (let j = low; j < high; j++) {
      if (arr[j] < arr[pivot]) {
        i++;
        // Swap 
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
    // Make place for Pivot
    i++;
    let temp = arr[i];
    arr[i] = pivot;
    pivot = temp; 
    return i;
  }
  function quickSort(arr, low, high) {
    if (arr[low] > arr[high]) {
      let pivotIndex = partition(arr, low, high);
      // < partition
      quickSort(arr, low, pivotIndex - 1);
      // > partition
      quickSort(arr, pivotIndex + 1, high);
    }
   
  }
  let arr = [6, 3, 9, 5, 2, 8];
  
  quickSort(arr, 0, arr.length-1)
  
  // console.log(quickSort(arr,0, arr.length))
  
  