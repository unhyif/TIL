// Type definition: TS가 JS 코드의 타입을 이해하기 위함

interface Config {
  url: string;
}

declare module "package" {
  function init(config: Config): boolean;
  function exit(code: number): number;
}
