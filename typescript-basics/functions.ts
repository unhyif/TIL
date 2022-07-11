// Call signature
type Add = (a: number, b: number) => number;
const add: Add = (a, b) => a + b;

// Over loading: function that has multiple call signatures
type Multiply = {
  (a: number, b: number): number;
  (a: number, b: string): number;
};

const multiply: Multiply = (a, b) => {
  if (typeof b === "string") return a;
  return a * b;
};

type Divide = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const divide: Divide = (a, b, c?: number) => {
  if (c) return a / b / c;
  return a / b;
};

// Polymorphism: multi-shaped
// Generic: call signature 작성 시 확실한 타입 모를 때 사용하는 placeholder, 확장성 good
type PrintSomething = <T, M>(a: T[], b: M) => T;

const printSomething: PrintSomething = (arr) => {
  arr.forEach((i) => console.log(i));
  return arr[0];
};

const a = printSomething([1, 2], 0);
const b = printSomething([true, false], "a");
const c = printSomething([1, "a", null], null);

function printSomething2<V>(a: V[]) {
  return a[0];
}

type Person<T, M> = {
  name: string;
  info: T;
  secondInfo: M;
};

const j: Person<boolean, string> = {
  name: "j",
  info: true,
  secondInfo: "h",
};

type jPerson = Person<boolean, string>;
const j2: jPerson = {
  name: "j",
  info: true,
  secondInfo: "h",
};

type A = Array<number>;
const arr: A = [1, 2];
function printSomething3(a: A) {
  console.log(a[0]);
}
