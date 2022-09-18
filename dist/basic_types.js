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
