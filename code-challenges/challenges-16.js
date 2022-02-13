'use strict';


// Combine methods

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Write a function that takes in a string and returns the reverse of this string .
//
// Input <= "Hello";
// Output => "olleH";

const reverseString = (string) => {
    //write your code here ...
   const splitString = string.split(""); 
    const reverseArray = splitString.reverse();
   const joinArray = reverseArray.join("");
   return joinArray;
}
// -------------------------------------------------------------------------------------------------------



// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes an array of strings and returns only strings that contain ^_^.
//
// Ex :-
// Input <= ["hello ^_^ ","Hi ^_^" ,"What's up ^_-" ,"lol"] , Output => ["hello ^_^ ","Hi ^_^" ] ;

const detectFace = (arr) => {
    //write your code here ...
    //const str="not found";
    let arr1=[];
    let smile='^_^';
    for (let i=0;i<arr.length;i++)
    {
      
    if (arr[i].includes(smile)) {

        arr1.push(arr[i]);
    }         
}

        return arr1;
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes in a string and returns a string contains only characters in even positions.
//
// Ex :-
// Input <= "coding" output =>"cdn"

const eveCharacter = (str) => {
    //write your code here ...
let odd = [],
even = [];

for (var i = 0; i < str.length; i++) {
i % 2 === 0
? even.push(str[i]) 
: odd.push(str[i])
}
const joinArray = even.join("");
return joinArray;

}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 04
// Optional:

// Let us consider you are hired as a software developer in a tech company and you are assigned to work on a restaurant web application project .

// And you are assigned to write function to return only ingredients that contains chicken.
//
// Input:
// [["mushroom", "grilled chicken", "sauce"], ["Bread", "Potato", "baked chicken"], ["fried potato", "garlic sauce", "fried chicken"]];
//
// Output:
// [["grilled chicken"], ["baked chicken"], ["fried chicken"]];


const chickenGradients = (arr) => {
    //write your code here ...
    
    let arr2=[];
    let ingredients='chicken';
    for (let i=0;i<arr.length;i++)
    {
      let arr1=[];
      for(let j=0;j<arr[i].length;j++){
    if (arr[i][j].includes(ingredients)) 
{
        arr1.push(arr[i][j]);
        //console.log(arr[i][j])
}    
    
    
}
  arr2.push(arr1);     
    }

        return arr2;
}
// -------------------------------------------------------------------------------------------------------

module.exports = { reverseString, detectFace, eveCharacter, chickenGradients };
