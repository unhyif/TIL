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

class Blockchain {
  private blocks: Block[];
  constructor() {
    this.blocks = [];
  }

  private getPrevHash() {
    return !this.blocks.length ? "" : this.blocks[this.blocks.length - 1].hash;
  }

  addBlock(data: string) {
    const block = new Block(this.getPrevHash(), this.blocks.length + 1, data);
    this.blocks.push(block);
  }

  getBlocks() {
    return [...this.blocks];
  }
}

const blockchain = new Blockchain();

blockchain.addBlock("First");
blockchain.addBlock("Second");
blockchain.addBlock("Third");

console.log(blockchain.getBlocks());
