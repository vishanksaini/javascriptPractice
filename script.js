console.log("hello");
console.log("bankai");

//if given value is int without inbuilt Functiion

// let value;
// function isint(value)
// {
//   console.log("value is",value);
//   return (value%1===0);
// }

// console.log(isint(value));

//reverse a string
// let str="hello";
// str=[...str].reverse().join('');
// console.log("new str is",str);

//reverse a string by words

// const str="hello world";
// str.split(" ").reverse().join(" ");
// console.log(str);

// Write a function which accepts a string argument and returns the count of characters between the first and last character 'X
// Example
// getTheGapX("F(X) !== G(X) !== F(X)"); // 18
 function getTheGapX(str)
 {
   let firstOcuurence=0;
   let lastOccurence=-1;

   for(let i=0;i<str.length;i++)
   {
     if(str[i]==='X')
     {
       firstOcuurence=i;
       break;
     }
   }
   for(let i=str.length-1;i>=0;i--)
   {
     if(str[i]==='X')
     {
       lastOccurence=i;
       break;
     }
   }
   if(lastOccurence===firstOcuurence)
     return -1;
   return lastOccurence-firstOcuurence;
 }
console.log(getTheGapX("XeeeeefdfdX"));
getTheGapX("XeroX"); // 4
console.log(getTheGapX("Xamarin")); // -1       (If there is only single character 'X')
console.log(getTheGapX("JavaScript")); // -1 

