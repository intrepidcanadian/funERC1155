// create constructor and connect to testnet

const web3Library = new Web3("https://evmtestnet.confluxrpc.com/");


console.log(web3Library);
console.log(web3Library.eth);

const sender_address = "0x8DabF51501196a7700c97616bD82791cF31Ac685";
const recipient_address = "0xD7Dc370903e5A09EfeECaa8eBdCc33410AAaE69d";

// get CFX balances of the above addresses

const getBalances = async () => {
    try {
        const balance_sender = web3Library.utils.fromWei(await web3Library.eth.getBalance(sender_address), 'ether');
        const balance_recipient = web3Library.utils.fromWei(await web3Library.eth.getBalance(recipient_address), 'ether');

        console.log(`The balance of ${sender_address} is: ${balance_sender} CFX`);
        console.log(`The balance of ${recipient_address} is: ${balance_recipient} CFX`);

    }

    catch (error) {
        console.error('Error retrieving balances:', error);
    }

};

getBalances();



