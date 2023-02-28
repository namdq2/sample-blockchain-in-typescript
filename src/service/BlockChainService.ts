import BlockChain from "../model/BlockChain";
import Block from "../model/Block";

export default interface BlockChainService {
    addBlock(input: Block | string[]): void;
    getBlockChain(): BlockChain;
}