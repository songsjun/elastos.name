
window.TEST = false;

window.ethUnit = 1000000000000000000;
if (window.TEST) {
    window.contractAddres = "0xefdb328c09b6e20314fe201a5dba74cf36ef8bdd";
}
else {
    window.contractAddres = "0xc4032babad2b76c39abec3c4e365611de78528ed";    
}

window.elaAbi = [{"constant":true,"inputs":[{"name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_uri","type":"string"}],"name":"getAllKeywords","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"increase_level2","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_implementation","type":"address"}],"name":"upgrade","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"addressOwnedTokenIds","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"renewal_level3","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"uri","type":"string"}],"name":"transfer","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_uri","type":"string"}],"name":"externalMint","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"renewal_level2","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_uri","type":"string"},{"name":"_key","type":"string"}],"name":"getKeyword","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"renewal_level1","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price_level1","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_uri","type":"string"}],"name":"renewToken","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"count_level2","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_uri","type":"string"},{"name":"_key","type":"string"}],"name":"removeKeyword","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"peak_count_level2","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"count_level3","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"CANNOT_TRANSFER_TO_ZERO_ADDRESS","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_uri","type":"string"},{"name":"_key","type":"string"},{"name":"_value","type":"string"}],"name":"setKeyword","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"peak_count_level3","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"implementation_slot","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"increase_level3","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_uri","type":"string"},{"name":"_btc","type":"string"},{"name":"_eth","type":"string"},{"name":"_ela","type":"string"},{"name":"_did","type":"string"},{"name":"_pubkey","type":"string"}],"name":"setBasicInfo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"tokenExpiration","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"EXPIRATION","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_uri","type":"string"}],"name":"recycleToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_uri","type":"string"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"tokenPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"count_level1","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price_level3","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"NOT_CURRENT_OWNER","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price_level2","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MAX_KEYWORDS_COUNT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"addr","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"sender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"PaymentReceived","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"uri","type":"string"},{"indexed":false,"name":"hash","type":"uint256"}],"name":"PaymentLog","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":true,"name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"approved","type":"address"},{"indexed":true,"name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"operator","type":"address"},{"indexed":false,"name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"}];

window.initWallet = function initWallet() {
    return new Promise((resolve, reject) => {
        if (typeof window.ethereum === 'undefined') {
            //reject('Looks like you need a Dapp browser to get started.Consider installing MetaMask!');
            window.web3 = new Web3(new Web3.providers.HttpProvider("https://mainrpc.elaeth.io"));
        } else {
            //resolve(1);
            ethereum.enable().catch((reason) => {
                window.web3 = new Web3(new Web3.providers.HttpProvider("https://mainrpc.elaeth.io"));
                reject(reason);
            }).then(() => {
                window.web3 = new Web3(ethereum);
                var selectedAddress = ethereum.selectedAddress;
                resolve(selectedAddress);

            });
            ethereum.on('accountsChanged', function (accounts) {
                window.location.href = window.location.href;
            });
            ethereum.on('networkChanged', function (accounts) {
                window.location.href = window.location.href;
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