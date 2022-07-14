abstract class Person {
  constructor(protected firstName: string, protected lastName: string) {}
  abstract getFullName(): string;
  abstract sayHi(name: string): string;
}

class Player extends Person {
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `Hi ${name}, I'm ${this.getFullName()}`;
  }
}

interface Life {
  breath: boolean;
}

interface Person2 {
  firstName: string;
  lastName: string;
  getFullName(): string;
  sayHi(name: string): string;
}

class Player2 implements Life, Person2 {
  constructor(
    public breath: boolean,
    public firstName: string,
    public lastName: string
  ) {} // Interface 상속 시 private/protected property 사용 불가능
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `Hi ${name}, I'm ${this.getFullName()}`;
  }
}
