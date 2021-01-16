const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(2389, 'J9FR0HTE4HRT80', 'H9FE7W3E9E8HHW9E');
bitcoin.createNewBlock(7382, 'ADGE7R8E3REW8E3', 'XDAHSEDHE89E338DH');

console.log(bitcoin);