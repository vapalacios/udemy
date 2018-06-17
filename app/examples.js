let a = 'Hello';
const b = 'letter';
var prueba = (...some)=> 'Hello '.concat(...some);
console.log(a);

//using spread operator
let otherArray = [6, 8, 9, 10];

//destructuring and rest operator

let [first, ...rest] = otherArray;

console.log('scope', array);

console.log('destructuring', first, rest);

let array = [1, 2, 3, 5, ...otherArray];

console.log('rest operator', prueba(array));

{
  //work with scope, using a curly braces we can create a new scope
  //for protecting variables or whatever you want
  let a = 'goodbye';
  console.log('a inside scope', a);
}

console.log(`I want to prove another form to say ${array.reduce((sum, cur)=>{ return sum + cur},0)}`);

let obj = {
  love: 'karla',
  live: 'bebe',
  waiting: true
}

let {love, live} = obj;

console.log('detructuring using objects', love, live);

import { babyName, printNames } from './exportImport';

console.log('export successfuly', babyName);

printNames();

//working with objects

import Entity from './entity'

class Hobbit extends Entity {
  constructor(name, height) {
    super(name, height);
  }

  greet(){
    console.log(`Another message from new class, object name ${this.name}`);
  }
}

let norma = new Hobbit('Maria', 3);

norma.greet();
