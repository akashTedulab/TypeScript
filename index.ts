let a:number = 5;
console.log(a);


const names : string[] = []
names.push("Akash", "Rutuja", "Priya", "Ashish", "Ritesh");
console.log(names);


function sum(a: number, b: number) : number {
    return a + b;
}
let result = sum(3,9);
console.log(result);


// Tuples - A tuple is a typed array with a pre-defined length and types for each index.
// Tuples are great because they allow each element in the array to be a known type of value.

let address : [number, string, boolean, [{id?:number, Name:String, City:String},{id:number, Name:String, City:String}]];
address = [111, "Badlapur", true, [ {"Name":"Akash","City": "Badlapur"}, {"id":1, "Name":"Rutuja", "City": "Kandivali"}, ]];


function add(a:string='3', b?:string){
    return b ? a+b : a;
}
console.log(add())


interface Person {
    name: string;
    city: string;
    id: number;
}

interface Student {
    name: string;
    city: string;
    rollNo: number;
}

let p1 : Person | Student   // Union

p1 = {
    name: "Akash",
    city: "CSMT",
    rollNo: 100,
    // id: 100,
}


let p2 : Person & Student   // Intersection
p2 = {
    name: "Rutuja",
    city: "Kolhapur",
    id: 101,
    rollNo: 101
}


// Type Alias
type Count = string | number
let c : Count;
c = 1;
c = "one";
// C = false; 


type X = string & number        // Never
let n:[] = [];                  // Never array
// n.push("Hello");
console.log(n);


class Emp {
    fname : string;
    lname : string;
    id : number;

    constructor(fname : string, lname : string, id : number){
        this.fname = fname;
        this.lname = lname;
        this.id = id;
    }

    getFullName(){
        console.log(`${this.fname} ${this.lname} and Id is : ${this.id}`);
    }
}

let P1 = new Emp("Akash", "Tayde", 1);
let P2 = new Emp("Ashish", "Patil", 2);

console.log(P2.getFullName());


class CarX {
    constructor (public brand:string){}
    getCar(){
        console.log(this.brand)
    }
}

let Car1 = new CarX ("Audi R8");
Car1.getCar();



// Generic

function abc<Type>(a: Type, b : Type) : Type[]{
    return [a, b]
}
abc<string>("a", "r");
console.log(abc<number>(1,2));


function arr<T extends {id:number}>(user:T){
    return user.id;
}