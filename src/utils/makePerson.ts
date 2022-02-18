export function makePerson(name: string, age: number) {
  return { name: name, age: age };
}

export function testMakePerson() {
  console.log(makePerson("Jane", 22), makePerson("homie", 5));
}

interface IPerson {
  name: string;
  age: number;
}

let good: IPerson = { name: "homie", age: 32 };

let personName = "j";
let personAge = 32;

// <type>객체
// 객체 as type

let numArray: number[] = [1, 2, 3];
let strarray: string[] = ["Hello", "World"];

// type IPerson = {name: string, age? : number}
