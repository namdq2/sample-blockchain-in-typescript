import Block from "./Block";

export default class BlockChain {
    private readonly blocks: Array<Block>;

    constructor() {
        this.blocks = new Array<Block>();
    }

    public getBlocks() {
        return this.blocks;
    }

    public addBlock(block: Block) {
        this.blocks.push(block);
    }
}