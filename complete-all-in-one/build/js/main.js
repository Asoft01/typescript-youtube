"use strict";
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
// let stringArr = ['one', 'hey', 'Dave'];
// let guitars = ['Star', 'Les Paul', 5150]; 
// let mixedData = ['EVH', 1984, true];
// stringArr[0] = 'John'; 
// stringArr.push('hey'); 
// guitars[0] = 1984;
// // guitars.unshift('Jim'); 
// let tests = [] 
// let bands: string[] = [];
// bands.push('Van Halen');
// // console.log(bands);
// // ///////////////////////////// Tuple ////////////////////////////
// let myTuple: [string, number, boolean] = ['Dave', 42, true];
// let mixed = ['John', 1, false];
// mixed = myTuple; 
// // myTuple = mixed; 
// ///////////////////// Objects //////////////////////////////////////
// let myObj: object; 
// myObj = []; 
// console.log(typeof myObj);
// myObj = bands; 
// myObj = {}
// const exampleObject = {
//     prop1: 'Dave', 
//     prop2: true
// }
// // exampleObject.prop2 = false;
// exampleObject.prop1 = 'John';
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
// const add = (a:number, b: number): number => {
//     return a + b;
// }
// // a function that does not return anything which does not have a side effect
// const logMsg= (message: any): void => {
//     console.log(message)
// }
// logMsg('Hello');
// logMsg(add(2, 3)); 
// let subtract = function(c: number, d: number): number {
//     return c - d; 
// }
// type mathFunction = (a: number, b: number) => number;
// // interface mathFunction {
// //     (a: number, b: number): number
// // } 
// let multiply: mathFunction = function (c, d) {
//     return c * d;
// }
// logMsg(multiply(2, 2));
// // optional parameters 
// const addAll = (a: number, b: number, c?: number): number => {
//     if(typeof c !== 'undefined'){
//         return a + b + c;
//     }
//     return a + b; 
// }
// const sumAll = (a: number = 10, b: number, c: number = 2): number => {
//     return a + b + c;
// }
// logMsg(addAll(2, 3, 2));
// logMsg(addAll(2, 3)); 
// logMsg(sumAll(2, 3))
// logMsg(sumAll(undefined, 3));
// // Rest parameters 
// // const total = (...nums: number[]): number => {
// //     return nums.reduce((prev, curr) => prev + curr)
// // }
// // logMsg(total(1, 2, 3,4));
// /////// More ways for rest parameters 
// const total = (a:number, ...nums: number[]) => {
//     // return nums.reduce((prev, curr) => prev + curr);
//     return a + nums.reduce((prev, curr) => prev + curr);
// }
// logMsg(total(10, 2, 3)); 
// const createError = (errMsg: string): never => {
//     throw new Error(errMsg);
// }
// const infinite = () => {
//     let i: number = 1; 
//     while(true) {
//         i++
//         if(i > 100) break;
//     }
// }
// // custom type guard
// const isNumber = (value: any): boolean => {
//     return typeof value === 'number' ? true : false;
// }
// // use of the never type
// const numberOrString = (value: number | string): string => {
//     if (typeof value === 'string')  return 'string'; 
//     // if (typeof value === 'number') return 'number';
//     if(isNumber(value)) return 'number';
//     return createError('This should never happen!')
// }
/////////////////////////////////////////////////////////////////////////////////////////
// type One = string;
// type Two = string | number;
// type Three = 'hello';
// // convert to more or less specific 
// let a:One = 'hello'; 
// let b = a as Two; // less specific type 
// let c = a as Three // more specific type
// let d = <One>'world'; 
// let e = <string | number>'world';
// const addOrConcat = (a: number, b: number, c:'add' | 'concat'): number | string => {
//     if(c === 'add') return a + b; 
//     return '' + a + b;
// }
// let myVal: string = addOrConcat(2,2,'concat') as string;
// // Be careful! TS sees no problem - but a string is returned
// let nextVal: number = addOrConcat(2,2,'concat') as number;
// // 10 as string;
// // (10 as unknown) as string;
// //////////////////////////////// The DOM /////////////////////////////////
// const img = document.querySelector('img')!;
// // const img = document.querySelector('img') as HTMLImageElement;
// // const myImg = document.getElementById('#myId') as HTMLImageElement;
// const myImg = document.getElementById('#myId')! as HTMLImageElement;
// const nextImg = <HTMLImageElement>document.getElementById("#img");
// img.src
// myImg.src;
/////////////////////////// Classes ///////////////////////////////////////
// class Coder {
//     name: string
//     music: string
//     age: number
//     lang: string
//     constructor(
//         name: string, 
//         music: string, 
//         age: number, 
//         lang: string
//     ){
//         this.name = name;
//         this.music = music; 
//         this.age = age; 
//         this.lang = lang;
//     }
// }
//////////////////////// Using Visibility Modifiers //////////////////////////
class Coder {
    constructor(name, music, age, lang = 'Typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
const Dave = new Coder('Dave', 'Rock', 42);
console.log(Dave.getAge());
// console.log(Dave.age)
// console.log(Dave.lang)
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const sara = new WebDev('Mac', 'Sara', 'Lofi', 25);
console.log(sara.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist('Jimmy', 'guitar');
console.log(Page.play('strums'));
/////////////////////////////////////////////////////////////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');
// console.log(Amy.id);
// console.log(Steve.id);
// console.log(John.id);
console.log(Peeps.count);
///////////////////////////////////// Getter and Setter //////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
}
