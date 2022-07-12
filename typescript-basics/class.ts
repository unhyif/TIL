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
}

class Word {
  constructor(public term: string, public definition: string) {}
}

const dict = new Dict();
const apple = new Word("apple", "a red fruit");

dict.add(apple);
dict.read("apple");
dict.edit("apple", "a delicious fruit");
dict.read("apple");
dict.remove("apple");
