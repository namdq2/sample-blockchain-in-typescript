import {createHash} from "crypto";

export default class Block {
    private index: number;
    private timestamp: number;
    private transactions: Array<string>;
    private previousHash: string;
    private hash: string;

    public static newGenesisBlock() {
        let block = new Block();
        block.index = 0;
        block.timestamp = Number(new Date().getSeconds());
        block.transactions = new Array<string>("Genesis Block");
        block.previousHash = "0000000000000000000000000000000000000000000000000000000000000000";
        block.generateHash();
        return block;
    };

    public static newBlock(transactions: string[], prevBlock: Block): Block {
        let block = new Block();
        block.index = prevBlock.index + 1;
        block.timestamp = Number(new Date().getSeconds());
        block.transactions = transactions;
        block.previousHash = String(prevBlock.getHash());
        block.generateHash();
        return block
    };

    generateHash() {
        const headers = "".concat(this.previousHash, this.transactions.join(""), String(this.timestamp));
        this.hash = createHash("sha256").update(headers).digest("hex");
    }

    public getPrevBlockHash() {
        return this.previousHash;
    }

    public getTransactions() {
        return this.transactions;
    }

    public getHash() {
        return this.hash;
    }

    public getIndex() {
        return this.index;
    }
}