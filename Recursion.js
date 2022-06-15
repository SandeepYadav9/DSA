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

// Q2. Print numbers from 1 to 5.

function printNumber(n) {
  if (n == 6) {
    return;
  }
  console.log(n);
  return printNumber(n + 1);
}
printNumber(1);

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
  
