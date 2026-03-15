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




























