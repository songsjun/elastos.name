window.ethUnit = 1000000000000000000;
var contractAddres = "0xb6FB2A951aC72f97965fCbC784754e6ff584C341";
var elaAbi = [{
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
        "type": "bool",
        "name": ""
    }],
    "name": "supportsInterface",
    "inputs": [{
        "type": "bytes4",
        "name": "interfaceId"
    }],
    "constant": true
}, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
        "type": "string",
        "name": ""
    }],
    "name": "name",
    "inputs": [],
    "constant": true
}, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
        "type": "address",
        "name": ""
    }],
    "name": "getApproved",
    "inputs": [{
        "type": "uint256",
        "name": "tokenId"
    }],
    "constant": true
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "payable": false,
    "outputs": [],
    "name": "upgrade",
    "inputs": [{
        "type": "address",
        "name": "_implementation"
    }],
    "constant": false
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "payable": false,
    "outputs": [],
    "name": "approve",
    "inputs": [{
        "type": "address",
        "name": "to"
    }, {
        "type": "uint256",
        "name": "tokenId"
    }],
    "constant": false
}, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
        "type": "uint256",
        "name": ""
    }],
    "name": "totalSupply",
    "inputs": [],
    "constant": true
}, {
    "type": "function",
    "stateMutability": "payable",
    "payable": true,
    "outputs": [],
    "name": "externalMint",
    "inputs": [{
        "type": "uint256",
        "name": "_tokenId"
    }, {
        "type": "string",
        "name": "_uri"
    }],
    "constant": false
}, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
        "type": "uint256",
        "name": ""
    }],
    "name": "addressOwnedTokenIds",
    "inputs": [{
        "type": "address",
        "name": ""
    }, {
        "type": "uint256",
        "name": ""
    }],
    "constant": true
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "payable": false,
    "outputs": [],
    "name": "transferFrom",
    "inputs": [{
        "type": "address",
        "name": "from"
    }, {
        "type": "address",
        "name": "to"
    }, {
        "type": "uint256",
        "name": "tokenId"
    }],
    "constant": false
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "payable": false,
    "outputs": [],
    "name": "withdraw",
    "inputs": [{
        "type": "uint256",
        "name": "amount"
    }],
    "constant": false
}, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
        "type": "uint256",
        "name": ""
    }],
    "name": "tokenOfOwnerByIndex",
    "inputs": [{
        "type": "address",
        "name": "owner"
    }, {
        "type": "uint256",
        "name": "index"
    }],
    "constant": true
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "payable": false,
    "outputs": [],
    "name": "safeTransferFrom",
    "inputs": [{
        "type": "address",
        "name": "from"
    }, {
        "type": "address",
        "name": "to"
    }, {
        "type": "uint256",
        "name": "tokenId"
    }],
    "constant": false
}, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
        "type": "uint256",
        "name": ""
    }],
    "name": "tokenByIndex",
    "inputs": [{
        "type": "uint256",
        "name": "index"
    }],
    "constant": true
}, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
        "type": "address",
        "name": ""
    }],
    "name": "ownerOf",
    "inputs": [{
        "type": "uint256",
        "name": "tokenId"
    }],
    "constant": true
}, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
        "type": "uint256",
        "name": ""
    }],
    "name": "balanceOf",
    "inputs": [{
        "type": "address",
        "name": "owner"
    }],
    "constant": true
}, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
        "type": "string",
        "name": ""
    }],
    "name": "CANNOT_TRANSFER_TO_ZERO_ADDRESS",
    "inputs": [],
    "constant": true
}, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
        "type": "address",
        "name": ""
    }],
    "name": "owner",
    "inputs": [],
    "constant": true
}, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
        "type": "string",
        "name": ""
    }],
    "name": "symbol",
    "inputs": [],
    "constant": true
}, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
        "type": "address",
        "name": ""
    }],
    "name": "implementation_slot",
    "inputs": [],
    "constant": true
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "payable": false,
    "outputs": [],
    "name": "setApprovalForAll",
    "inputs": [{
        "type": "address",
        "name": "to"
    }, {
        "type": "bool",
        "name": "approved"
    }],
    "constant": false
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "payable": false,
    "outputs": [],
    "name": "safeTransferFrom",
    "inputs": [{
        "type": "address",
        "name": "from"
    }, {
        "type": "address",
        "name": "to"
    }, {
        "type": "uint256",
        "name": "tokenId"
    }, {
        "type": "bytes",
        "name": "_data"
    }],
    "constant": false
}, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
        "type": "string",
        "name": ""
    }],
    "name": "tokenURI",
    "inputs": [{
        "type": "uint256",
        "name": "tokenId"
    }],
    "constant": true
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "payable": false,
    "outputs": [],
    "name": "mint",
    "inputs": [{
        "type": "address",
        "name": "_to"
    }, {
        "type": "uint256",
        "name": "_tokenId"
    }, {
        "type": "string",
        "name": "_uri"
    }],
    "constant": false
}, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
        "type": "bool",
        "name": ""
    }],
    "name": "isApprovedForAll",
    "inputs": [{
        "type": "address",
        "name": "owner"
    }, {
        "type": "address",
        "name": "operator"
    }],
    "constant": true
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "payable": false,
    "outputs": [],
    "name": "transferOwnership",
    "inputs": [{
        "type": "address",
        "name": "_newOwner"
    }],
    "constant": false
}, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
        "type": "string",
        "name": ""
    }],
    "name": "NOT_CURRENT_OWNER",
    "inputs": [],
    "constant": true
}, {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "payable": false,
    "inputs": [{
        "type": "string",
        "name": "name"
    }, {
        "type": "string",
        "name": "symbol"
    }]
}, {
    "type": "event",
    "name": "Withdraw",
    "inputs": [{
        "type": "address",
        "name": "addr",
        "indexed": false
    }, {
        "type": "uint256",
        "name": "amount",
        "indexed": false
    }],
    "anonymous": false
}, {
    "type": "event",
    "name": "OwnershipTransferred",
    "inputs": [{
        "type": "address",
        "name": "previousOwner",
        "indexed": true
    }, {
        "type": "address",
        "name": "newOwner",
        "indexed": true
    }],
    "anonymous": false
}, {
    "type": "event",
    "name": "PaymentReceived",
    "inputs": [{
        "type": "address",
        "name": "sender",
        "indexed": true
    }, {
        "type": "uint256",
        "name": "value",
        "indexed": false
    }],
    "anonymous": false
}, {
    "type": "event",
    "name": "PaymentLog",
    "inputs": [{
        "type": "string",
        "name": "uri",
        "indexed": false
    }, {
        "type": "uint256",
        "name": "hash",
        "indexed": false
    }],
    "anonymous": false
}, {
    "type": "event",
    "name": "Transfer",
    "inputs": [{
        "type": "address",
        "name": "from",
        "indexed": true
    }, {
        "type": "address",
        "name": "to",
        "indexed": true
    }, {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
    }],
    "anonymous": false
}, {
    "type": "event",
    "name": "Approval",
    "inputs": [{
        "type": "address",
        "name": "owner",
        "indexed": true
    }, {
        "type": "address",
        "name": "approved",
        "indexed": true
    }, {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
    }],
    "anonymous": false
}, {
    "type": "event",
    "name": "ApprovalForAll",
    "inputs": [{
        "type": "address",
        "name": "owner",
        "indexed": true
    }, {
        "type": "address",
        "name": "operator",
        "indexed": true
    }, {
        "type": "bool",
        "name": "approved",
        "indexed": false
    }],
    "anonymous": false
}];
window.initWallet = function initWallet() {
    return new Promise((resolve, reject) => {
        if (typeof window.ethereum === 'undefined') {
            reject('Looks like you need a Dapp browser to get started.Consider installing MetaMask!');
        } else {
            //resolve(1);
            ethereum.enable().catch((reason) => {
                reject(reason);
            }).then(() => {
                var selectedAddress = ethereum.selectedAddress;
                resolve(selectedAddress);
            });
        }
    });
};

window.getWethContracts = function getWethContracts() {
    return new Promise((resolve, reject) => {
        try {
            if (typeof web3 !== 'undefined') {
                web3 = new Web3(web3.currentProvider);
            }
            var infoContract = web3.eth.contract(this.elaAbi);
            var info = infoContract.at(this.contractAddres);
            resolve(info);
        } catch (err) {
            reject(JSON.stringify(err));
        }

    });
};

window.chargeToken = function chargeToken(fromAccount, amount) {
    console.log("fromAccount==" + fromAccount + "amount==" + amount);
    return new Promise((resolve, reject) => {
        if (typeof web3 !== 'undefined') {
            web3 = new Web3(web3.currentProvider);
        }

        var message = { from: fromAccount, to: this.contractAddres, value: web3.toWei(amount, 'ether') };
        web3.eth.sendTransaction(message, (err, res) => {
            if (!err) {
                resolve(res);
            } else {
                reject(err);
            }
        });
    });
}