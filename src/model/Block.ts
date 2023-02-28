export default class Block {
    private index: number;
    private timestamp: number;
    private transactions: Array<string>;
    private previousHash: string;
    private hash: string;

    public getPrevBlockHash(): string {
        return this.previousHash;
    }

    public setPrevBlockHash(prevBlockHash: string) {
        this.previousHash = prevBlockHash;
    }

    public getTransactions(): string[] {
        return this.transactions;
    }

    public setTransactions(transactions: Array<string>) {
        this.transactions = transactions;
    }

    public getHash(): string {
        return this.hash;
    }

    public setHash(hash: string) {
        this.hash = hash;
    }

    public getIndex(): number {
        return this.index;
    }

    public setIndex(index: number) {
        this.index = index;
    }

    public setTimestamp(timestamp: number) {
        this.timestamp = timestamp;
    }

    public getTimestamp(): number {
        return this.timestamp;
    }
}