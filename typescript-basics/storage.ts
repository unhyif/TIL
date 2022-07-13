interface MyStorage<T> {
  [key: string]: T;
}

class LocalStorage<T> {
  private storage: MyStorage<T> = {};

  set(key: string, payload: T) {
    if (this.storage[key]) {
      throw new Error();
    }
    this.storage[key] = payload;
  }

  get(key: string): T | undefined {
    return this.storage[key] ? this.storage[key] : undefined;
  }

  remove(key: string) {
    if (!this.storage[key]) {
      throw new Error();
    }
    delete this.storage[key];
  }

  clear() {
    this.storage = {};
  }
}

const booleanStorage = new LocalStorage<boolean>();
booleanStorage.set("isFun", true);
