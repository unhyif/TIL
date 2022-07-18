import crypto from "crypto";

interface BlockShape {
  prevHash: string;
  hash: string;
  height: number;
  data: string;
}

class Block implements BlockShape {
  public hash: string;
  constructor(
    public prevHash: string,
    public height: number,
    public data: string
  ) {
    this.hash = Block.calculateHash(prevHash, height, data);
  }

  // hash: string = Block.calculateHash(this.prevHash, this.height, this.data);

  static calculateHash(prevHash: string, height: number, data: string): string {
    const hash = `${prevHash}${height}${data}`;
    return crypto.createHash("sha256").update(hash).digest("hex");
  }
}
