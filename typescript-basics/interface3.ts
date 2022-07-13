type playerA = {
  firstName: string;
};

class UserA implements playerA {
  constructor(public firstName: string) {}
}

interface playerB {
  firstName: string;
}

class UserB implements playerB {
  constructor(public firstName: string) {}
}
