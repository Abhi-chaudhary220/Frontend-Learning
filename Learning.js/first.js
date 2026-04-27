// 

// VARIABLES :-





// var Name = "ABHISHEK";
// var Name = "VICKY";
// var Name = "DEEPU";
// console.log(Name);

// VAR VARIABLE ME VARIABLE NAME AND VALUE DONO HE UNLIMITED TIMES UPDATE KRI JA SKTI H JISSE CONFUSION HO SKTI H AND  VAR VARIABLE FUNCTION K ANDR HE EXECUTE HOTA H BUT OUTSIDE THE FUNCTION EXECUTE NHI HOTA H.


// let Age = 20;
// Age= 21;
// console.log(Age);
// let price = 899;
// console.log(typeof price);

// LET VARIABLE ME VARIABLE NAME CHANGE NHI KIA JA SKTA BUT VALUE UNLIMITED TIMES UPDATE KRI JA SKTI H.


// const price = 500;
//  price = 600; This will give an error because we cannot change variable name and value in const variable. so that's why we use const where there's rare chance of changing variable name amd value.
// console.log(price);


// VARIABLE NAMING RULES :- SIRF LETTERS,NUMBERS,UNDERSCROES,DOLLAR SIGN USE KIYE JA SKTE H.

// let My_name_1 = ("Abhiiii");
// console.log(My_name_1);

// const $price = 500;
// console.log ($price);


// FOR KNOWLEDGE PURPOSE - DEFAULT= CONST, IF THERE'S A CHANCE OF VALUE CHANGE THEN= LET, AVOID= VAR;

// IMPORTANT:- variable aand values changed in const only when there'e a object.

// const user = { Name: "Deepu", age: 20 };
// user.Name="Vicky";
// console.log(Object.values(user));
// console.log(typeof user);


// NOW PRACTICING VARIABLES AND DATATYPES FROM GPT LEARNINGS:-


// const user= {
//     Name: "Abhishek",
//     Age: 20,
//     is_Student: true
// };
// console.log(user["is_Student"]);


// There is two options for accessing keys and values from an object:- DOT NOTATION (Object.key) , BRACKET NOTATION (Object["key"]) .



// DATATYPES:-





// SYMBOL :-


// const id= Symbol("my_id");
// const id_2= Symbol("my_id");
// const user = {
//     Name: "Abhishek",
//     Age: 20,};

//     user[id]=123;
//     user[id_2]=456;

//     console.log(user[id]);
//     console.log(user[id_2]);
        



// const color= Symbol("color");
// const user={Name: "Orange"};
// user[color]="Orange";

// const color_2= Symbol("color");
// const user_2={Name: "Yellow"};
// user_2[color_2]="Yellow";

// console.log(user[color]);
// console.log(user_2[color_2]);




// const id= Symbol("id");
// const obj = {
//     Name: "Abhishek",
//     Age: 20,
//     [id]: 127
//     };

// const symbol= Object.getOwnPropertySymbols(obj);
// console.log(obj[symbol[0]]);



// BIGINT:-


// const max= Number.MAX_SAFE_INTEGER;
// console.log(max);

// const adding_values_bigint= 9007199254740991n + 5n;
// console.log(adding_values_bigint);




// STRING:-


// let Name = "Abhishek";
// console.log(Name);
// console.log(Name.length);
// console.log(typeof Name);

// const my_first_phn = "poco x3";
// console.log(my_first_phn);
// console.log(typeof my_first_phn);



// NUMBER:-

// const price =999;
// console.log(price);
// console.log(typeof price);

// const price_2 = 849;
// console.log(price_2);
// console.log(typeof price_2);



// BOOLEAN:-

// const is_student_pass= true;
// console.log(is_student_pass);
// console.log(typeof is_student_pass);

// const is_student_fail= false;
// console.log(is_student_fail);
// console.log(typeof is_student_fail);



// null and undefined:-

// let x= null;
// console.log(x);
// console.log(typeof x);

// let y;
// console.log(y);
// console.log(typeof y);


// ADVANCE:-

// OBJECTS:-

// const student = {
//     Name: "Vicky",
//     age: 100,
//     is_learning_js: true,
// };
// console.log(student);
// console.log(student["Name"]);





// Operators and conditional statements:-


// Arithmetic operators:-

// let a = 20;
// let b = 25;
// console.log(a + b)

// let a = 20;
// let b = 23;
// console.log(a-b);

// let a = 69;
// let b = 93;
// console.log (a * b);

// let a = 49;
// let b = 94;
// console.log (a / b);

// let a = 96;
// let b = 78;
// console.log(a % b);

// let a = 99;
// let b = 88;
// console.log(a ** b);


// Assignment operators:-

// let a = 20;
// console.log(a);

// let a = 25;
// a += 10;
// console.log(a);

// let b = 49;
// b -= 49.99;
// console.log(b);

// let c = 87;
// c *= 22;
// console.log(c);

// let d = 56;
// d /= 78;
// console.log (d);

// let e = 86;
// e %= 77;
// console.log (e);

// let f = 66;
// f **= 44;
// console.log(f);


// Comparison operators:-

// let a = 10;
// let b = 45;
// console.log("10 == 45", a ==b);

// or

// let a = 10;
// let b = "10";
// console.log(a == b);

// let c = 477;
// let d = 99;
// console.log(c === d);

// or

// let a = 10;
// let b = "10";
// console.log(a == b); yha true isliye mila kyuki js string ko number me change krta h aur usme bhi sirf ek string ko jaise whole number joki string me h.

// let c = 888;
// let b = 333;
// console.log(c != b);

// let c = 5;
// let d = "3 + 2";
// console.log (c != d); yha true isliye mila kyuki js string ko number me change krta h pr yha number to h pr whole k form me nhi expression k form me h isliye ye true hua k not equal h if yha pr whole sting inside number hota to false show hota.

// let e = 48473808;
// let f = 79579375;
// console.log (e !== f);

// let a = 34;
// let b = 78;
// console.log (a > b);


// let c = 44;
// let d = 67;
// console.log(c < d);


// let marks_1 = 57;
// let marks_2 = 78;
// console.log(marks_1 >= marks_2);

// let size_a = "45mm";
// let size_b = "55mm";
// console.log(size_a <= size_b);

// Logic operators:-

// let a = 56;
// let b = 78;
// console.log(a<b && b>a); Mathematical check krna chahta hu to & isse check krunga to numeric expression me output aaega] and if logically check krna chahta hu to && isse true/false me output aaega.

// let a = 66;
// let b = 78;
// console.log(a>b || a==b);

// let a = 78;
// let b = 98;
// console.log (!(a>b));


// Unary operators:-

// Increment:-

// let x = 30;
// x++;
// console.log(x);

// Decrement:-

// let a = 70;
// a--;
// console.log(a);


// PRE:-

// let a = 80;
// let result = ++a;
// console.log(result);

// POST:-

// let s = 85;
// let result = s++;
// console.log(result);
// console.log(s);


// Ternary operator:-


// let marks = "95%";
// let result = marks >="33%"? "Pass" : "Fail";
// console.log(result);

// let age = 30;
// let result = age >= 28? "You can enter in the class" : "you can't enter in the class";
// console.log(result);


// Conditional statements:-

// if statement:-


// let color = "orange";
// if (color === "red") {
//     console.log("The color is red");
// };
// if (color === "orange") {
//     console.log("The color is orange");
// };


// if-else statement:-


// let mood = "wonderful";
// if ( mood === "bad") {
//     console.log("Come and  sit near me and talk to me");
// }
// else {
//     console.log("everything is fine and let's go for a walk");
// };


// else-if statements:-

// let marks = "85%";
// if (marks <= "45%") {
//     console.log("You are fail, try again");
// }
// else if (marks >= "50%") {
//     console.log("You are pass, keep it up more:");
// };



// SWITCH STATEMENT:-


// let fruit = "Apple";

// switch (fruit) {
//     case "Mango" : console.log(" Most favourite fruit")
//     break;

//     case "Apple" : console.log("My favourite first")
//     break;

//     case "Banana" : console.log("Best fir gym pre-workout")
//     break;

//     default : console.log("I dont't like fruits")
// };


// let marks = "68%";

// switch (marks)
// {
//     case marks <= "54%" : 
//     console.log("You are fail")
//     break;

//     case marks = "33%" :
//         console.log("You need to work hard")
//         break;

//     case marks ="68%" :
//         console.log("You are pass")
//         break;

//         default :
//         console.log("No one is pass")

// };





// Truthy $ Falsy values :-


// Falsy values = false, "", null, undefined, nan, 0.
// Truthy values = "hello", "0", 1, [], true, {}.

// const str = ("");

// if (str) {
//     console.log("str is true");
// }
// else {
//     console.log("str is false");
// };


// if (null){
//     console.log("null is true value");
// }
// else {
//     console.log("null is false value");
// };



// Nullish coalescing operator :-



// let integer = 0;
// let result = integer ?? 50;
// console.log(result);


// let false_str = null;
// let output = false_str ?? "Abhishek";
// console.log(output);







// LOOPS:-

// for (let i=1;i<=10;i++){
// console.log("Hello Abhishek")};

// console.log('loop finish');

// for (let a = 5;a<=15;a++){
//     console.log("HELLO")
// };
// console.log("Loop has ended");

// for (let num=0;num<=2;num++){
//     console.log("HELLO")
// };
// console.log("Loop stops");


// By using loop we can calculate sums & substracts:-

// let number = 5;
// for (let count=0;count<=10;count++){
//     number = number + count;
// }
// console.log(number);
// console.log("Loop has ended");


// By using loop we can do subtracts of numbers too:-

// let integer = 3;
// for (let cal=1;cal<=5;cal++){
//     integer = integer + cal;
// }
// console.log(integer);
// console.log("Subtract using loop is successful");





// PRACTICING OLD TOPICS :-



// const Name = "Abhishek";
// console.log(Name);

// const id = 123;
// console.log(id);

// const price$ = 499;
// console.log(price$);

// let a = 45;
// let b = 67;
// console.log(a === b, typeof a);

// let a = 55;
// let b = 67;
// console.log(a != b);

// let c = 7887;
// let d = 8686;
// console.log (a > b);

// let u = 999;
// let i = 787;
// console.log(!(i>u));




// Again learning loops and strings :-



// for (let i=1; i <= 6; i++){
//     console.log(i)
// };
// console.log(i);
// console.log(i);


// for (let count=0;count <=15;count++){
//     console.log("learning js 'loops and strings' is a very fun challenge")
// };



// optimized code :-

// let a = 66;
// let b = 55;
// let result = (!(a==b));
// const repeat = 6;
// for (let i=0;i<6;i++){
//     console.log(result)
// };

// general code :-

// let a = 66;
// let b = 55;
// let result = (!(a==b));
// for (let i=0;i<6;i++){
//     console.log(result)
// };


// const obj = {
//     Name : "Vicky",
//     Age : 20
// };
// console.log(obj);

// let a = 6;
// let b = 7;
// result = a ** b;
// console.log(result);

// let price = $499;
// console.log ($price);

// let add_1 = "hello";
// let add_2 = "world";
// console.log (add_1 , typeof add_2);

// let logic = 6 == 7;
// console.log(logic);

// const fix = 500;
// console.log(fix);

// let rupees = 99.99;
// console.log(rupees);

// let fruit_1 = "orange";
// let fruit_2 = "banana";
// let result = fruit_1 === fruit_2;
// console.log(result);

// console.log(hello);

// console.log(js);

// console.log("hello world");


// console.log("js is fun to learn ");

// console.log("js is the best language to learn in 2026");

// console.log("from today i will learn different types of loops");

// console.log("hello js");

// console.log("Never use Infinite Loops in js");

// console.log("just few hours for completing loops and strings topic");

// console.log("today learning is done bye ");

// console.log("new day start for learning js");

// let h = 1;
// while (h <= 5) {
//     console.log("hello this is while loop");h++
// }


// let n = 5;
// while(n <=15) {
//     console.log("print this statement 11 times");n++
    
// }

// let u = 3;
// do{
//     console.log("this code will execute atleast once");u++
// }
// while (u<=5);

// let e = 101;
// do{
//     console.log(55 == 68);e++
// }
// while (e<=115);

// console.log("today learning is done bye good night");



// LET'S START FOR-OF AND FOR-IN LOOPS:-


// let u = "Orange";
// for (let value of u){
//     console.log(value);
// };

// let name = "deepu";
// for(let n of name){
//     console.log(n);
// };


// let arr = [1, 2, 3, 4, 5];
// for (let value of arr){
//     console.log(value);
// };


// for-in loop:-


// let table = {
//     Name : "Abhishek",
//     Age : 20,
//     is_learning_js : true
// };
// for(let key in table){
//     console.log(key, table[key]);
// };


// Template literals:-



// let name = "mango";
// let price = 499;
// console.log(`the price of name is ${price}`);


// let car = "tata";
// let model = "harrier";
// let price = 2000000;
// console.log(`the price of ${car} ${model} is ${price}`);


// let str = "hello i m Abhishek Chaudhary";
// console.log(str);


// const name = "orange";
// console.log("typeof name is =", typeof name, "& length of name is =", name.length);

// console.log("string length topic is done");

// let str = "hello world";
// str = str.replace(str[0], "M");
// console.log(str);

// let address = "pratap vihar";
// address = address.toUpperCase();
// console.log(address);


// let Name = "onion";
// let result = Name.includes("i");
// console.log(result);

// let str = "who are you";
// let result = str.split(" ");
// console.log(result);

// let name = "Abhishek";
// let result = name.includes("s");
// console.log(result);

// let str = "hello, how are you, i m fine";
// let result = str.split(",");
// console.log(result);

// let str = "HOW ARE YOU AND HOW IS UR Family";
// console.log(str.toLowerCase());

// let str_1 = "hello";
// let str_2 = "how are you and what's up";
// let result = str_1.concat(",",str_2);
// console.log(result);

// let str_1 = "bye";
// let str_2 = "see you never";
// let result = str_1+" "+str_2;
// console.log(result);


// Array:-

// let arr = ["hello", "how", 1, 2, true,];
// console.log(arr);

// const array = [1,2,3,4,5,6,7];
// for (let value of array){
//     console.log(value);
//     };

// let fruits = ["mango", "banana", "orange", "guava"];
// console.log(fruits.length);

// let price = [499, 599, 699, 799, 899];
// console.log(price.length);

// let num = [1,2,3,4,5,9,5,4,3,2];
// for(let value of num){
//     console.log(value);
// };
// console.log(num.length);


// let cartoons = ["oggy", "chhotabheem", "doraemon","ben10"];
// for(i=0; i<cartoons.length; i++){
//     console.log(cartoons[i]);
// };

// let array = [10, 20, 30, 40, 50, 60];
// array[2] = 35;
// console.log(array);


// let arr_1 = [1,2,3,4,5,6,7,8,9,];
// arr_1.push(10);
// console.log(arr_1);

// let arr_2 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// let new_arr = arr_2.slice(1,5);
// console.log(new_arr);


// const arr_2 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// const result = arr_2.splice(2, 3);  
// console.log(result);
// console.log(arr_2);

// Practicing:-

// console.log("hello arrays");

// console.log("arrays methods");

// console.log("using loops to print array values");

// Practicing:-

// let arr = [4,5,6,7,8,9,0];
// for(let value of arr){
//     console.log(value);
// };

// const time = [10,56];
// for(let value of time){
//     console.log(value);
// };

// let name = "kajaria tiles";
// for (let result of name){
//     console.log(result);
// };


// let cities = ["hyderabad", "gurugram", "delhi", "mumbai", "chennai"];
// for (let city of cities){
//     console.log(city.toUpperCase());
// };

// let data = ["NAME", "AGE", "STATE", "COUNTRY"];
// for(let output of data){
//     console.log(output.toLowerCase());
// };


// let arr = [5,6,7,2,9];
// arr.sort();
// console.log(arr);



//  QUESTION:-


// let arr = [85, 97, 44, 37, 76, 60];

// let sum = 0;
// for (let value of arr){
//     sum += value;
    
// };

// let avg = sum / arr.length;
// console.log(avg);


// QUESTION:-


// let elements = [250, 645, 300, 900, 50];
// let offer = 0;
// let result = 0;
// for(let items of elements){
//     offer = items / 10;
//     result = items -offer;
//     console.log(result);

// };

// Practice:-

// let arr = [1,2,3,4,5,6,7,8,9];
// arr.push(10);
// console.log(arr);

// let arr = [5,6,7,8,9,10,1];
// arr.pop(1);
// console.log(arr);

// let arr = ["1","2","3","4"];
// console.log(arr);
// console.log(arr.toString());


// Practice:-

// let arr = [1,2,3,4,5,6,];
// let arr_2 = [7,8,9,10];
// let arr_3 = [11,12,13,14,15];
// result = arr.concat(arr_2, arr_3);
// console.log(result);

// let arr = ["hello", 12, "chlo", 76];
// arr.unshift("HI");
// console.log(arr);

// let array = [`hello`, `how`, `are`, `you`, `miss`];
// array.shift(`hello`);
// console.log(array);


// Practicing:-

// let arr = [1,2,3,4,5,6];
// let res = arr.slice(1,3);
// console.log(res);

// let arr = ["hello", "how", "are", "you"];
// let result = arr.splice(1, 2, "hifi");
// console.log(arr);

// QUESTION:-

// First question:- 

// let company_name = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// let result = company_name.shift();
// console.log(company_name);

// Second question:-

// let company_name = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// let result = company_name.splice(2,1,"OLA");
// console.log(company_name);

// let company_name = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// let res = company_name.push("Amazon");
// console.log(company_name);

// console.log("today learning is done"); 


// Starting array - Map :-

// let arr = [10,20,5,30,4,50,2,70,8,90,3];
// let result = arr.map((a) => {
//     console.log(a*3);
//     });

// Starting array - Filter :-

// let arr2 = [1,20,3,30,4,40,5,50];
// let result2 = arr2.filter((value) =>{
//     return value<10
//     });
// console.log(result2);

// Starting reduce :-

// let arr3 = [1, 3, 4, 5, 6, 7];
// let result3 = arr3.reduce((value1, value2) => {
//     return value1 + value2 ;
// });
// console.log(result3);


// Making fun with array :-


// let arr1 = [1,2,3,4,5];
// console.log(arr1);

// let arr2 = [6,7,8,9,10];
// console.log(arr2);

// let arr3 = [11, 12, 13, 14, 15];
// console.log(arr3);

// let arr4 = [16, 17, 18, 19, 20];
// console.log(arr4);

// Todays practice is done tomorrow ill start js function and methods :-

// Here i go for new practice :-

// console.log(alert);

// console.log("Hello World");

// console.log("there is only few topics are left in js");

// console.log("after js i ll start react");

// console.log("after react i ll start tailwind, bootsrap, typescript");

// Today practice is done and from tomorrow i ll start js functions topic:-

// console.log("hello");

// console.log("js functions");

// console.log("js arrays completed");

// console.log("js loops completed");

// console.log("js operators and conditional statements topic completed");

// console.log("js datatypes and variables topic completed");

// console.log("js all previous topics are completed");

// today session is completed.

// lets start function topic in js.

// function num(a,b){
//     console.log(a+b);
// };
// num(5,95);

// function Num(a,b){
//     console.log(a-b);
// };
// Num(7,5);

// function division(a,b){
//     result = (a/b);
//     return result;
// };
// division(8,2);
// console.log(result);


// const num = (x,y)=>{
// console.log(x+y);
// };
// num(5,5);

// let string = (a, b) => {
//     sum = a + " "+ b;
//     return sum;
// };
// string("hello","bye");
// console.log(sum);


// let glad = (y,j)=>{
//     sub = (y-j);
//     return sub;
    
// };
// glad(100,99.99);
// console.log(sub);




// 1st option for writing this code;


// let count_vowels = (strings)=>{
//     let count = 0;
//     for(let value of strings){
//     if (value === "a" || value ==="e" || value === "i" || value === "o" || value ==="u") {count++;}}
//     console.log(count);
// }
// count_vowels("hello i m Abhishek Chaudhary");


// 2nd option for writing this same code;


// let count_vowel = (strings)=>{
//     let count = 0;
//     for(let value of strings){
//         if(value === "a"  ||
//             value === "e" ||
//             value === "i" ||
//             value === "o" ||
//             value === "u")
//             {count++;}
//     }
//     return count;
// }
// console.log(count_vowel("Abhishek Chaudhary"));

// Now i will start function methods :-

// Hey there i m just practicing some builtin functions:-

// console.log(function);

// console.log("Hello world");

// console.log("str");

// console.log("array");

// console.log("time to go");

// console.log("bye");

// function str(h1,h2){
//     result = h1 + h2;
//     console.log(h1+" "+h2);
//     return result;
// }
// str("hello","world");

// function good(a,b){
//     console.log(a+b);
// };
// good(5,10);

// const price = (a,b)=>{
//     result = (a-b);
//     console.log(result);
//     return result;

// };

// price(99.99,95.99);

// let hours_deduction = (h1,h2)=>{
//     result = h1-h2;
//     console.log(result);
//     return result;
// };

// hours_deduction(10,6);


// let arr = [1,2,3,4,5,6,7,8];
// arr.forEach(function my(val){
//     console.log(val);
// });

// const arr = [10,11,12,13,14,15,16];
// arr.forEach((val)=>{
//     console.log(val);
//     return val;

// });



// Practice Question:-


// console.log("hello");

// console.log("world");

// console.log("whats'up");

// console.log("are u ok");

// console.log("quadcore");

// console.log("Bye");

// console.log;

// console.log;

// console.log;

// console.log;

// console.log;

// console.log;

// console.log;

// console.log;

// console.log;

// console.log;

// console.log;

// console.log;



// let num = [1,2,3,4,5,6];
// let arr = num.map((val)=>{
// let result = val+1;
// return result;
// });
// console.log(arr);

// yha console.log ko bahr se access isliye kr parha hu kyuki block joki global h usme map function ko maine ek variable me store kra dia h jisse usko main call kr skta hu block k bahr se bhi.


// let num = [1,2,3,4,5,6];
// num.map((val)=>{
// let result = val+1;
// console.log(result);
// return result;
// });

// yha bahr se console,log access krne me error isliye arha h because maine map function ko kisi variable me store nhi kraya isliye usko main bahr se call nhi kr skta.



// Array filter:- 

// Method-1:-

// Description:- Iss method me maine filter vale method ko kisi variable me store nhi kia h isliye mujhe output k liye console.log ko blockscope k andr he likhna hoga kyuki agr blockscope se bahr likhunga to js error return krdega ki ______ is not defined.

// let arr1 = [2,3,4,5,6,7];
// arr1.filter((val)=>{
//     if(val>5){
//         console.log(val);
//     }
//     return val>5;
// });

// Method-2:-

// Description:- Iss method me maine console.log ko bahr isliye likha ya pass kia because blockscope me filter method ko ek new variable me store krvaya h jisse uss variable ko main globally access kr skta hu and koi error bhi nhi aaega.

// let arr1 = [2,3,4,5,6,7];
// let new_array = arr1.filter((val)=>{
//     return val>5;
// });
// console.log(new_array);


// Reduce:-

// Definition - Reduce method ka mtlb hota hai li ek array ko compress krke ya daily basisk tone me bole to ek array ko nichor kr ek single value me convert krna or ye same to same fruit juice jaisa he h - bohot sare fruits ko nichorkr ek juice bnana.

// let arr1 = [3,4,5,6,7,8,9];
// let newArr = arr1.reduce((value, presentVal)=>{
//     return value + presentVal 
// },0);
// console.log(`final value is = ${newArr}`);


// just some consoles for typing practice:-

// console.log;

// console.log;

// console.log;

// console.log;



Starting DOM:- DOM stands for Document Object Model.

// window.console.log(window.document.body.childNodes[1,2]);














































