"use strict";
let age = 23;
let username = 'Edilson';
let isPublished = true;
//WE can change the value to other type
let x = 'Hello';
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'then'];
//Tuple
let person = [1, 'Edilson', false];
//Tuple array
let employee = [[1, 'Edilson'], [2, 'Luis']];
//Could be string or number
let pid = 'VM2022';
//Enum
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "Cima";
    Direction1["Down"] = "Baixo";
    Direction1["Left"] = "Esquerda";
    Direction1["Right"] = "Direita";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Right);
//Objects 
const user = {
    id: 4,
    name: 'Edilson'
};
const person2 = {
    id: 2,
    name: 'Luis'
};
//Type assertion
let cid = 'test';
//We use one of this ways below
let customerId = cid;
customerId = cid;
console.log(customerId);
//Functions
function sum(x, y) {
    return x + y;
}
console.log("SUM: ", sum(1, 14));
//Void as return type
function log(message) {
    console.log(message);
}
log('String');
const person3 = {
    id: 2,
    name: 'Luis'
};
person3.id = 3;
const minus = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.register();
    }
    get getName() {
        return this.name;
    }
    register() {
        console.log(`${this.name} is registered!`);
    }
}
const edilson = new Person(1, 'Edilson');
console.log(JSON.parse(JSON.stringify(edilson)));
console.log(edilson.getName);
//Extend a class
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const edilsonEmp = new Employee(200, 'Luis', 'Chief');
console.log(edilsonEmp);
//Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['brad', 'luis', 'edilson']);
numArray.push(1);
