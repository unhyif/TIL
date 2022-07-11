// TS는 JS로의 컴파일 과정에서 사전에 오류를 발견할 수 있기 때문에, 런타임 에러를 줄일 수 있음

// Implicit  type
let a = "hello"; // TS infers type
a = "bye";

// Explicit  type
let b: boolean = true;
const c: number[] = [];
c.push(0);

// Read-only
const d: readonly string[] = ["D"];
// d.push("No push")

// Alias
type Age = number;
// Optional type
type Player = { readonly name: string; age?: Age };

const j: Player = {
  name: "J",
};
// j.name = "No change"

const h: Player = {
  name: "H",
  age: 20,
};

if (h.age && h.age < 20) {
  h.age = 20;
}

// Return value of function
function makePlayer(name: string): Player {
  return { name };
}
const makePlayer2 = (name: string): Player => ({ name });

const e = makePlayer("E");
e.age = 20;

// Tuple
const f: [number, string, boolean] = [1, "2", false];
f.push("No error");

// Other types
let g: null = null;
const i: { message: any } = { message: true };
i.message = "Hi";

let k: unknown;
if (typeof k === "undefined") {
  console.log("Type checked");
}

function raiseError(): never {
  throw new Error("Never");
}
function raiseError2(age: Age | boolean) {
  if (typeof age === "number") {
  } else if (typeof age === "boolean") {
  } else {
    raiseError();
  }
}
