import Block from "../model/Block";

export default interface BlockService {
    newGenesisBlock(): Block;
    newBlock(transactions: string[], prevBlock: Block): Block;
    calculateHash(block: Block): string;
}