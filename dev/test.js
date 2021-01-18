const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

const previousBlockHash = 'H48RH043W8RHFW8F0UR3';
const currentBlockData =[
{
    sender: 'HE04RHF0834R0W',
    recipient: 'E3HW0F9RHW904ERH',
    amount: 1000
},
{
    sender: 'UDSUFUCDSDHF0834R0W',
    recipient: 'E3HEFDESFEFEWFEW904ERH',
    amount: 500
},
{
    sender: 'AADSAD834R0W',
    recipient: 'PGTKOGF9RHW904ERH',
    amount: 700
}
]

const nonce = 100;

bitcoin.hashBlock()

console.log(bitcoin);