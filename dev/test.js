const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(2389, 'J9FR0HTE4HRT80', 'H9FE7W3E9E8HHW9E');

bitcoin.createNewTransaction(100,'ALEXEH9FERF','JANEEWFEW93EWDWE');

bitcoin.createNewBlock(4523, 'FWEUFIWE3W9W23EDH2', '0329484C38CHBFK');

console.log(bitcoin);