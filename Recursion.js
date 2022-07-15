// Q1. Print numbers from 5 to 1.
/*
information =n 

output=5,4,3,2,1
*/
function printNumber(n) {
  if (n == 0) {
    return;
  }
  console.log(n);
  return printNumber(n - 1);
}

printNumber(5);
=============================
// Q2. Print numbers from 1 to 5.

function printNumber(n) {
  if (n == 6) {
    return;
  }
  console.log(n);
  return printNumber(n + 1);
}
printNumber(1);
================================
// Q3. Print the sum of fIndexrst n natural numbers.

/*
1 2 3 4 5 =15 
inormation n fi

colculate= sum 

n== first
*/
function sumOfNaturalNumber(sum, fIndex, n) {
  if (fIndex == n) {
    sum = sum + fIndex;
    console.log(sum);
    return;
  }
  sum = sum + fIndex;

  return sumOfNaturalNumber(sum, fIndex + 1, n);
}

sumOfNaturalNumber(0, 1, 5);
==========================================
// Q4. Print a string in reverse.
/*
information 
str ="Sandeep";
index =str.length;
output= "peednaS"
*/

function revString(str, index) {
  if (index == 0) {
    console.log(str.charAt(index));
    return;
  }
  console.log(str.charAt(index));
  return revString(str, index - 1);
}
let str = "Sandeep";
revString(str, str.length);
===========================
// Q5. Print the fibonacci sequence till nth term.

/*
information 
n=0, 
0 1 1 2 3
n n+1, n+2, n+3, n+4,n+5
*/
function fibonacci(firstElement, secondElement, n) {
  if (n == 0) {
    return;
  }
  let thirdElement = firstElement + secondElement;
  console.log(third);
  return fibonacci(secondElement, thirdElement, n - 1);
}
console.log(0);
console.log(1);
fibonacci(0, 1, 9);


==========================================
// Q6. Print factorial of a number n.
/*
infor=n
!5= n * n-1 * n-2 * n-3 * n-4 * n-5 
*/
function factorial(n) {
    if (n == 0 || n == 1) {
      return 1;
    }
    
    return n * factorial(n - 1);
  }
  
  console.log(factorial(5));
  


=======================================================
  
  
  6. Prints x^n (STACK HIGHT n);
/*
x, n 
x=2
n=5

*/

function calcuPower(x, n) {
  if (x == 0) {
    return 0;
  }
  if (n == 0) {
    return 1;
  }

  return x * calcuPower(x, n - 1);
}

let x = 2;
let n = 5;
console.log(calcuPower(2, 5));



=======================================================
  
  // Find the first and lost occerance of an elements in strings

  /*
info
Given= info, index, element
find= first index, lost index
*/
let first = -1;
let lost = -1;
function elementOccers(str, index, element) {
  if (index == str.length - 1) {
    console.log(first);
    console.log(lost);
    return;
  }

  let currentChar = str.charAt(index);
  if (currentChar == element) {
    if (first == -1) {
      first = index;
    } else {
      lost = index;
    }
  }

  return elementOccers(str, index + 1, element);
}

let str = "abaacdaefaah";
elementOccers(str, 0, "a");


===========================================
  
  
  // Check an array is sorted (Strictly incrising order)

function sortedAarr(arr, index) {
  if (index == arr.length - 1) {
    return true;
  }

  if (arr[index] < arr[index + 1]) {
    return sortedAarr(arr, index + 1);
  } else {
    return false;
  }
}

let arr = [1, 2, 3, 4, 5];
sortedAarr(arr, 0);
console.log(sortedAarr(arr, 0));




=======================================================
  
   // Move  all 'X to the end of the Strings
/*
check information
logic, condition how to achive
complete condition 
*/
function moveAll(str, i, c, newStr) {
  if (i == str.length) {
    for (let i = 0; i < c; i++) {
      console.log("x");
    }
    console.log(newStr);
    return;
  }

  let currentChar = str.charAt(i);
  if (currentChar == "x") {
    c++;
    moveAll(str, i + 1, c, newStr);
  } else {
    newStr += currentChar;
    moveAll(str, i + 1, c, newStr);
  }
}
let str = "axbcxxd";
moveAll(str, 0, 0, "");
