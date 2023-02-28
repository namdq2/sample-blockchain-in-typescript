import BlockChain from "../model/BlockChain";
import Block from "../model/Block";

export default interface BlockChainService {
    addBlock(block: Block): void;
    getChain(): BlockChain;
    getLatestBlock(): Block;
}