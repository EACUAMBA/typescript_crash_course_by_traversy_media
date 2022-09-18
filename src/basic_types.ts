let age: number = 23;
let username: string = 'Edilson';
let isPublished: boolean = true;

//WE can change the value to other type
let x: any = 'Hello';

let ids: number[] = [1, 2, 3, 4, 5]
let arr: any[] = [1, true, 'then'];

//Tuple
let person: [number, string, boolean] = [1, 'Edilson', false];

//Tuple array
let employee: [number, string][] = [[1, 'Edilson'], [2, 'Luis']]

//Could be string or number
let pid: string | number = 'VM2022'

//Enum
enum Direction1 {
  Up = 'Cima',
  Down = 'Baixo',
  Left = 'Esquerda',
  Right = 'Direita'
}

console.log(Direction1.Right)

//Objects 
const user: {
  id: number,
  name: string
} = {
  id: 4,
  name: 'Edilson'
}

//We can define a object type
type User = {
  id: number,
  name: string
}

const person2: User = {
  id: 2,
  name: 'Luis'
}

//Type assertion
let cid: any = 'test';
//We use one of this ways below
let customerId = <number>cid;
customerId = cid as number

console.log(customerId);

//Functions
function sum(x: number, y: number): number {
  return x + y;
}

console.log("SUM: ", sum(1, 14));

//Void as return type
function log(message: string | number): void {
  console.log(message);
}
log('String');

// Interface
interface UserInterface {
  id: number,
  name: string,
  age?: number // now is optional
}

const person3: UserInterface = {
  id: 2,
  name: 'Luis'
}

person3.id = 3;

interface MathFunc {
  (x: number, y: number): number
}

const minus: MathFunc = (x, y): number => x - y;

// classes 
interface PersonInterface {
  id: number
  name: string
  register(): void
}

class Person implements PersonInterface {
  readonly id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    this.register();
  }

  public get getName(): string {
    return this.name;
  }

  register() {
    console.log(`${this.name} is registered!`)
  }
}

const edilson = new Person(1, 'Edilson');
console.log(JSON.parse(JSON.stringify(edilson)))
console.log(edilson.getName)

//Extend a class
class Employee extends Person {
  position: string

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const edilsonEmp = new Employee(200, 'Luis', 'Chief');
console.log(edilsonEmp);


//Generics
function getArray<T>(items: T[]) : T[]{
  return new Array().concat(items);
}


let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(['brad', 'luis', 'edilson']);

numArray.push(1);
