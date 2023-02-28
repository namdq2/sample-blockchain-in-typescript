import BlockChainServiceImpl from "./service/impl/BlockChainServiceImpl";

const blockChainService = new BlockChainServiceImpl();
blockChainService.addBlock(["Send 1 BTC to Nam"])
blockChainService.addBlock(["Send 2 more BTC to Nam"])

for (const block of blockChainService.getBlockChain().getBlocks()) {
    console.log(`Prev. hash: ${block.getPrevBlockHash()}`);
    console.log(`Index: ${block.getIndex()}`);
    console.log(`Data: ${block.getTransactions()}`);
    console.log(`Hash: ${block.getHash()}`);
    console.log(``);
}

