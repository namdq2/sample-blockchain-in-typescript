import Block from "./Block";

export default class BlockChain {
    private readonly blocks: Array<Block>;

    constructor() {
        this.blocks = new Array<Block>();
        this.blocks.push(Block.newGenesisBlock());
    }

    public addBlock(transactions: string[]) {
        const prevBlock = this.blocks.at(-1);
        const newBlock = Block.newBlock(transactions, prevBlock);
        this.blocks.push(newBlock);
    }

    public getBlocks() {
        return this.blocks;
    }
}