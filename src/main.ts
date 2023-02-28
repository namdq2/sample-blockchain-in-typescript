import BlockChainServiceImpl from "./service/impl/BlockChainServiceImpl";
import Block from "./model/Block";
import BlockServiceImpl from "./service/impl/BlockServiceImpl";

const blockService = new BlockServiceImpl();
const blockChainService = new BlockChainServiceImpl();

const block1 = blockService.newBlock(["Send 1 BTC to Nam"], blockChainService.getLatestBlock());
blockChainService.addBlock(block1);

const block2 = blockService.newBlock(["Send 2 BTC to Nam"], blockChainService.getLatestBlock());
blockChainService.addBlock(block2);

const block = new Block();
block.setIndex(1);
blockChainService.addBlock(block);

for (const block of blockChainService.getChain().getBlocks()) {
    console.log(`Prev. hash: ${block.getPrevBlockHash()}`);
    console.log(`Index: ${block.getIndex()}`);
    console.log(`Data: ${block.getTransactions()}`);
    console.log(`Hash: ${block.getHash()}`);
    console.log(``);
}

