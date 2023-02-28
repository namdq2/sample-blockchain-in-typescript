import Block from "../../model/Block";
import BlockChain from "../../model/BlockChain";
import BlockChainService from "../BlockChainService";
import BlockService from "../BlockService";
import BlockServiceImpl from "./BlockServiceImpl";

export default class BlockChainServiceImpl implements BlockChainService {
    private readonly blockChain: BlockChain;
    private blockService: BlockService = new BlockServiceImpl();

    constructor() {
        this.blockChain = new BlockChain();
        this.blockChain.addBlock(this.blockService.newGenesisBlock());
    }

    getBlockChain(): BlockChain {
        return this.blockChain;
    }

    addBlock(input: Block | string[]): void {
        if (input instanceof Block) {
            this.blockChain.addBlock(input);
            return;
        }

        const prevBlock = this.blockChain.getBlocks().at(-1);
        const newBlock = this.blockService.newBlock(input, prevBlock);
        this.blockChain.addBlock(newBlock);
    }
}