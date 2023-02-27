import BlockChain from "./model/BlockChain";

const bc = new BlockChain();
bc.addBlock(["Send 1 BTC to Nam"]);
bc.addBlock(["Send 2 more BTC to Nam"]);

for (const block of bc.getBlocks()) {
    console.log(`Prev. hash: ${block.getPrevBlockHash()}`);
    console.log(`Index: ${block.getIndex()}`);
    console.log(`Data: ${block.getTransactions()}`);
    console.log(`Hash: ${block.getHash()}`);
    console.log(``);
}

