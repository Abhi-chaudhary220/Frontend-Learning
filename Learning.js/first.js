// From now learning javascript//

console.log("hello world");

console.log("Wha's your name");
console.log("whatsup");
console.log("whats going on");
console.log("wow");


// Variables //

// Variables are containers for storing data values. In JavaScript, there are three ways to declare variables: var, let, and const.

Name= ("Abhishek Chaudhary");
Age= (20);
Complextion= ("Fair");
isright = true;
console.log(Name);
console.log(Age);


let ages= (86);
Name= ("Vicky");
complextion= ("Fair");
is_alive= ("true");
is_studying= ("true");
console.log(is_alive,is_studying);

const pi= 3.14;
const name= ("Abhishek Chaudhary");
const age= (20);

console.log(pi,name,age);



{
    let a= 5;
    b= 8;
    console.log(a-b);
}
{a= 6+1;
    console.log(a)
}

// Datatypes//
// In JavaScript, there are two types of data types: primitive and non-primitive. Primitive data types include string, number, boolean, null, undefined, and symbol. Non-primitive data types include objects and arrays.//


let price= 999;
ispass= true;
console.log(price , ispass);


const Student= {
    Name: "Abhishek Chaudhary",
    age: 20,
    isstudy : true,
    state : "Delhi",
    marks: "70%",
}
console.log(Student["Name"],age);
console.log(Student.marks)

Student ["age"] = Student ["age"] - 5;
console.log(Student["age"]);

Student["state"]= "Bihar";
console.log(Student["state"]);



// Practice question=1

let pen ={
    Name: "Butterflow blue ball-pen",
    ratings: 4.5,
    isdeal: true,
    price: 10,
    offer: 2,
}
console.log(pen.ratings);


// Practice question= //

let profile={
    username: "Abhishek chaudhary",
    Name:"Abhishek",
    followers:0,
    following:0,
    isverified: false,

}

console.log(profile["username"],profile["Name"],profile["following"]);
