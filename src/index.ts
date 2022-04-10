//Basic types
const id: number = 2
const company: string = 'Youtube'
const isTrue: boolean = true
let x: any = 'Hello'

const ids: number[] = [1, 2, 3, 4, 5]; //Array of numbers
const arr: any[] = [1, true, 'Hello']; //Array of any (any types)

//Tuple
let person: [number, string, boolean] = [1, 'Name', true];

//Tuple Array
let employee: [number, string][]
employee = [
  [1, 'Brad'],
  [2, 'John'],
  [3, 'Mary'],
]

//Union
let input: string | number = 25;

function checkInput(input: string | number) {
  if (typeof input === 'string') {
    return
  }
  if (typeof input === 'number') {
    return
  }
  return
}

//Enum
enum Directions {
  Up,    //0
  Down,  //1
  Left,  //2
  Right, //3
}
console.log(Directions.Left) //2

//**************** Objects *****************//
//example without using type
const user: {
  id: number,
  name: string
} = {
  id: 1,
  name: 'John'
}

//example using type
type User = {
  id: number,
  name: string
}

const user2: User = {
  id: 2,
  name: 'Tom'
}
//****************************************/

//Type Assertion
let cid: any = 10; //cid is type any, can recieve any type

let customerID1 = <number>cid //Just recieve number
let customerID2 = cid as number //Just recieve number


//Functions return type
function sumNum(x: number, y: number): number {
  return x + y
}

//Void function 
function log(message: string): void {
  console.log(message)
}

//Interfaces 
interface UserInterface {
  id: number
  name: string
  age?: number //Age is optional '?'
}

const user1: UserInterface = {
  id: 1,
  name: 'Mary'
}

//Interface to function
interface MathFunc {
  (x: number, y: number): number
}
const add: MathFunc = (x: number, y: number): number => x + y;

//Class
class Person {
  id: number //Props are public by default, you can use private and protected
  name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }

  register() {
    return `${this.name} is now registered`
  }

}
const user5 = new Person(5, 'Tom')

//Generics

