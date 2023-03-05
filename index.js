var a = 5;
console.log(a);
var names = [];
names.push("Akash", "Rutuja", "Priya", "Ashish", "Ritesh");
console.log(names);
function sum(a, b) {
    return a + b;
}
var result = sum(3, 9);
console.log(result);
// Tuples - A tuple is a typed array with a pre-defined length and types for each index.
// Tuples are great because they allow each element in the array to be a known type of value.
var address;
address = [111, "Badlapur", true, [{ "Name": "Akash", "City": "Badlapur" }, { "id": 1, "Name": "Rutuja", "City": "Kandivali" },]];
function add(a, b) {
    if (a === void 0) { a = '3'; }
    return b ? a + b : a;
}
console.log(add());
var p1; // Union
p1 = {
    name: "Akash",
    city: "CSMT",
    rollNo: 100
};
var p2; // Intersection
p2 = {
    name: "Rutuja",
    city: "Kolhapur",
    id: 101,
    rollNo: 101
};
var c;
c = 1;
c = "one";
var n = []; // Never array
// n.push("Hello");
console.log(n);
var Emp = /** @class */ (function () {
    function Emp(fname, lname, id) {
        this.fname = fname;
        this.lname = lname;
        this.id = id;
    }
    Emp.prototype.getFullName = function () {
        console.log("".concat(this.fname, " ").concat(this.lname, " and Id is : ").concat(this.id));
    };
    return Emp;
}());
var P1 = new Emp("Akash", "Tayde", 1);
var P2 = new Emp("Ashish", "Patil", 2);
console.log(P2.getFullName());
var CarX = /** @class */ (function () {
    function CarX(brand) {
        this.brand = brand;
    }
    CarX.prototype.getCar = function () {
        console.log(this.brand);
    };
    return CarX;
}());
var Car1 = new CarX("Audi R8");
Car1.getCar();
// Generic
function abc(a, b) {
    return [a, b];
}
abc("a", "r");
console.log(abc(1, 2));
function arr(user) {
    return user.id;
}
