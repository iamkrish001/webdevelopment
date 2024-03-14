// // variable declaration in js
// // let , var and const
// // data types -> int, float, char, double, bool, object
// // primitive -> num, string, boolean, undefined, null, symbol
// // and non primitive data types -> array, object
// var a= 10;
// console.log(a);
// // var a=20 ;
// // console.log(a); 
// // console.log("hell world")
// // var b=5 ; 
// // console.log(b); 
// // let b=5 ; 
// // console.log(b); 
// // let cannot be re declared but var can be 

// console.log(typeof a); 
// let first_name= "krish" ; 
// console.log(first_name); 
// console.log(typeof first_name); // in built keyword , not possible to use

// //variable naming rules
// //camel case - krishBhurtel , myVar 
// // case sensitive
// // first letter must be , _ or $
// // for eg:
// let $myName = " krish" ; 

// let isPresent = true;
// console.log(typeof isPresent) ;


// if(a<b){
//     console.log(" a is greater than b");
// }
// else
// {
//     console.log("b is greater") ; 
// }
// c =a +b ; 
// console.log(c)
// let a=3;
// let b= 5 ;


// dialog box 
// let yourName= prompt("Enter your name");
// console.log(yourName)


// simple calculator
let a = Number(prompt("Enter a"))
let b= prompt("Enter b");
let op= prompt("Enter the operator");
 //Numbers defines the datatype 

if (op=="+") {
    console.log(a+b) ; 
}
else if(op=="-"){
    console.log(a-b) ;
}
else if(op=="*"){
    console.log(a*b) ;
}
else if(op=="/"){
    console.log(a/b) ;
}
else{
    console.log("Invalid operator");
}

console.log(typeof a);
console.log(typeof b);