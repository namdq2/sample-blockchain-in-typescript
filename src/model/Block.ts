export default class Block {
    private index: number;
    private timestamp: number;
    private transactions: Array<string>;
    private previousHash: string;
    private hash: string;

    public getPrevBlockHash() {
        return this.previousHash;
    }

    public setPrevBlockHash(prevBlockHash: string) {
        this.previousHash = prevBlockHash;
    }

    public getTransactions() {
        return this.transactions;
    }

    public setTransactions(transactions: Array<string>) {
        this.transactions = transactions;
    }

    public getHash() {
        return this.hash;
    }

    public setHash(hash: string) {
        this.hash = hash;
    }

    public getIndex() {
        return this.index;
    }

    public setIndex(index: number) {
        this.index = index;
    }

    public setTimestamp(timestamp: number) {
        this.timestamp = timestamp;
    }

    public getTimestamp() {
        return this.timestamp;
    }
}