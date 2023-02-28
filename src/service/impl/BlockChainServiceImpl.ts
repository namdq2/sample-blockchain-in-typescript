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

    getChain(): BlockChain {
        return this.blockChain;
    }

    getLatestBlock(): Block {
        return this.blockChain.getLatestBlock();
    }

    addBlock(block: Block): void {
        const prevBlock = this.getLatestBlock();
        const isValid = this.validateBlock(block, prevBlock);

        if (isValid) {
            this.blockChain.addBlock(block);
            console.log(`Block ${block.getIndex()} added to the blockchain.\n`);
        } else {
            console.log(`Invalid block: ${JSON.stringify(block)}.\n`);
        }
    }

    private validateBlock(block: Block, previousBlock: Block): boolean {
        if (block.getIndex() !== previousBlock.getIndex() + 1) {
            return false;
        }

        if (block.getPrevBlockHash() !== previousBlock.getHash()) {
            return false;
        }

        const calculatedHash = this.blockService.calculateHash(block);
        return block.getHash() === calculatedHash;
    }
}