/*
const stu1={
    name:"dhanesh",
    age:21,
    marks:95,
    getMarks:function(){
        return this.marks;
    },
};

const stu2={
    name:"champ",
    age:16,
    marks:75,
    getMarks:function(){
        return this.marks;
    },
};

const stu3={
    name:"dev",
    age:25,
    marks:90,
    getMarks:function(){
        return this.marks;
    },
};
*/

//chize bar bar repeat nahi karni jese yaha function bar bar likhna pad raha so we make blue print clases bana kar inherit kar lenge 

/*
let arr1=[1,2,3];
let arr2=[1,2,3];
arr1.sayHello=()=>{
    console.log("hello!, i am arr");
};
arr2.sayHello=()=>{
    console.log("hello!, i am arr");
};
*/


//in console
//arr1.sayHello===arr2sayHello    //return false because both are stored at different location 
//"abc".toUpperCase==="xyz".toUpperCase   //return true because toUpperCase is prototype so memory bach gayi object ki copy nahi bani

/*
//factory function

function PersonMaker(name,age){
    const person={
        name:name,
        age:age,
        talk(){
            console.log(`Hi, my name is ${this.name}`);
        },
    };
    return person;

}
let p1=new Person("adam",25);  // copy ban jayegi talk() ki toh factory fn inefficient hai
let p2=new Person("eve",24);  //  copy ban jayegi talk() ki toh factory fn inefficient hai
*/

//Constructor doesn,t return anything &start with capital letter

//new operator

/*
function Person(name,age){
    this.name=name;
    this.age=age;
}

Person.prototype.talk=function(){
    console.log(`Hi , my name is ${this.name}`);
};

let p1=new Person("adam",25);
let p2=new Person("eve",24);
*/

/*
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    talk(){
        console.log(`Hi , my name is ${this.name}`);
    }
}
let p1=new Person("adam",25);
let p2=new Person("eve",24);
*/


class Person{
    constructor(name,age){
        console.log("Person constructor called");
        this.name=name;
        this.age=age;
    }

    talk(){
        console.log(`Hi , my name is ${this.name}`);
    }
}
class Student extends Person{
    constructor(name,age,marks){
        console.log("Student constructor called");
        super(name,age);  //super is used to call parent class constructor
        this.marks=marks;
    }
}
let stu1 = new Student("dhanesh",21,95);

class Teacher extends Person{
    constructor(name,age,subject){
        console.log("Teacher constructor called");
        super(name,age);//super is used to call parent class constructor
        this.subject=subject;
    }
}





























