// let username= 'Dave'; 
// console.log(username); 

// let a: number =  12; 
// let b: number= 6;
// let c: number = 2;

// console.log(a / b); 

// console.log(c * b);

////////////////////////////////////////////////////////////////
// let myName: string = 'Dave';
// myName = 42;

// let myName: string = 'Dave';
// let meaningOfLife: number;
// let isLoading: boolean;
// // let album: any;
// let album: string | number; 

// myName= 'John'; 
// meaningOfLife = 42; 
// isLoading = true;

// const sum = (a: number, b: string) => {
//     return a + b;
// }

// let postId: string | number;
// let isActive: number | boolean; 

// let re: RegExp = /\w+/g 
/////////////////////////////////////////////////////////////////
let stringArr = ['one', 'hey', 'Dave'];

let guitars = ['Star', 'Les Paul', 5150]; 

let mixedData = ['EVH', 1984, true];

stringArr[0] = 'John'; 
stringArr.push('hey'); 
guitars[0] = 1984;
// guitars.unshift('Jim'); 

let tests = [] 
let bands: string[] = [];
bands.push('Van Halen');
// console.log(bands);

// ///////////////////////////// Tuple ////////////////////////////
let myTuple: [string, number, boolean] = ['Dave', 42, true];

let mixed = ['John', 1, false];

mixed = myTuple; 
// myTuple = mixed; 

///////////////////// Objects //////////////////////////////////////
let myObj: object; 
myObj = []; 
console.log(typeof myObj);
myObj = bands; 
myObj = {}
const exampleObject = {
    prop1: 'Dave', 
    prop2: true
}

// exampleObject.prop2 = false;
exampleObject.prop1 = 'John';

///////////////////////////////////////////////////////////////////////////////
// type Guitarist = {
//     name: string, 
//     // active: boolean, 
//     active?: boolean, 
//     albums: (string | number)[]
// }

// let evh: Guitarist = {
//     name: 'Eddie', 
//     active: false, 
//     albums: [1984, 5150, 'OU812']
// }

// let jp: Guitarist = {
//     name: 'Jimmy', 
//     active: true, 
//     albums: ['I', 'II', 'IV']
// }

// // evh = jp;
// const greetGuitarist = (guitarist: Guitarist) => {
//     return `Hello ${guitarist.name}!`;
// }

// // console.log(greetGuitarist(jp));
// console.log(greetGuitarist(evh));

//////////////////////////////// Alternative way using interface ////////////////////////////////////////

// interface Guitarist {
//     // name: string,
//     name?: string, 
//     active: boolean, 
//     albums: (string | number)[]
// }


// let evh: Guitarist = {
//     name: 'Eddie', 
//     active: false, 
//     albums: [1984, 5150, 'OU812']
// }

// let jp: Guitarist = {
//     name: 'Jimmy', 
//     active: true, 
//     albums: ['I', 'II', 'IV']
// }

// // evh = jp;
// const greetGuitarist = (guitarist: Guitarist) => {
//     // return `Hello ${guitarist.name?.toUpperCase()}!`;
//     if(guitarist.name){
//         return `Hello ${guitarist.name.toUpperCase()}!`;
//     }
//     return 'Hello';
// }

// console.log(greetGuitarist(jp));
// console.log(greetGuitarist(evh));
////////////////////////////////////// Enums ///////////////////////////
// enums "Unlike most typescript featues, enums are not a type-level addition to javascript but something added to the language and runtime"
// enum Grade {
//     U = 1, 
//     D, 
//     C, 
//     B, 
//     A
// }
// console.log(Grade.U);

///////////////////////////// Functions ///////////////////////////////////////
// Type Aliases 
// type stringOrNumber = string | number; 

// type stringOrNumberArray = (string | number)[]

// type Guitarist = {
//     name?: string, 
//     active: boolean, 
//     albums: stringOrNumberArray
// }

// type UserId = stringOrNumber; 

// // Literal types 
// let myName: 'Dave'

// let userName: 'Dave' | 'John' | 'Anny'; 
// userName = 'Anny'

/////////////////////////////////// Function ////////////////////////////////////////////////
const add = (a:number, b: number): number => {
    return a + b;
}

// a function that does not return anything which does not have a side effect
const logMsg= (message: any): void => {
    console.log(message)
}

logMsg('Hello');
logMsg(add(2, 3)); 

let subtract = function(c: number, d: number): number {
    return c - d; 
}

type mathFunction = (a: number, b: number) => number;

// interface mathFunction {
//     (a: number, b: number): number
// } 

let multiply: mathFunction = function (c, d) {
    return c * d;
}

logMsg(multiply(2, 2));

// optional parameters 
const addAll = (a: number, b: number, c?: number): number => {
    if(typeof c !== 'undefined'){
        return a + b + c;
    }
    return a + b; 
}

const sumAll = (a: number = 10, b: number, c: number = 2): number => {
    return a + b + c;
}

logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3)); 
logMsg(sumAll(2, 3))