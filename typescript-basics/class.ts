// Abstract class: 상속받는 자식 클래스가 가질 property와 메소드를 지정함. 인스턴스 생성 불가능. JS 컴파일 시 일반 클래스로 변함
abstract class Person {
  constructor(
    private firstName: string,
    protected lastName: string,
    public nickname: string
  ) {}

  // Abstract method: 추상 클래스의 자식 클래스가 구현해야 하는 메소드
  abstract getLastName(): void;

  private getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class User extends Person {
  getLastName() {
    console.log(this.lastName);
  }
}

const j = new User("j", "k", "jh");
// j.getFullName();

type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words = {};

  add(word: Word) {
    if (this.words[word.term]) return;
    this.words[word.term] = word.definition;
  }

  read(term: string) {
    return this.words[term] ? this.words[term] : null;
  }

  edit(term: string, definition: string) {
    if (!this.words[term]) return;
    this.words[term] = definition;
  }

  remove(term: string) {
    if (!this.words[term]) return;
    delete this.words[term];
  }

  // 기존 JS 기능
  static welcome() {
    console.log("I'm a dictionary");
  }
}

class Word {
  constructor(
    public readonly term: string,
    public readonly definition: string
  ) {}
}

const dict = new Dict();
const apple = new Word("apple", "a red fruit");

dict.add(apple);
dict.read("apple");
dict.edit("apple", "a delicious fruit");
dict.read("apple");
dict.remove("apple");
