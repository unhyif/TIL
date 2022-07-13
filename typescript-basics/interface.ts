// Type: versatile
type Team = "red" | "blue";

type Player = {
  name: string;
  team: Team;
};

const a: Player = {
  name: "A",
  team: "red",
};

type PlayerA = {
  name: string;
};

type PlayerAA = PlayerA & {
  team: Team;
};

const aa: PlayerAA = {
  name: "A",
  team: "red",
};

// Interface: 오브젝트 구조 설정/추상 클래스 대체, JS 컴파일 시 코드 사라짐. property 추가 가능
interface PlayerB {
  name: string;
  team: Team;
}

interface playerBB extends PlayerB {
  age: number;
}

const b: playerBB = {
  name: "B",
  team: "blue",
  age: 20,
};

interface PlayerC {
  readonly name: string;
}

interface PlayerC {
  team: Team;
}

const c: PlayerC = {
  name: "C",
  team: "blue",
};
