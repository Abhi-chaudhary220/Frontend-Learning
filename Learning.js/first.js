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

