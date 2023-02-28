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
        if (!input) {
            console.log(`Block must be not null.\n`);
            return;
        }
        const prevBlock = this.blockChain.getBlocks().at(-1);
        let block: Block = input instanceof Block
            ? input : this.blockService.newBlock(input, prevBlock);

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

        return block.getPrevBlockHash() === previousBlock.getHash();
    }
}