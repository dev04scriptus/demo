// var a = {
//     firstname: "viral",
//     lastname: "chovatiya",
//     b : ["array","strin","boolean","undefined"],
//     c : function()  {
//         return 10;
//     }
    
// }

// console.log(a.c());

// let database = [
//     {
//         username : "viral",
//         password : "123"
//     }
// ];

// let  feed = [
//     {
//         feed :  "good",
//         feed1 : "very good"
//     },
//     {
//         feed2: "not",
//         feed3: "yes" 
//     }
// ];

// let usernameprompt = prompt("enter username");
// let passwordprompt = prompt("enter password");

// singin =(user,pass) => {
//     if (user === database[0].username && pass === database[0].password){
//         console.log(feed);
//     }
//     else {
//         console.log("enter valid username & password");
//     }
// }

// console.log(singin(usernameprompt,passwordprompt));


// const java = ["variable","object","number","boolean"];
// let javal = java.length;

// for (let i=0 ; i < javal; i++)
// {
//     const text = javal[i] + " " + i  ;
//     console.log(text + " !");
//     console.log(i);
// }; 

// let Number = 1;

// while(Number <= 10 ){
//     console.log(Number);
//     Number++;
// }
  
// let Numbers = 10;
// while (Numbers > 10){
//     console.log("while", Numbers);
//     Numbers--;
// }

// let number = 10;

// do{
//     console.log("do while", number);
//     number--;
// }
// while(number > 10);

// n = (java, i) => {
//     console.log(java);
// }
// java.forEach(n);

// java.forEach
// (
//     function(java,i)
//     {
//         console.log(java,i);
//     }
// )

// let java = ["variable","object","number","boolean"];



// let a = "all good , but all not good"

// let b = a.length;

// let database = [
//     {
//         username: "viral",
//         password: "123"
//     },
//     {
//         username: "romit",
//         password: "234"
//     },
//     {
//         username:  "dixit",
//         password: "345"
//     }
// ]

// let newsfeed = [
//     {
//         name: "hbhdsh"
//     },
//     {
//         name: "gdbefh"
//     },
//     {
//         name: "ytysauyg d"
//     }
// ]


// signin = (username,password) => {
//             for(let i = 0; i < database.length; i++)
//             {
//                 if(database[i].username === username && database[i].password === password){
//                    console.log(newsfeed);
//                 }
                
//             }
//             return false;
// }

// valid = (username,password) => {
//     if(signin(username,password)){
//         console.log(newsfeed);
//     }else{
//         alert("not valid");
//     }
// }

// let usernameprompt = prompt("enter usernmae");
// let passwordprompt = prompt("enter password");

// valid(usernameprompt,passwordprompt);

// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("mouseover" , function(){
//     console.log("click  counting")
// })
//  var button = document.getElementById('click')[0];
 

// let button= document.getElementById("enter");
// let input= document.getElementById("userinput");
// let ul = document.querySelector("ul");

// function inputlength(){
//     return input.value.length;
// }

// function createlistelement()
// {
//     let li = document.createElement("li");
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li);
//     input.value = "";
// }

// function addlistafterclick(){
    
//     if(input.value.length > 0){
//         createlistelement();
//     }
// }

// function addistafterkeypress(event){
//     if(input.value.length > 0 && event.keycode === 13){
//         createElement();
//     }

// }

// button.addEventListener("click" , addlistafterclick);


// input.addEventListener("keypress" , addistafterkeypress);  


// var css = document.querySelector("h3");
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");
// var body = document.getElementById("gradient");

// function setgradient() {
//     body.style.background = 
//     "linear-gradient(to right,"
//      + color1.Value 
//      + ", " 
//      + color2.Value 
//      +")";
// }

// color1.addEventListener("input",  setgradient);

// color2.addEventListener("input", setgradient);

// var fun = 5;

// function fun1{
//     var fun = "viral";
//     console.log(1,fun);
// }


// function fun2{
//     var fun = "romit";
//     console.log(2,fun);
// }


// function fun3{
//     var fun = "hdhjbs";
//     console.log(3,fun);
// }

// console.log(fun);


// ternary operator

// condition ? expr1 : expr2;

// username = (viral) => {
//     return viral;
// }

// var a = username(true) ? "valid user name" : "invalid username";

// switch case  statement
// username = (value) =>  {
//     let valuea;
//     switch(value){
//         case "right":
//             valuea = "right direction"
//             break;
//         case "left":
//             valuea = "left direction"
//             break;
//         case "back":
//         valuea = "back direction"
//         break;

//         default: "not yet";
//     }
    
// };
// const a = [2,3,6,8,1];
// const b = [];

// const c = a.forEach((num) => {
//     b.push(num * 10);
// });
// // document.getElementById("chandu").innerHTML =  b;

// const a = [2,15,54,9];
// // const b = [];

// const c =  a.map((num) => {
//   return num * 10;   
// });
// console.log('map', c);

// const d = [2,3.,4];

// const e = d.map((num) =>{
//     return num * 10;
     
// })

// console.log(e);

// const f = e.filter(num =>{
//     return num <= 35;
// })

// console.log(f);


// const a = [1,2,3,4];

// const b = a.map(num => num * 10);
// console.log('MAP', b);

// const c = b.filter(num => num > 20);
// console.log("filter" , c);

// const d = a.reduce((f,num) => {
//     return f + num;
// }, 10    )
// console.log("reduce" , d);

// let a = {username : "viral", password: "123"}
// let b = a;

// b.password = "234";

// console.log(a);
// console.log(b);

// let c = 5;
// let d =  c;

// d++;

// console.log(c);
// console.log(d);

// advance looping sintex
// let a = [['a',1],['b',2],['c',3]]

// for (let i = 0; i<a.length; i++){
//     console.log(a[i]);
// }

// a.forEach(item => {
//     console.log(item)
// })

// let a = {
//     'name':'hbhbajdd',
//     'age': 12,
//     'afd':function(){
//         let dsff = 26;
//     }
// }

// for ([key,value] of a){
//     // debugger
//     console.log(key);
// }

// for ([key,value] of a){
//     // debugger
//     console.log(value);
// }
// for ([key,value] of a){
//     // debugger
//     console.log(key = value);
// }

// for(item in a){
//     // debugger
//     console.log(item);   
// }

// const a = "654642515116";
// const b  =  a.split("").sort().join("");
// console.log(b);

1
// const a = [[1,2],[3,4],[5,6]].reduce(
//     (a,b) => {
//         debugger;
//         return a.concat(b);
//     }, []
// );
// console.log(a);

// const a = () => {
//     const b = () => {
//         console.log('4');
//     };
//     b();
// };
// setTimeout (() => {
//     console.log('2')
// } , 2000

// );
// console.log('3');
// console.log('1');

// a = (b) => {
//     let c;
//     switch(b) {

//         case "viral":
//         c = "hii my name is viral";
//         break;
//         case "viral":
//         c = "hii my name is viral";
//         break;case "viral":
//         c = "hii my name is viral";
//         break;
//         default:
//             c= "enter valid name"
//             break;
//     }
// return c;

// }


    