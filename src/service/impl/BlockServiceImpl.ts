import BlockService from "../BlockService";
import Block from "../../model/Block";
import {createHash} from "crypto";

export default class BlockServiceImpl implements BlockService {
    calculateHash(block: Block): string {
        const headers = "".concat(block.getPrevBlockHash(), block.getTransactions().join(""), String(block.getTimestamp()));
        return createHash("sha256").update(headers).digest("hex");
    }

    newBlock(transactions: string[], prevBlock: Block): Block {
        let block = new Block();
        block.setIndex(prevBlock.getIndex() + 1);
        block.setTimestamp(Date.now());
        block.setTransactions(transactions);
        block.setPrevBlockHash(prevBlock.getHash());
        block.setHash(this.calculateHash(block));
        return block;
    }

    newGenesisBlock(): Block {
        let block = new Block();
        block.setIndex(0);
        block.setTimestamp(Date.now());
        block.setTransactions(new Array<string>("Genesis Block"));
        block.setPrevBlockHash("0000000000000000000000000000000000000000000000000000000000000000");
        block.setHash(this.calculateHash(block));
        return block;
    }

}