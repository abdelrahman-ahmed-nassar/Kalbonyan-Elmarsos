// numbers, strings, boolean


let age: number;

age = 2;

let username: string;

username = "ali";

let isMale : boolean;

isMale = true;

// arrays, object

let hobbies: string[];
hobbies = ["a", "2"];

let person : {
  name: string,
  age: number,
};

person = {
  name: "",
  age: 3
}

let personArr : {
  name: string,
  age: number,
}[];

personArr = [{name: "ali", age: 2}]


// type inference 

let course = "react"

// course = 2;



//  union types (more than type)

let union : string | number = "a";
union = 0;


// types alias 
type Person = {
  name: string,
  age: number,
}

let thePerson : Person;


// functions and types 

function add(a: number, b: number): number {
  return a + b;
}

function printOutput(value: any): void {
  console.log(value);
}

// generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);

// updatedArray[0].split("")

//------ to use props in functional cmp 

// const Todos: React.FC<{items: string[]}>= (props) => {
// }


//----------- using classes as types


//-------- work with roms 
//  (event: React.FormEvent)

//------- working with refs

// const todoTextInputRef = useRef<HTMLInputElement>(null);

//------- function type in ts 

// const NewTodo : React.FC<{onAddTodo: () => RETURNED_VALUE_TYPE}>= (props) => {
