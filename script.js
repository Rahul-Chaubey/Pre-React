// console.log(a);
// // var a;
// var a=10;
// let b=20;
// console.log(b);

// {
   
//     var c=10;
//     console.log(c);
//     let d=20;
//     console.log(d);
// }

// console.log(c);
// console.log(d);



// const a = 10;
// const b ;   //error
// a=20;   //error
// console.log(a);


// const myArr = {
//     //5000
//     name  : "Ankur",
// };

//  //myArr=5000

//  myArr.name = "Akshay";
//   myArr = {         //error
//      name : "Ankit",
//  };

// console.log(myArr);


//Strings


// let myString1 = "abcd@xyz.com";
// let myString2 = "Abcd@xyz.com";

// console.log(myString1.toUpperCase()===myString2.toUpperCase());
// //true

// for(let i=0; i <myString1.length;i++) {
//     console.log(myString1[i]);  //Each character within the string
// }


//WAP to find repeated characters from string
//input = "abcdafgdbjcj";
//output = "abcdj";


// let input = "abcdafgdbjcj";
// let output = ""

// for (let i = 0; i<=input.length;i++) {
//    let count = 0;
//    for (let j=0; j<input.length;j++) {
//        if (input[i] === input[j] && i<=j){
//            count++;
//            if(count>1) {
//                output =output+ input[i];
//                break;
//            }
//        }
//    }
// }

// console.log(output);




// //ARRAY
// // let myArr = [1,2,3,4,5,"myString",["a","b"]];
// let myArr = [1,2,3,4,5];
// let myArr1 = [1,2,3,4,5];
// let isSame = true;
// for(let i =0; i< myArr.length;i++) {
//     if (myArr[i]!== myArr1[i]) {
//         isSame = false;
//         break;
//     }
// }

// //console.log(myArr ==== my Arr1);  //false
// console.log(isSame);  //True


// let input = "India is my Country";
// let output = "";

// function reverseString(value) {
//     let returnValue = "";
//     for (let i = value.length - 1;i > -1;i--) {
//         returnValue = returnValue + value[i];
//     }
//     return returnValue;
// }
// let wordString = "";
// for(let i = 0;i< input.length;i++) {
//     if (input[i]=== " ")  {
//         output = output + reverseString(wordString) + " ";
//         console.log(wordString);
//         wordString = "";
//         continue;
//     } 
//     else {
//         wordString = wordString + input[i];
//         if (i+1 === input.length) {
//             output = output + reverseString(wordString);
//             console.log(wordString);
//             wordString = "";
//         }
//     }
// }
// console.log(output);



// console.log(addNumbers(10,20));
// console.log(addNumbers);


// function addNumbers(number1 , number2 ) {
//     return number1+number2
// }

//Function_Expression

// const addNumbers2 = function addNumbers(number1 , number2 ) {
//     return number1+number2
// };

// //Arrow_Function

// const addNumbersArrow = (number1 , number2 ) =>
//  {
//     return number1+number2;
// }

// console.log(addNumbers2(10,30))

// // //this

// const myObject = {
//     name : "Akshay",
//     getName : function ()
//      {
//         return this.name;
//     },
// };

// const myNewObject = {
//     name : "Ankit",
// };


// const newGetName = myObject.getName.bind(myNewObject);
// console.log(myObject.getName());
// console.log(newGetName());


// Constructor Function


// function Person(name , age) {
//     if (!new.target) {
//         return new Person(name , age);
//     }
    //this = {}//added internally
  //  this.name = name;
    //this.number = 1234;
    //this.age;
    // return {name}; //return {name:name}
    // return 1234; //not allowed
    // return[1,2,3,4]; //allowed
    // return this; //added internally

// }
//  const personObject = new Person("Ankur", 29);
//  const personObject1 = Person("Ankur",29); //same output as above
//  console.log(personObject);
//  console.log(personObject1);

//  //Destructuring
// const myArr = [1, 2, 3, 4];
// // const a = myArr[0];
// // const b = myArr[1];
// // const c = myArr[2];
// // const d = myArr[3];
// const [a, c, b, d] = myArr; //sequence is very important
// console.log(a, b, c, d);
// const myObject = {
//   name: "Ankur",
//   age: 29,
// };
// // const name = myObject.name;
// // const age = myObject.age;
// const { age, name } = myObject; //sequence is not important
// console.log(age,name);


// var x = 55;
// var z = x;
// var v = 30;
// console.log(z);

// // z+= 5;
// // z-= 5;
// // z*= 5;
// z/= 5;
// console.log(z);

// console.log(x==v);
// console.log(x>=v);
// console.log(x<=v);


//Spread Opeerator

// const myArr = [1,2,3,4,5];
// const myArrNew = myArr;

// for(let i=0;i< myArr.length; i++) {
//     myArrNew.push(myArr[i]);
// }

// console.log(myArr);
// console.log(myArrNew);
// myArr.push(6);
// console.log(myArr);
// console.log(myArrNew);


// const myObject = {
//     name : "Ankur",
//     age : 29,
// };

// const myNewObject = {...myObject};
// console.log(myObject);
// console.log(myNewObject);
// myObject.name = "Ankit";
// console.log(myObject);
// console.log(myNewObject);
// //console.log(...myObject);//not valid


//Rest
//A//
function addNumbers(...args) {
    let result = 0;
    for (let i=0;i<args.length;i++) {
        result += args[i]; //same as result = result + args[i]

    }
     return result;
}
    console.log(addNumbers(10,20,30,40));

//B//

// function addNumbers(...args) {
//     console.log(args);
// }
//     console.log(addNumbers(10,20,30,40))




